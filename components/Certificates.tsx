const certificates = [
  {
    title: "Course Certificate 01",
    provider: "Course Provider",
    description: "Describe the first completed course.",
    file: "/certificates/course-1.pdf",
  },
  {
    title: "Course Certificate 02",
    provider: "Course Provider",
    description: "Describe the second completed course.",
    file: "/certificates/course-2.pdf",
  },
  {
    title: "Course Certificate 03",
    provider: "Course Provider",
    description: "Describe the third completed course.",
    file: "/certificates/course-3.pdf",
  },
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="section-heading">
        <span className="eyebrow">CONTINUOUS LEARNING</span>
        <h2>Courses & <span className="gradient-text">Certificates</span></h2>
        <p>
          Certifications that represent my learning and professional growth.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.file}>
            <div className="certificate-icon">✦</div>

            <span className="certificate-label">
              COMPLETION CERTIFICATE
            </span>

            <h3>{certificate.title}</h3>
            <p>{certificate.provider}</p>
            <p>{certificate.description}</p>

            <a
              className="button button-secondary"
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
            >
              View Certificate ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}