import ExternalLink from "../ExternalLink";
import SectionHeading from "../SectionHeading";

export default function ProjectsSection({ projects, onProjectSelect }) {
  return (
    <section id="projetos" className="section projects-section">
      <div className="projects-intro">
        <SectionHeading number="05" label="Selecao" title="Projetos" />
        <p>Trabalhos selecionados e estudos de desenvolvimento.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.name}>
            <button
              type="button"
              className={`project-visual project-${project.accent} ${project.image ? "has-image" : ""}`}
              onClick={() => onProjectSelect(project)}
              aria-label={`Ver detalhes do projeto ${project.name}`}
            >
              {project.image ? (
                <img src={project.image} alt="" loading="lazy" />
              ) : (
                <>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                  <b />
                </>
              )}
              <em>Ver detalhes</em>
            </button>
            <div className="project-body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="project-links">
                <ExternalLink href={project.githubUrl} className="project-link">
                  GitHub
                </ExternalLink>
                <ExternalLink href={project.liveUrl} className="project-link">
                  Ver projeto
                </ExternalLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
