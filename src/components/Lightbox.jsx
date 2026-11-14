import { useCallback, useEffect, useRef, useState } from "react";
import { useDialog } from "../hooks/useDialog";
import Icon from "./Icons";

const SWIPE_MIN = 45;

export default function Lightbox({ project, images, onClose, onDetail }) {
  const [idx, setIdx] = useState(0);
  const [zoom, setZoom] = useState(false);
  const rootRef = useRef(null);
  const closeRef = useRef(null);
  const thumbsRef = useRef(null);
  const touchRef = useRef(null);
  const total = images.length;

  const go = useCallback(
    (next) => {
      setIdx(((next % total) + total) % total);
      setZoom(false);
    },
    [total],
  );
  const step = useCallback((k) => go(idx + k), [go, idx]);

  // Esc pertama keluar dari zoom, berikutnya menutup galeri.
  useDialog(rootRef, closeRef, () => (zoom ? setZoom(false) : onClose()));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  useEffect(() => {
    const box = thumbsRef.current;
    const on = box?.querySelector(".th.on");
    if (box && on) box.scrollLeft = on.offsetLeft - box.clientWidth / 2 + on.clientWidth / 2;
  }, [idx]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (zoom || !start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
  };
  const onStageClick = (e) => {
    if (e.target.tagName === "IMG") setZoom((z) => !z);
  };

  return (
    <div ref={rootRef} className="lb" role="dialog" aria-modal="true" aria-label={`Galeri ${project.title}`}>
      <div className="lb-top">
        <div className="lb-title">
          <span className="mono">{project.eyebrow} · Galeri</span>
          <b>{project.title}</b>
        </div>
        <div className="lb-count mono" aria-live="polite">
          <b>{idx + 1}</b> / {total}
        </div>
        <div className="lb-actions">
          <button
            type="button"
            className={`lb-btn ${zoom ? "on" : ""}`}
            onClick={() => setZoom((z) => !z)}
            aria-label={zoom ? "Perkecil gambar" : "Perbesar gambar"}
            aria-pressed={zoom}
          >
            <Icon name="zoom" />
          </button>
          <button type="button" className="lb-btn lb-detail" onClick={onDetail}>
            <Icon name="info" />
            <span>Detail proyek</span>
          </button>
          <button type="button" ref={closeRef} className="lb-btn" onClick={onClose} aria-label="Tutup galeri">
            <Icon name="close" />
          </button>
        </div>
      </div>

      <div className="lb-progress" aria-hidden="true">
        <i style={{ width: `${((idx + 1) / total) * 100}%` }} />
      </div>

      <div
        className={`lb-stage ${zoom ? "on" : ""}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={onStageClick}
      >
        <div className="lb-slides">
          {images.map((src, i) => (
            <img
              key={src}
              className={`lb-img ${i === idx ? "on" : i < idx ? "before" : ""}`}
              src={src}
              alt={`Screenshot ${project.title} ${i + 1}`}
              aria-hidden={i === idx ? undefined : "true"}
              draggable="false"
            />
          ))}
        </div>
        <button type="button" className="lb-arrow prev" onClick={() => step(-1)} aria-label="Screenshot sebelumnya">
          <Icon name="chevronLeft" size={22} />
        </button>
        <button type="button" className="lb-arrow next" onClick={() => step(1)} aria-label="Screenshot berikutnya">
          <Icon name="chevronRight" size={22} />
        </button>
      </div>

      <div className="lb-bottom">
        <div className="lb-thumbs" ref={thumbsRef}>
          {images.map((src, i) => (
            <button
              type="button"
              key={src}
              className={`th ${i === idx ? "on" : ""}`}
              onClick={() => go(i)}
              aria-label={`Lihat screenshot ${i + 1}`}
              aria-current={i === idx ? "true" : undefined}
            >
              <img src={src} alt="" loading="lazy" />
              <span>{i + 1}</span>
            </button>
          ))}
        </div>
        <span className="lb-hint mono">
          <span className="d-only">← → navigasi · klik gambar untuk perbesar · Esc tutup</span>
          <span className="m-only">Geser untuk ganti · ketuk gambar untuk perbesar</span>
        </span>
      </div>
    </div>
  );
}
