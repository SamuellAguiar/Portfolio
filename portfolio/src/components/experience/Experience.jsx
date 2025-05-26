import React from 'react';
import './Experience.css';
import BusinessIcon from '@mui/icons-material/Business';

const experiences = [
     {
          id: 1,
          company: 'Visão Tecnologia e Sistemas Jr',
          role: 'Desenvolvedor WEB Front-End',
          date: 'Ago 2022 - Abr 2023',
          description:
               'Atuei como desenvolvedor front-end na Visão Jr., empresa júnior da faculdade, focada em soluções tecnológicas para clientes reais. Fui responsável pela criação e manutenção de interfaces web, garantindo responsividade, usabilidade e acessibilidade em diferentes dispositivos.Desenvolvi páginas utilizando HTML, CSS e JavaScript, além de implementar e gerenciar sites em WordPress com o plugin Elementor. Trabalhei em equipe utilizando metodologias ágeis, participando ativamente de sprints e reuniões seguindo o framework Scrum. Também padronizei componentes reutilizáveis, contribuindo para a escalabilidade e manutenção eficiente dos projetos da empresa.',
          icon: <BusinessIcon />,
     },
];

export default function Experience() {
     return (
          <section className="experience-section">
               <h2 className="experience-title">Minha <span>Experiencia</span></h2>
               <div className="experience-list">
                    {experiences.map((exp) => (
                         <div className="experience-card" key={exp.id}>
                              <div className="experience-header">
                                   <div className="icon-role">
                                        <span className="icon">{exp.icon}</span>
                                        <h3>{exp.role} na {exp.company}</h3>
                                   </div>
                                   <span className="date">{exp.date}</span>
                              </div>
                              <p className="description">{exp.description}</p>
                         </div>
                    ))}
               </div>
          </section>
     );
}
