import SectionHeading from "../components/SectionHeading";

export default function Education({ items }) {
  return (
    <section id="education" className="section panel panel-lines">
      <SectionHeading eyebrow="Pendidikan" title="Perjalanan Pendidikan" />

      <div className="timeline">
        {items.map((item) => (
          <article key={`${item.title}-${item.years}`} className="timeline-item">
            <p className="timeline-years">{item.years}</p>
            <h3>{item.title}</h3>
            <p>{item.program}</p>
            {item.school ? <p className="muted">{item.school}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
