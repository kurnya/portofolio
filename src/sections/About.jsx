import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { tiltHandlers } from "../hooks/useTilt";

const HIGHLIGHT = "dashboard internal";

function Summary({ text }) {
  const at = text.indexOf(HIGHLIGHT);
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <em>{HIGHLIGHT}</em>
      {text.slice(at + HIGHLIGHT.length)}
    </>
  );
}

function SkillCard({ skill, index }) {
  const [flipped, setFlipped] = useState(false);
  const n = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      className={`flip ${flipped ? "on" : ""}`}
      onClick={() => setFlipped((v) => !v)}
      aria-label={`Keahlian ${skill.name}: ${skill.tools.join(", ")}`}
      aria-pressed={flipped}
      data-reveal=""
    >
      <div className="flip-in">
        <div className="face f">
          <span className="mono">{n} / Keahlian</span>
          <div>
            <h3>{skill.name}</h3>
            <span className="mono" style={{ display: "block", marginTop: 10 }}>
              Arahkan / ketuk untuk melihat
            </span>
          </div>
        </div>
        <div className="face b">
          <span className="mono">{skill.name}</span>
          <ul>
            {skill.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </button>
  );
}

export default function About({ items, profile, skills }) {
  const { work } = profile;

  return (
    <section id="about" className="sec">
      <div className="wrap">
        <SectionHeading index="01" label="Tentang">
          Membangun produk digital yang <em>benar-benar dipakai.</em>
        </SectionHeading>

        <div className="bento">
          <div className="tc b-lead" data-reveal="" {...tiltHandlers}>
            <span className="mono">Ringkasan</span>
            <p>
              <Summary text={profile.summary} />
            </p>
          </div>

          <div className="tc b-side" data-reveal="" {...tiltHandlers}>
            <div className="prow">
              <span className="mono">Pekerjaan saat ini</span>
              <span className="pill live">
                <i />
                Aktif
              </span>
            </div>
            <div className="work-logos">
              <div className="wl">
                <img src={work.divisionLogo} alt={`Logo ${work.division}`} />
                <div>
                  <b>{work.division}</b>
                  <span className="mono">Divisi</span>
                </div>
              </div>
              <div className="wl">
                <img src={work.companyLogo} alt={`Logo ${work.company}`} />
                <div>
                  <b>{work.companyShort}</b>
                  <span className="mono">Perusahaan</span>
                </div>
              </div>
            </div>
            <div className="work-role">
              <h3>{work.role}</h3>
              <p>
                Divisi {work.division}, {work.company}
              </p>
            </div>
          </div>

          {items.map((item, i) => (
            <div key={item.title} className="tc b-third" data-reveal="" {...tiltHandlers}>
              <div className="ic">
                <span className="mono" style={{ color: "#C8F560" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="skills">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
