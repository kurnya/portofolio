export default function ProjectAction({ action, onGalleryOpen }) {
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
