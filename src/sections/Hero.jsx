import DarkVeil from "../components/DarkVeil";

export default function Hero({ profile, age, projectCount, certificateCount }) {
  return (
    <section className="hero-shell section">
      <div className="hero-background" aria-hidden="true">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <section className="hero hero-section">
        <div className="hero-copy">
          <h1>{profile?.name}</h1>
          <p className="hero-text">
            {profile?.headline}
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Lihat Proyek
            </a>
            <a className="button secondary" href="#contact">
              Hubungi Saya
            </a>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>{projectCount}+</strong>
              <span>Project</span>
            </div>
            <div>
              <strong>{certificateCount}</strong>
              <span>Sertifikat</span>
            </div>
            <div>
              <strong>{age}</strong>
              <span>Usia</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <img src={profile?.image} alt={`Foto profil ${profile?.name ?? "portfolio"}`} />
          <div className="hero-badge">{profile?.badge}</div>
        </div>
      </section>
    </section>
  );
}
