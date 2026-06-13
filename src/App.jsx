import { useEffect, useMemo, useState } from "react";
import DarkVeil from "./DarkVeil";
import { fallbackPortfolioData } from "./data";
import { getPortfolioData } from "./lib/portfolio";

function calculateAge() {
  const birthDate = new Date(2003, 2, 3);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

function Modal({ open, title, onClose, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal-panel"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal-header">
          <h3>{title}</h3>
          <button type="button" className="ghost-button" onClick={onClose}>
            Tutup
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function ImageViewer({ title, images, activeIndex, onSelect, onPrev, onNext, onClose }) {
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  if (!activeImage) return null;

  return (
    <Modal open={activeIndex !== null} title={title} onClose={onClose}>
      <div className="viewer-shell">
        <div className="viewer-toolbar">
          <p>{activeIndex + 1} / {images.length}</p>
        </div>
        <div className="viewer-stage">
          <button type="button" className="viewer-nav" onClick={onPrev} aria-label="Gambar sebelumnya">
            {"<"}
          </button>
          <img src={activeImage} alt={`Screenshot ${title}`} className="viewer-image" />
          <button type="button" className="viewer-nav" onClick={onNext} aria-label="Gambar berikutnya">
            {">"}
          </button>
        </div>
        <div className="viewer-thumbs" aria-label="Thumbnail galeri">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`viewer-thumb ${index === activeIndex ? "active" : ""}`}
              onClick={() => onSelect(index)}
              aria-label={`Buka gambar ${index + 1}`}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}

function ProjectAction({ action, onGalleryOpen }) {
  if (action.action === "gallery") {
    return (
      <button type="button" className={`action-button ${action.variant}`} onClick={() => onGalleryOpen(action.gallerySet)}>
        {action.label}
      </button>
    );
  }

  if (action.internal) {
    return (
      <a className={`action-button ${action.variant}`} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <a
      className={`action-button ${action.variant}`}
      href={action.href}
      target="_blank"
      rel="noreferrer"
    >
      {action.label}
    </a>
  );
}

function Icon({ name }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    html: (
      <svg {...commonProps}>
        <path d="M5 3h14l-1.3 15.2L12 21l-5.7-2.8L5 3Z" />
        <path d="m8.5 8 .3 3.5h6.2l-.5 4.5-2.5 1.1-2.4-1-.1-1.4" />
        <path d="M15.2 8H8.3" />
      </svg>
    ),
    css: (
      <svg {...commonProps}>
        <path d="M5 3h14l-1.3 15.2L12 21l-5.7-2.8L5 3Z" />
        <path d="M8.2 8h7.4l-.3 3H9l.2 2.2h5.8l-.4 3-2.6 1.1-2.5-1.1" />
      </svg>
    ),
    javascript: (
      <svg {...commonProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 9v6c0 1-1 2-2 2" />
        <path d="M14 14c.3 1 1 2 2.5 2 1.2 0 2-.6 2-1.5 0-2-4.5-.9-4.5-3.8 0-1.4 1.2-2.4 3-2.4 1.6 0 2.6.7 3 2" />
      </svg>
    ),
    python: (
      <svg {...commonProps}>
        <path d="M8 5.5c0-1.4 1.1-2.5 2.5-2.5h3c1.4 0 2.5 1.1 2.5 2.5V9H9.5A2.5 2.5 0 0 0 7 11.5V14H5.5A2.5 2.5 0 0 1 3 11.5v-2C3 7 5 5.5 8 5.5Z" />
        <path d="M16 18.5c0 1.4-1.1 2.5-2.5 2.5h-3C9.1 21 8 19.9 8 18.5V15h6.5a2.5 2.5 0 0 0 2.5-2.5V10h1.5A2.5 2.5 0 0 1 21 12.5v2c0 2.5-2 4-5 4Z" />
        <circle cx="9.5" cy="7.5" r=".5" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="16.5" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
    laravel: (
      <svg {...commonProps}>
        <path d="m4 8 4-2 4 2v4l-4 2-4-2V8Z" />
        <path d="m12 8 4-2 4 2v4l-4 2-4-2" />
        <path d="M8 14v4l4 2 4-2v-4" />
      </svg>
    ),
    flutter: (
      <svg {...commonProps}>
        <path d="M7 16.5 13.5 10 17 13.5 10.5 20 7 16.5Z" />
        <path d="M7 9.5 12.5 4H17l-7.5 7.5H7Z" />
        <path d="m10.5 13 2-2 4.5 4.5H12.5L10.5 13Z" />
      </svg>
    ),
    github: (
      <svg {...commonProps}>
        <path d="M9 19c-4 1.2-4-2-6-2" />
        <path d="M15 22v-3.4a3 3 0 0 0-.9-2.3c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 18.8 6 4.8 4.8 0 0 0 18.7 2S17.5 1.7 15 3.4a13.4 13.4 0 0 0-6 0C6.5 1.7 5.3 2 5.3 2a4.8 4.8 0 0 0-.1 4A5.2 5.2 0 0 0 3.8 9.6c0 5.1 3.1 6.3 6.1 6.7A3 3 0 0 0 9 18.6V22" />
      </svg>
    ),
    linkedin: (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    whatsapp: (
      <svg {...commonProps}>
        <path d="M20 11.5A8.5 8.5 0 0 1 7.4 19l-3.4 1 1.1-3.2A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M9 9.5c.4 2.2 2.3 4.1 4.5 4.5" />
        <path d="M13 14c.8-.1 1.6-.5 2.1-1.1" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}

const DESC_LIMIT = 120;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null);
  const [expandedDesc, setExpandedDesc] = useState({});
  const [portfolio, setPortfolio] = useState(fallbackPortfolioData);
  const age = useMemo(
    () => portfolio.profile?.age ?? calculateAge(),
    [portfolio.profile?.age],
  );
  const profileImage = portfolio.profile?.image;
  const navLinks = portfolio.navLinks ?? [];
  const aboutItems = portfolio.aboutItems ?? [];
  const educationItems = portfolio.educationItems ?? [];
  const skills = portfolio.skills ?? [];
  const projects = portfolio.projects ?? [];
  const certificates = portfolio.certificates ?? [];
  const contactLinks = portfolio.contactLinks ?? [];
  const clinicShots = portfolio.clinicShots ?? [];
  const fintrackShots = portfolio.fintrackShots ?? [];
  const galleryMap = {
    clinic: { title: "Klinik Billing System", images: clinicShots },
    fintrack: { title: "Fintrack", images: fintrackShots },
  };
  const activeGallery = galleryOpen ? galleryMap[galleryOpen] : null;
  const activeGalleryImages = activeGallery?.images ?? [];
  const galleryTitle = activeGallery?.title ?? "Galeri";

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    let mounted = true;

    const loadPortfolio = async () => {
      const result = await getPortfolioData();
      if (!mounted) return;
      setPortfolio(result.data);
    };

    loadPortfolio();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (activeGalleryIndex === null || activeGalleryImages.length === 0) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActiveGalleryIndex((current) => ((current ?? 0) + 1) % activeGalleryImages.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveGalleryIndex((current) => ((current ?? 0) - 1 + activeGalleryImages.length) % activeGalleryImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGalleryIndex, activeGalleryImages.length]);

  const openGalleryViewer = (index, gallerySet = galleryOpen) => {
    setGalleryOpen(gallerySet);
    setActiveGalleryIndex(index);
  };

  const closeGalleryViewer = () => {
    setGalleryOpen(null);
    setActiveGalleryIndex(null);
  };

  const showNextImage = () => {
    setActiveGalleryIndex((current) => ((current ?? 0) + 1) % activeGalleryImages.length);
  };

  const showPrevImage = () => {
    setActiveGalleryIndex((current) => ((current ?? 0) - 1 + activeGalleryImages.length) % activeGalleryImages.length);
  };

  const selectGalleryImage = (index) => {
    setActiveGalleryIndex(index);
  };

  return (
    <>
      <header className="site-header">
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          <span className={`menu-toggle-line ${mobileOpen ? "open" : ""}`} aria-hidden="true" />
          <span>{mobileOpen ? "Tutup" : "Menu"}</span>
        </button>
      </header>

      <button
        type="button"
        className={`mobile-backdrop ${mobileOpen ? "open" : ""}`}
        aria-label="Tutup menu"
        onClick={() => setMobileOpen(false)}
      />

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`} id="mobile-menu">
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              <span>{link.label}</span>
              <span aria-hidden="true">+</span>
            </a>
          ))}
        </nav>
      </div>

      <main id="top">
        <section className="hero-shell section">
          <div className="hero-background" aria-hidden="true">
            <DarkVeil
              hueShift={0}
              noiseIntensity={0}
              scanlineIntensity={0}
              speed={0.5}
              scanlineFrequency={0}
              warpAmount={0}
            />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <section className="hero hero-section">
            <div className="hero-copy">
              <h1>{portfolio.profile?.name}</h1>
              <p className="hero-text">
                {portfolio.profile?.headline}
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Lihat Proyek
                </a>
                <a className="button secondary" href="#contact">
                  Hubungi Saya
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>{projects.length}+</strong>
                  <span>Project</span>
                </div>
                <div>
                  <strong>{certificates.length}</strong>
                  <span>Sertifikat</span>
                </div>
                <div>
                  <strong>{age}</strong>
                  <span>Usia</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <img src={profileImage} alt={`Foto profil ${portfolio.profile?.name ?? "portfolio"}`} />
              <div className="hero-badge">{portfolio.profile?.badge}</div>
            </div>
          </section>
        </section>

        <section id="about" className="section panel panel-grid">
          <div className="section-heading">
            <p className="eyebrow">Tentang</p>
            <h2>Tentang Saya</h2>
          </div>

          <div className="about-grid">
            <div className="about-list">
              {aboutItems.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <aside className="profile-summary">
              <p className="eyebrow">Ringkasan</p>
              <h3>{portfolio.profile?.name}</h3>
              <p>{portfolio.profile?.summary}</p>
              <div className="summary-stats">
                <div>
                  <strong>{age}</strong>
                  <span>Tahun</span>
                </div>
                <div>
                  <strong>{portfolio.profile?.startYear}</strong>
                  <span>Mulai Kuliah</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="education" className="section panel panel-lines">
          <div className="section-heading">
            <p className="eyebrow">Pendidikan</p>
            <h2>Perjalanan Pendidikan</h2>
          </div>

          <div className="timeline">
            {educationItems.map((item) => (
              <article key={`${item.title}-${item.years}`} className="timeline-item">
                <p className="timeline-years">{item.years}</p>
                <h3>{item.title}</h3>
                <p>{item.program}</p>
                {item.school ? <p className="muted">{item.school}</p> : null}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section panel panel-tech">
          <div className="section-heading">
            <p className="eyebrow">Keahlian</p>
            <h2>Skill Utama</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.name} className="skill-card">
                <div className="skill-head">
                  <div className="skill-title">
                    <span className="icon-badge skill-icon">
                      <Icon name={skill.icon} />
                    </span>
                    <h3>{skill.name}</h3>
                  </div>
                </div>
                <div className="tool-list">
                  {skill.tools.map((tool) => (
                    <span key={tool} className="tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section panel panel-spotlight">
          <div className="section-heading">
            <p className="eyebrow">Proyek</p>
            <h2>Project Pilihan</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-top">
                  <div>
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="status-pill">{project.status}</span>
                </div>
                <p className="project-highlight">{project.highlight}</p>
                {project.description.length > DESC_LIMIT ? (
                  <>
                    <div className={`project-desc-wrap ${expandedDesc[project.title] ? "expanded" : ""}`}>
                      <p className="project-desc-text">
                        {expandedDesc[project.title]
                          ? project.description
                          : project.description.slice(0, DESC_LIMIT) + "..."}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="read-more-btn"
                      onClick={() =>
                        setExpandedDesc((prev) => ({
                          ...prev,
                          [project.title]: !prev[project.title],
                        }))
                      }
                    >
                      {expandedDesc[project.title] ? "Tutup" : "Baca Selengkapnya"}
                    </button>
                  </>
                ) : (
                  <p>{project.description}</p>
                )}
                {project.impact ? (
                  <p className="project-impact">
                    <strong>Impact:</strong> {project.impact}
                  </p>
                ) : null}
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.note ? <p className="note">{project.note}</p> : null}
                <div className="project-links">
                  {project.links.map((link) => (
                    <ProjectAction
                      key={link.href}
                      action={link}
                      onGalleryOpen={(gallerySet) => openGalleryViewer(0, gallerySet)}
                    />
                  ))}
                  {project.secondaryAction ? (
                    <ProjectAction
                      action={project.secondaryAction}
                      onGalleryOpen={(gallerySet) => openGalleryViewer(0, gallerySet)}
                    />
                  ) : null}
                  {project.tertiaryAction ? (
                    <ProjectAction
                      action={project.tertiaryAction}
                      onGalleryOpen={(gallerySet) => openGalleryViewer(0, gallerySet)}
                    />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section panel panel-gallery">
          <div className="section-heading">
            <p className="eyebrow">Sertifikat</p>
            <h2>Sertifikat & Penghargaan</h2>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <button
                type="button"
                key={certificate.src}
                className="certificate-card"
                onClick={() => setActiveCertificate(certificate)}
              >
                <img src={certificate.src} alt={certificate.desc} />
                <span className="certificate-year">{certificate.year}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="section panel panel-contact">
          <div className="section-heading">
            <p className="eyebrow">Kontak</p>
            <h2>Mari Terhubung</h2>
          </div>

          <div className="contact-card">
            <p>
              Tertarik untuk berkolaborasi, diskusi project, atau sekadar menyapa? Saya
              terbuka untuk peluang baru dan kerja sama yang relevan.
            </p>
            <a className="mail-link" href="mailto:dimasqpr23@gmail.com">
              {portfolio.profile?.email}
            </a>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  <span className="icon-badge contact-icon">
                    <Icon name={link.icon} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" />

      <Modal
        open={Boolean(activeCertificate)}
        title={activeCertificate?.title ?? "Detail Sertifikat"}
        onClose={() => setActiveCertificate(null)}
      >
        {activeCertificate ? (
          <div className="certificate-viewer">
            <div className="certificate-image-frame">
              <img src={activeCertificate.src} alt={activeCertificate.desc} className="certificate-image" />
            </div>
            <aside className="certificate-detail">
              <p className="eyebrow">{activeCertificate.year}</p>
              <h3>{activeCertificate.title}</h3>
              <p>{activeCertificate.issuer}</p>
              <p className="muted">{activeCertificate.desc}</p>
            </aside>
          </div>
        ) : null}
      </Modal>

      <ImageViewer
        title={galleryTitle}
        images={activeGalleryImages}
        activeIndex={activeGalleryIndex}
        onSelect={selectGalleryImage}
        onPrev={showPrevImage}
        onNext={showNextImage}
        onClose={closeGalleryViewer}
      />
    </>
  );
}

export default App;









