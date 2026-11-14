import { useEffect, useRef, useState } from "react";
import Lightbox from "./components/Lightbox";
import ProjectModal from "./components/ProjectModal";
import SiteHeader from "./components/SiteHeader";
import { fallbackPortfolioData } from "./data";
import { useReveal } from "./hooks/useReveal";
import { getPortfolioData } from "./lib/portfolio";
import { gallerySetOf } from "./lib/projectUtils";
import About from "./sections/About";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  const [portfolio, setPortfolio] = useState(fallbackPortfolioData);
  // { kind: "detail" | "gallery", project }
  const [modal, setModal] = useState(null);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);

  useReveal(rootRef);

  const { profile, site } = portfolio;
  const projects = portfolio.projects ?? [];
  const skills = portfolio.skills ?? [];
  const certificates = portfolio.certificates ?? [];
  const tools = skills.flatMap((skill) => skill.tools);

  const shotMap = {
    clinic: portfolio.clinicShots ?? [],
    fintrack: portfolio.fintrackShots ?? [],
    rahsa: portfolio.rahsaShots ?? [],
  };
  const shotsFor = (project) => shotMap[gallerySetOf(project)] ?? [];

  useEffect(() => {
    let mounted = true;
    getPortfolioData().then((result) => {
      if (mounted) setPortfolio(result.data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Kunci scroll halaman saat modal / lightbox terbuka.
  useEffect(() => {
    document.documentElement.style.overflow = modal ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [modal]);

  const open = (kind, project) => {
    if (!modal) triggerRef.current = document.activeElement;
    setModal({ kind, project });
  };
  const close = () => {
    setModal(null);
    const trigger = triggerRef.current;
    triggerRef.current = null;
    if (trigger?.isConnected) requestAnimationFrame(() => trigger.focus({ preventScroll: true }));
  };

  const modalShots = modal ? shotsFor(modal.project) : [];

  return (
    <div className="pf" ref={rootRef}>
      <div className="grain" aria-hidden="true" />
      <SiteHeader site={site} navLinks={portfolio.navLinks ?? []} />

      <main>
        <Hero
          profile={profile}
          projectCount={projects.length}
          certificateCount={certificates.length}
          tools={tools}
        />
        <About items={portfolio.aboutItems ?? []} profile={profile} skills={skills} />
        <Education items={portfolio.educationItems ?? []} />
        <Projects
          projects={projects}
          shotsFor={shotsFor}
          onGallery={(project) => open("gallery", project)}
          onDetail={(project) => open("detail", project)}
        />
        <Certificates certificates={certificates} />
        <Contact site={site} profile={profile} links={portfolio.contactLinks ?? []} />
      </main>

      {modal?.kind === "detail" ? (
        <ProjectModal
          key={`detail-${modal.project.title}`}
          project={modal.project}
          hasGallery={modalShots.length > 0}
          onClose={close}
          onGallery={() => open("gallery", modal.project)}
        />
      ) : null}

      {modal?.kind === "gallery" && modalShots.length > 0 ? (
        <Lightbox
          key={`gallery-${modal.project.title}`}
          project={modal.project}
          images={modalShots}
          onClose={close}
          onDetail={() => open("detail", modal.project)}
        />
      ) : null}
    </div>
  );
}

export default App;
