import React, { useState, useEffect } from "react";
import "./Projects.css";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

function Projects() {
     const [currentIndex, setCurrentIndex] = useState(0);
     const [itemsPerPage, setItemsPerPage] = useState(3);

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
               title: "Landing Page - Kelly & Laís",
               description: "Desenvolvi uma landing page profissional para duas dentistas, com foco na divulgação do curso que estão criando juntas. Foram utilizadas tecnologias como React, CSS e Vite.",
               image: "/project2.png",
               link: "https://kellyelais.com/"
          },
          {
               id: "02",
               title: "Sistema de Pedidos de Pizza",
               description: "Desenvolvi uma aplicação web que permite aos usuários personalizar pedidos de pizza em tempo real, com funcionalidades de criação, cancelamento e visualização dinâmica de preços.",
               image: "/project1.png",
               link: "https://github.com/SamuellAguiar/Trabalho_ES_I"
          },
          {
               id: "03",
               title: "Minha Placa, Minha Vida",
               description: "Desenvolvi uma landing page moderna e responsiva voltada para conversão de clientes em uma assistência técnica especializada em micro-soldagem e manutenção de placas eletrônicas. ",
               image: "/project3.png",
               link: "https://minha-placa-minha-vida.vercel.app/"
          },
          {
               id: "04",
               title: "Sentinel - Sistema de Registro de Ocorrências ",
               description: "Desenvolvi o Sentinel, uma plataforma web voltada para a segurança universitária, com foco no registro anônimo de ocorrências e no monitoramento de áreas de risco pelo campus.",
               image: "/project4.png", 
               link: "https://trabalho-bd-ii.vercel.app/"
          },
     ];

     // Detectar tamanho da tela para definir quantos itens mostrar
     useEffect(() => {
          const handleResize = () => {
               if (window.innerWidth < 900) {
                    setItemsPerPage(1);
               } else {
                    setItemsPerPage(3);
               }
          };

          handleResize(); 
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
     }, []);

     // Próximo slide
     const nextSlide = () => {
          setCurrentIndex((prevIndex) => {
               if (prevIndex + itemsPerPage >= projects.length) {
                    return 0;
               }
               return prevIndex + 1;
          });
     };

     const prevSlide = () => {
          setCurrentIndex((prevIndex) => {
               if (prevIndex === 0) {
                    return Math.max(0, projects.length - itemsPerPage);
               }
               return prevIndex - 1;
          });
     };

     useEffect(() => {
          const interval = setInterval(() => {
               nextSlide();
          }, 3000); 

          return () => clearInterval(interval);
     }, [currentIndex, itemsPerPage]); 

     return (
          <section className="projects-section" id="projects">
               <h2 className="projects-title">
                    Meus <span>Projetos</span>
               </h2>

               <div className="carousel-container">
                    <IconButton onClick={prevSlide} className="nav-button prev" aria-label="Anterior">
                         <ArrowBackIosIcon sx={{ color: 'white' }} />
                    </IconButton>

                    <div className="carousel-track-container">
                         <div
                              className="carousel-track"
                              style={{
                                   transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                              }}
                         >
                              {projects.map((project, index) => (
                                   <div
                                        key={index}
                                        className="project-card"
                                        style={{ flex: `0 0 ${100 / itemsPerPage}%` }} 
                                   >
                                        <div className="card-inner">
                                             <img src={project.image} alt={project.title} className="project-image" />
                                             <div className="project-content">
                                                  <h3 className="project-title">{project.title}</h3>
                                                  <p className="project-description">{project.description}</p>
                                                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                                       ↗
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    <IconButton onClick={nextSlide} className="nav-button next" aria-label="Próximo">
                         <ArrowForwardIosIcon sx={{ color: 'white' }} />
                    </IconButton>
               </div>

               <div className="projects-actions">
                    <Button
                         variant="outlined"
                         startIcon={<GitHubIcon />}
                         href="https://github.com/SamuellAguiar?tab=repositories"
                         target="_blank"
                         rel="noopener noreferrer"
                         sx={buttonStyle}
                    >
                         Ver no GitHub
                    </Button>
               </div>
          </section>
     );
}

export default Projects;