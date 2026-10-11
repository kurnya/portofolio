import Modal from "./Modal";

export default function ImageViewer({ title, images, activeIndex, onSelect, onPrev, onNext, onClose }) {
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
