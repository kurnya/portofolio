import Icon from "../components/Icon";
import SectionHeading from "../components/SectionHeading";

export default function Contact({ email, links }) {
  return (
    <section id="contact" className="section panel panel-contact">
      <SectionHeading eyebrow="Kontak" title="Mari Terhubung" />

      <div className="contact-card">
        <p>
          Tertarik untuk berkolaborasi, diskusi project, atau sekadar menyapa? Saya
          terbuka untuk peluang baru dan kerja sama yang relevan.
        </p>
        <a className="mail-link" href={`mailto:${email}`}>
          {email}
        </a>
        <div className="contact-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <span className="icon-badge contact-icon">
                <Icon name={link.icon} />
              </span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
