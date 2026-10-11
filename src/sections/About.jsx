import SectionHeading from "../components/SectionHeading";

export default function About({ items, profile, age }) {
  return (
    <section id="about" className="section panel panel-grid">
      <SectionHeading eyebrow="Tentang" title="Tentang Saya" />

      <div className="about-grid">
        <div className="about-list">
          {items.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <aside className="profile-summary">
          <p className="eyebrow">Ringkasan</p>
          <h3>{profile?.name}</h3>
          <p>{profile?.summary}</p>
          <div className="summary-stats">
            <div>
              <strong>{age}</strong>
              <span>Tahun</span>
            </div>
            <div>
              <strong>{profile?.startYear}</strong>
              <span>Mulai Kuliah</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
