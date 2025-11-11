import "./Projects.css";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';


function Projects() {
     const buttonStyle = {
          color: '#fff',
          borderColor: 'rgba(255,255,255,0.2)',
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': {
               backgroundColor: 'rgba(255,255,255,0.04)',
               borderColor: 'rgba(255,255,255,0.4)'
          }
     };
     const projects = [
          {
               id: "01",
               title: "🦷 Landing Page - Kelly & Laís",
               description:
                    "Desenvolvi uma landing page profissional para duas dentistas, com foco na divulgação do curso que estão criando juntas. A aplicação inclui seções dedicadas à introdução do curso, apresentação das profissionais, depoimentos e um formulário de contato funcional para captação de interessados. Foram utilizadas tecnologias como React, CSS e Vite.",
               image: "/project2.png",
               link: "https://kellyelais.com/"
          },
          {
               id: "02",
               title: "🍕 Sistema de Pedidos de Pizza",
               description:
                    "Desenvolvi uma aplicação web que permite aos usuários personalizar pedidos de pizza em tempo real, com funcionalidades de criação, cancelamento e visualização dinâmica de preços. O sistema inclui um painel administrativo para gerenciamento de pedidos, usuários e ingredientes, além de geração de relatórios detalhados. O projeto foi implementado utilizando PHP, HTML, CSS e JavaScript, com foco em boas práticas de engenharia de software.",
               image: "/project1.png",
               link: "https://github.com/SamuellAguiar/Trabalho_ES_I"
          },
          {
               id: "03",
               title: "📲 Clone da Tela de Login do Instagram",
               description:
                    "Desenvolvi um clone fiel da tela de login do Instagram utilizando HTML, CSS e JavaScript, com foco na reprodução visual e funcional da interface original. O projeto visa demonstrar habilidades em construção de interfaces responsivas, organização de layout com CSS e manipulação básica de eventos com JavaScript. ",
               image: "/project3.png",
               link: "https://github.com/SamuellAguiar/Login-Instagram"
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

               <div className="projects-actions">
                    <Button
                         variant="outlined"
                         startIcon={<GitHubIcon />}
                         href="https://github.com/SamuellAguiar?tab=repositories"
                         target="_blank"
                         rel="noopener noreferrer"
                         sx={buttonStyle}
                         aria-label="Ver todos os projetos no GitHub"
                    >
                         Ver no GitHub
                    </Button>
               </div>

          </section>
     );
}

export default Projects;
