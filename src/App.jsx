import { useEffect, useMemo, useState } from "react";
import CertificateModal from "./components/CertificateModal";
import ImageViewer from "./components/ImageViewer";
import SiteHeader from "./components/SiteHeader";
import { fallbackPortfolioData } from "./data";
import { useGallery } from "./hooks/useGallery";
import { getPortfolioData } from "./lib/portfolio";
import About from "./sections/About";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { calculateAge } from "./utils/calculateAge";

function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolioData);
  const [activeCertificate, setActiveCertificate] = useState(null);

  const profile = portfolio.profile;
  const projects = portfolio.projects ?? [];
  const certificates = portfolio.certificates ?? [];
  const age = useMemo(() => profile?.age ?? calculateAge(), [profile?.age]);

  const gallery = useGallery({
    clinic: { title: "Klinik Billing System", images: portfolio.clinicShots ?? [] },
    fintrack: { title: "Fintrack", images: portfolio.fintrackShots ?? [] },
  });

  useEffect(() => {
    let mounted = true;

    getPortfolioData().then((result) => {
      if (mounted) setPortfolio(result.data);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <SiteHeader navLinks={portfolio.navLinks ?? []} />

      <main id="top">
        <Hero
          profile={profile}
          age={age}
          projectCount={projects.length}
          certificateCount={certificates.length}
        />
        <About items={portfolio.aboutItems ?? []} profile={profile} age={age} />
        <Education items={portfolio.educationItems ?? []} />
        <Skills skills={portfolio.skills ?? []} />
        <Projects projects={projects} onGalleryOpen={(set) => gallery.open(set)} />
        <Certificates certificates={certificates} onSelect={setActiveCertificate} />
        <Contact email={profile?.email} links={portfolio.contactLinks ?? []} />
      </main>

      <footer className="site-footer" />

      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />

      <ImageViewer
        title={gallery.title}
        images={gallery.images}
        activeIndex={gallery.activeIndex}
        onSelect={gallery.select}
        onPrev={gallery.showPrev}
        onNext={gallery.showNext}
        onClose={gallery.close}
      />
    </>
  );
}

export default App;
