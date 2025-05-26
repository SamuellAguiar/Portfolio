import "./Projects.css";

function Projects() {
     const projects = [
          {
               id: "01",
               title: "🍕 Sistema de Pedidos de Pizza",
               description:
                    "Desenvolvi uma aplicação web que permite aos usuários personalizar pedidos de pizza em tempo real, com funcionalidades de criação, cancelamento e visualização dinâmica de preços. O sistema inclui um painel administrativo para gerenciamento de pedidos, usuários e ingredientes, além de geração de relatórios detalhados. O projeto foi implementado utilizando PHP, HTML, CSS e JavaScript, com foco em boas práticas de engenharia de software.",
               image: "/project1.png",
               link: "https://github.com/SamuellAguiar/Trabalho_ES_I"
          },
          {
               id: "02",
               title: "Euphoria – Ecommerce (Apparels) Website Template",
               description:
                    "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
               image: "/project2.png",
          },
          {
               id: "03",
               title: "Blog Website Template",
               description:
                    "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
               image: "/project3.png",
          },
     ];

     return (
          <section className="projects-section" id="projects">
               <h2 className="projects-title">
                    Meus <span>Projetos</span>
               </h2>

               <div className="projects-grid">
                    {projects.map((project, index) => (
                         <div key={index} className="project-card">
                              <img src={project.image} alt={project.title} className="project-image" />
                              <div className="project-content">
                                   
                                   <h3 className="project-title">{project.title}</h3>
                                   <p className="project-description">{project.description}</p>
                                   <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                        ↗
                                   </a>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     );
}

export default Projects;
