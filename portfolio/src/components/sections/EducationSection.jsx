import SectionHeading from "../SectionHeading";

export default function EducationSection({ education, certifications }) {
  return (
    <section className="section split-section education-section">
      <SectionHeading number="03" label="Formacao" title="Educacao" />
      <div className="section-content">
        <div className="education-list">
          {education.map((item) => (
            <article
              className="education-item"
              key={`${item.course}-${item.period}`}
            >
              <p className="timeline-period">{item.period}</p>
              <h3>{item.course}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
        <div className="certifications">
          <p className="certifications-label">Certificacoes</p>
          <div className="certifications-grid">
            {certifications.map((certificate) => (
              <article className="certificate-card" key={certificate.name}>
                <p className="timeline-period">{certificate.period}</p>
                <h3>{certificate.name}</h3>
                <p>{certificate.institution}</p>
                <a
                  href={certificate.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificado &#8599;
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
