import { useState } from "react";
import ProjectAction from "../components/ProjectAction";
import SectionHeading from "../components/SectionHeading";

const FILTERS = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web" },
  { id: "internal", label: "Sistem Internal" },
  { id: "desktop", label: "Desktop" },
  { id: "automation", label: "Otomasi" },
];

const LIVE_STATUSES = ["Online", "Aktif"];
const RELEASE_STATUSES = ["Release Tersedia", "Open Source"];

function statusClass(status) {
  if (LIVE_STATUSES.includes(status)) return "is-live";
  if (RELEASE_STATUSES.includes(status)) return "is-release";
  return "";
}

function projectActions(project) {
  return [...project.links, project.secondaryAction, project.tertiaryAction].filter(Boolean);
}

function ProjectMeta({ project }) {
  return (
    <div className="project-meta">
      <p className="project-eyebrow">{project.eyebrow}</p>
      <span className={`status-pill ${statusClass(project.status)}`}>{project.status}</span>
    </div>
  );
}

function ProjectTags({ tags }) {
  return (
    <div className="project-tags">
      {tags.map((tag) => (
        <span key={tag} className="project-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectDetails({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <div className="project-details">
          <p>{project.description}</p>
          {project.note ? <p className="note">{project.note}</p> : null}
        </div>
      ) : null}
      <button type="button" className="read-more-btn" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {open ? "Tutup detail" : "Baca selengkapnya"}
      </button>
    </>
  );
}

function FeaturedCard({ project, onGalleryOpen }) {
  const gallery = projectActions(project).find((action) => action.action === "gallery");

  return (
    <article className="project-card featured">
      <button
        type="button"
        className="project-cover"
        onClick={() => gallery && onGalleryOpen(gallery.gallerySet)}
        aria-label={`Buka galeri ${project.title}`}
        disabled={!gallery}
      >
        <img src={project.cover} alt={`Screenshot ${project.title}`} loading="lazy" />
      </button>
      <div className="project-body">
        <ProjectMeta project={project} />
        <h3>{project.title}</h3>
        <p className="project-highlight">{project.highlight}</p>
        {project.impact ? (
          <p className="project-impact">
            <strong>Dampak · </strong>
            {project.impact}
          </p>
        ) : null}
        <ProjectTags tags={project.tags} />
        <ProjectDetails project={project} />
        <div className="project-links">
          {projectActions(project).map((action) => (
            <ProjectAction
              key={action.href ?? action.gallerySet ?? action.label}
              action={action}
              onGalleryOpen={onGalleryOpen}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project, onGalleryOpen }) {
  const actions = projectActions(project).filter((action) => !action.internal);
  const isPrivate = actions.length === 0;

  return (
    <article className="project-card compact">
      <ProjectMeta project={project} />
      <h3>{project.title}</h3>
      <p className="project-highlight">{project.highlight}</p>
      <ProjectTags tags={project.tags} />
      <ProjectDetails project={project} />
      <div className="project-footer">
        {actions.map((action, index) =>
          action.action === "gallery" ? (
            <button
              type="button"
              key={action.gallerySet}
              className={`project-link ${index === 0 ? "primary" : ""}`}
              onClick={() => onGalleryOpen(action.gallerySet)}
            >
              {action.label}
            </button>
          ) : (
            <a
              key={action.href}
              className={`project-link ${index === 0 ? "primary" : ""}`}
              href={action.href}
              target="_blank"
              rel="noreferrer"
            >
              {action.label} <span aria-hidden="true">↗</span>
            </a>
          ),
        )}
        {isPrivate ? (
          <>
            <span className="project-private">Sistem internal · tidak publik</span>
            <a className="project-link primary" href="#contact">
              Tanya detail
            </a>
          </>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects({ projects, onGalleryOpen }) {
  const [filter, setFilter] = useState("all");

  const visible = projects.filter((project) => filter === "all" || project.category === filter);
  const featured = filter === "all" ? visible.filter((project) => project.featured) : [];
  const others = filter === "all" ? visible.filter((project) => !project.featured) : visible;

  return (
    <section id="projects" className="section panel panel-spotlight">
      <SectionHeading eyebrow="Proyek" title="Project Pilihan" />

      <div className="project-filters" role="group" aria-label="Filter kategori proyek">
        {FILTERS.map((item) => {
          const count =
            item.id === "all"
              ? projects.length
              : projects.filter((project) => project.category === item.id).length;

          return (
            <button
              type="button"
              key={item.id}
              className={`filter-chip ${filter === item.id ? "active" : ""}`}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label} <span>{count}</span>
            </button>
          );
        })}
      </div>

      {featured.length > 0 ? (
        <div className="project-featured">
          {featured.map((project) => (
            <FeaturedCard key={project.title} project={project} onGalleryOpen={onGalleryOpen} />
          ))}
        </div>
      ) : null}

      <div className="project-grid">
        {others.map((project) => (
          <CompactCard key={project.title} project={project} onGalleryOpen={onGalleryOpen} />
        ))}
      </div>
    </section>
  );
}
