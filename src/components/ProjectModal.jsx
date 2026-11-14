import { useRef } from "react";
import { useDialog } from "../hooks/useDialog";
import { isPrivate, statusClass } from "../lib/projectUtils";
import Icon from "./Icons";

export default function ProjectModal({ project, hasGallery, onClose, onGallery }) {
  const boxRef = useRef(null);
  const closeRef = useRef(null);
  useDialog(boxRef, closeRef, onClose);

  const priv = isPrivate(project);

  return (
    <div className="ov" onClick={onClose}>
      <div
        ref={boxRef}
        className="md"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" ref={closeRef} className="rbtn x" onClick={onClose} aria-label="Tutup">
          <Icon name="close" />
        </button>

        <div className="prow start">
          <span className="mono">{project.eyebrow}</span>
          <span className={`pill ${statusClass(project.status)}`}>
            <i />
            {project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.impact ? (
          <p className="impact">
            <b>Dampak — </b>
            {project.impact}
          </p>
        ) : null}
        {project.note ? <p className="mono note">{project.note}</p> : null}
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="md-actions">
          {project.links.map((link, i) => (
            <a
              key={link.href}
              className={`btn ${i === 0 ? "btn-p" : "btn-g"}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
          {hasGallery ? (
            <button type="button" className="btn btn-g" onClick={onGallery}>
              Lihat Galeri
            </button>
          ) : null}
          {priv ? (
            <a className="btn btn-g" href="#contact" onClick={onClose}>
              Tanya detail
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
