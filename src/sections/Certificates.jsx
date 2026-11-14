import { useState } from "react";
import Icon from "../components/Icons";
import SectionHeading from "../components/SectionHeading";

function cardStyle(d) {
  const ad = Math.abs(d);
  return {
    transform:
      d === 0
        ? "translateX(0) translateZ(60px) rotateY(0deg)"
        : `translateX(${Math.sign(d) * (62 + (ad - 1) * 22)}%) translateZ(${-ad * 140}px) rotateY(${d > 0 ? -38 : 38}deg)`,
    opacity: ad > 2 ? 0 : 1 - ad * 0.2,
    zIndex: 50 - ad,
    filter: `brightness(${1 - ad * 0.3})`,
    pointerEvents: ad > 2 ? "none" : undefined,
  };
}

export default function Certificates({ certificates }) {
  const total = certificates.length;
  const [active, setActive] = useState(Math.min(1, total - 1));
  const go = (i) => setActive(((i % total) + total) % total);
  const cert = certificates[active];

  if (!cert) return null;

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(active + 1);
    if (e.key === "ArrowLeft") go(active - 1);
  };

  return (
    <section id="certificates" className="sec">
      <div className="wrap">
        <SectionHeading index="04" label="Prestasi & Sertifikat">
          Diakui di kampus <em>hingga luar negeri.</em>
        </SectionHeading>

        <div className="cf" onKeyDown={onKeyDown} data-reveal="">
          {certificates.map((c, i) => (
            <button
              type="button"
              key={c.src}
              className="cf-item"
              style={cardStyle(i - active)}
              onClick={() => go(i)}
              aria-label={`Sertifikat ${c.title}`}
              aria-current={i === active ? "true" : undefined}
              tabIndex={i === active ? 0 : -1}
            >
              <img src={c.src} alt={`Sertifikat ${c.title}`} loading="lazy" />
            </button>
          ))}
        </div>

        <div className="cf-cap">
          <div>
            <span className="mono mono-cap" aria-live="polite">
              {cert.issuer} · {cert.year}
            </span>
            <h3>{cert.title}</h3>
            <p>{cert.desc}</p>
          </div>
          <div className="cf-nav">
            <button type="button" className="rbtn" onClick={() => go(active - 1)} aria-label="Sertifikat sebelumnya">
              <Icon name="chevronLeft" size={20} />
            </button>
            <button type="button" className="rbtn" onClick={() => go(active + 1)} aria-label="Sertifikat berikutnya">
              <Icon name="chevronRight" size={20} />
            </button>
          </div>
        </div>

        <div className="dots">
          {certificates.map((c, i) => (
            <button
              type="button"
              key={c.src}
              className={`dot ${i === active ? "on" : ""}`}
              onClick={() => go(i)}
              aria-label={`Ke sertifikat ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
            >
              <i />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
