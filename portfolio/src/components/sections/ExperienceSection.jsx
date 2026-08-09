import SectionHeading from "../SectionHeading";

export default function ExperienceSection({ experience }) {
  return (
    <section
      id="experiencia"
      className="section split-section timeline-section"
    >
      <SectionHeading number="02" label="Trajetoria" title="Experiencia" />
      <div className="section-content timeline">
        {experience.map((item) => (
          <article
            className="timeline-item"
            key={`${item.role}-${item.period}`}
          >
            <p className="timeline-period">{item.period}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="timeline-place">{item.company}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
