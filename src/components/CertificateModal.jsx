import Modal from "./Modal";

export default function CertificateModal({ certificate, onClose }) {
  return (
    <Modal
      open={Boolean(certificate)}
      title={certificate?.title ?? "Detail Sertifikat"}
      onClose={onClose}
    >
      {certificate ? (
        <div className="certificate-viewer">
          <div className="certificate-image-frame">
            <img src={certificate.src} alt={certificate.desc} className="certificate-image" />
          </div>
          <aside className="certificate-detail">
            <p className="eyebrow">{certificate.year}</p>
            <h3>{certificate.title}</h3>
            <p>{certificate.issuer}</p>
            <p className="muted">{certificate.desc}</p>
          </aside>
        </div>
      ) : null}
    </Modal>
  );
}
