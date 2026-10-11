import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section panel panel-tech">
      <SectionHeading eyebrow="Keahlian" title="Skill Utama" />

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name} className="skill-card">
            <div className="skill-head">
              <div className="skill-title">
                <span className="icon-badge skill-icon">
                  <Icon name={skill.icon} />
                </span>
                <h3>{skill.name}</h3>
              </div>
            </div>
            <div className="tool-list">
              {skill.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
