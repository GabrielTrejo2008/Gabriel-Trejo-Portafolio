
const certificates = [
  {
    title: "SQL",
    provider: "midudev",
    description: "Curso de SQL completado.",
    file: "https://www.aprendesql.dev/certificado/23c27aa0-1729-4003-83f4-267152d3b43b",
  },
  {
    title: "Course Certificate 02",
    provider: "Course Provider",
    description: "Descripción del segundo curso.",
    file: "/certificates/course-2.pdf",
  },
  {
    title: "Course Certificate 03",
    provider: "Course Provider",
    description: "Descripción del tercer curso.",
    file: "/certificates/course-3.pdf",
  },
];

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="section-heading">
        <span className="eyebrow">CONTINUOUS LEARNING</span>

        <h2>
          Courses & <span className="gradient-text">Certificates</span>
        </h2>

        <p>
          Certifications that represent my learning and professional growth.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.title}
          >
            

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
              rel="noopener noreferrer"
            >
              View Certificate ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
