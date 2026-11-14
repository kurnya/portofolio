import Icon from "../components/Icons";

export default function Contact({ site, profile, links }) {
  return (
    <section id="contact" className="wrap">
      <div className="contact" data-reveal="">
        <div className="cube-wrap" aria-hidden="true">
          <div className="cube">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <span className="mono">05 — Kontak</span>
        <h2 style={{ marginTop: 20 }}>Punya ide project? Ayo bangun bareng.</h2>
        <div className="c-row">
          <a className="cbtn" href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            {profile.email}
          </a>
          {links.map((link) => (
            <a key={link.href} className="cbtn o" href={link.href} target="_blank" rel="noreferrer">
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <footer className="foot">
        <span className="mono">
          © 2026 {profile.name} ·{" "}
          <a href={site.url}>{site.url.replace(/^https?:\/\//, "")}</a>
        </span>
        <a className="mono" href="#top">
          Kembali ke atas ↑
        </a>
      </footer>
    </section>
  );
}
