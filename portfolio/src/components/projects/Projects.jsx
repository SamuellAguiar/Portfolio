import "./Projects.css";

function Projects() {
     const projects = [
          {
               id: "01",
               title: "Crypto Screener Application",
               description:
                    "I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
               image: "/project1.png",
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
                    My <span>Projects</span>
               </h2>

               <div className="projects-grid">
                    {projects.map((project, index) => (
                         <div key={index} className="project-card">
                              <img src={project.image} alt={project.title} className="project-image" />
                              <div className="project-content">
                                   <h3 className="project-id">{project.id}</h3>
                                   <h3 className="project-title">{project.title}</h3>
                                   <p className="project-description">{project.description}</p>
                                   <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
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
