import { useRef } from "react";
import Icon from "../components/Icons";
import Marquee from "../components/Marquee";
import ParticleSphere from "../components/ParticleSphere";

const CHIP_STROKE = { lime: "#C8F560", violet: "#A594FF", solid: "currentColor" };

export default function Hero({ profile, projectCount, certificateCount, tools }) {
  const pointer = useRef({ x: 0, y: 0 });
  const tiltRef = useRef(null);
  const { work, graduation, chips = [] } = profile;

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
    pointer.current = { x: nx, y: ny };
    if (tiltRef.current) tiltRef.current.style.transform = `rotateX(${-ny * 16}deg) rotateY(${nx * 20}deg)`;
  };
  const onLeave = () => {
    pointer.current = { x: 0, y: 0 };
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  const [first, ...rest] = profile.name.split(" ");

  return (
    <header id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow-pill mono">
            <i aria-hidden="true" />
            {work.role} · {work.division}
          </div>
          <h1 className="h-name">
            <span>{first}</span>
            <span className="l2">
              {rest.join(" ")}
              <em>.</em>
            </span>
          </h1>
          <p className="h-text">{profile.headline}</p>
          <div className="h-actions">
            <a className="btn btn-p" href="#projects">
              Lihat Proyek <Icon name="arrowRight" />
            </a>
            <a className="btn btn-g" href="#contact">
              Hubungi Saya
            </a>
          </div>
          <div className="metrics">
            <div className="metric">
              <strong>
                {projectCount}
                <sup>+</sup>
              </strong>
              <span className="mono lbl">Project</span>
            </div>
            <div className="metric">
              <strong>{certificateCount}</strong>
              <span className="mono lbl">Sertifikat</span>
            </div>
            <div className="metric">
              <strong>{graduation.gpa}</strong>
              <span className="mono lbl">IPK Kelulusan</span>
            </div>
          </div>
        </div>

        <div className="stage" onMouseMove={onMove} onMouseLeave={onLeave}>
          <ParticleSphere pointer={pointer} />
          <div className="ring" aria-hidden="true" />
          <div className="float">
            <div className="tilt" ref={tiltRef}>
              <div className="pcard">
                <img src={profile.image} alt={`Foto ${profile.name}`} />
                <div className="pcard-cap">
                  <div>
                    <b>{profile.name}</b>
                    <span className="mono" style={{ color: "rgba(255,255,255,.75)" }}>
                      {profile.badge}
                    </span>
                  </div>
                </div>
              </div>
              {chips.map((chip, i) => (
                <div key={chip.label} className={`chipz cz${i + 1}`}>
                  <Icon name={chip.icon} size={16} stroke={CHIP_STROKE[chip.tone]} />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
          <div className="hint mono" aria-hidden="true">
            <Icon name="hand" size={14} />
            Gerakkan kursor
          </div>
        </div>
      </div>

      <Marquee items={tools} />
    </header>
  );
}
