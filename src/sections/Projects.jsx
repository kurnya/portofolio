import { useState } from "react";
import Icon from "../components/Icons";
import SectionHeading from "../components/SectionHeading";
import { tiltHandlers } from "../hooks/useTilt";
import { isPrivate, statusClass } from "../lib/projectUtils";

const FILTERS = [
  { id: "all", label: "Semua" },
  { id: "web", label: "Web" },
  { id: "internal", label: "Sistem Internal" },
  { id: "desktop", label: "Desktop" },
  { id: "automation", label: "Otomasi" },
];

function StatusPill({ status }) {
  return (
    <span className={`pill ${statusClass(status)}`}>
      <i />
      {status}
    </span>
  );
}

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ project, shots, reversed, onGallery, onDetail }) {
  const stack = [shots[0], shots[1] ?? shots[0], shots[2] ?? shots[0]];

  return (
    <article className={`feat ${reversed ? "rev" : ""}`} data-reveal="">
      <div className="feat-txt">
        <div className="prow start">
          <span className="mono">{project.eyebrow}</span>
          <StatusPill status={project.status} />
        </div>
        <h3>{project.title}</h3>
        <p>{project.highlight}</p>
        {project.impact ? (
          <p className="impact">
            <b>Dampak — </b>
            {project.impact}
          </p>
        ) : null}
        <Tags tags={project.tags} />
        <div className="feat-actions">
          <button type="button" className="btn btn-p" onClick={onGallery}>
            Lihat Galeri
          </button>
          <button type="button" className="btn btn-g" onClick={onDetail}>
            Detail
          </button>
        </div>
      </div>
      <button type="button" className="stack" onClick={onGallery} aria-label={`Buka galeri ${project.title}`}>
        <div className="stack-in">
          <img className="s3" src={stack[2]} alt="" loading="lazy" />
          <img className="s2" src={stack[1]} alt="" loading="lazy" />
          <img className="s1" src={stack[0]} alt={`Screenshot ${project.title}`} loading="lazy" />
        </div>
        <span className="pill stack-tag">{shots.length} screenshot ↗</span>
      </button>
    </article>
  );
}

function GridCard({ project, number, onDetail }) {
  return (
    <article className="tc pcardg" {...tiltHandlers}>
      <div className="prow">
        <span className="pnum">{number}</span>
        <StatusPill status={project.status} />
      </div>
      <div>
        <span className="mono">{project.eyebrow}</span>
        <h3>{project.title}</h3>
      </div>
      <p className="hl">{project.highlight}</p>
      <div className="tags">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="prow">
        <button type="button" className="more" onClick={onDetail} aria-label={`Detail ${project.title}`}>
          Detail <Icon name="arrowUpRight" size={16} />
        </button>
        <span className="mono acc">{isPrivate(project) ? "Internal" : "Publik"}</span>
      </div>
    </article>
  );
}

export default function Projects({ projects, shotsFor, onGallery, onDetail }) {
  const [filter, setFilter] = useState("all");

  const visible = projects.filter((p) => filter === "all" || p.category === filter);
  const featured = filter === "all" ? visible.filter((p) => p.featured && shotsFor(p).length > 0) : [];
  const others = filter === "all" ? visible.filter((p) => !featured.includes(p)) : visible;

  const filterBar = (
    <div className="filters" role="group" aria-label="Filter kategori proyek">
      {FILTERS.map((f) => {
        const count = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
        const on = filter === f.id;
        return (
          <button
            type="button"
            key={f.id}
            className={`chip ${on ? "on" : ""}`}
            onClick={() => setFilter(f.id)}
            aria-pressed={on}
          >
            {f.label} <sup>{count}</sup>
          </button>
        );
      })}
    </div>
  );

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <SectionHeading index="03" label="Proyek" aside={filterBar}>
          Project <em>pilihan.</em>
        </SectionHeading>

        {featured.map((project, i) => (
          <FeaturedCard
            key={project.title}
            project={project}
            shots={shotsFor(project)}
            reversed={i % 2 === 1}
            onGallery={() => onGallery(project)}
            onDetail={() => onDetail(project)}
          />
        ))}

        <div className="pgrid">
          {others.map((project, i) => (
            <GridCard
              key={project.title}
              project={project}
              number={String(i + 1).padStart(2, "0")}
              onDetail={() => onDetail(project)}
            />
          ))}
        </div>
        <div className="swipe-hint mono" aria-hidden="true">
          Geser untuk proyek lainnya <Icon name="arrowRight" size={14} />
        </div>
      </div>
    </section>
  );
}

