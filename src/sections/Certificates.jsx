import SectionHeading from "../components/SectionHeading";

export default function Certificates({ certificates, onSelect }) {
  return (
    <section id="certificates" className="section panel panel-gallery">
      <SectionHeading eyebrow="Sertifikat" title="Sertifikat & Penghargaan" />

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <button
            type="button"
            key={certificate.src}
            className="certificate-card"
            onClick={() => onSelect(certificate)}
          >
            <img src={certificate.src} alt={certificate.desc} />
            <span className="certificate-year">{certificate.year}</span>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
