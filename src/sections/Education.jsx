import SectionHeading from "../components/SectionHeading";

export default function Education({ items }) {
  return (
    <section id="education" className="sec">
      <div className="wrap">
        <SectionHeading index="02" label="Pendidikan">
          Perjalanan <em>belajar.</em>
        </SectionHeading>

        <div className="tl" data-reveal="">
          {items.map((item) => {
            const current = Boolean(item.status);
            const detail = [item.school, item.note].filter(Boolean);
            return (
              <div key={item.program} className={`tl-item ${current ? "now" : ""}`}>
                <span className={`pill ${current ? "live" : ""}`}>
                  {current ? <i /> : null}
                  {current ? `${item.years} · ${item.status}` : item.years}
                </span>
                <h3>{item.program}</h3>
                <p>
                  {detail.length > 0
                    ? detail.map((line, i) => (
                        <span key={line}>
                          {i > 0 ? <br /> : null}
                          {line}
                        </span>
                      ))
                    : item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
