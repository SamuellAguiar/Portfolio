import React from 'react';
import './Skills.css';
import {
     SiPython, SiHtml5, SiCss3, SiJavascript, SiReact,
     SiNodedotjs, SiPhp, SiMysql, SiWordpress
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
     { name: 'Python', icon: <SiPython /> },
     { name: 'HTML', icon: <SiHtml5 /> },
     { name: 'CSS', icon: <SiCss3 /> },
     { name: 'JavaScript', icon: <SiJavascript /> },
     { name: 'React', icon: <SiReact /> },
     { name: 'Node.js', icon: <SiNodedotjs /> },
     { name: 'Java', icon: <DiJava /> },
     { name: 'PHP', icon: <SiPhp /> },
     { name: 'MySQL', icon: <SiMysql /> },
     { name: 'WordPress', icon: <SiWordpress /> },
];

function Skills() {
     return (
          <section className="skills-section">
               <h2 className="skills-title">Minhas <span>Habilidades</span></h2>
               <div className="skills-grid">
                    {skills.map((skill, index) => (
                         <div className="skill-card" key={index}>
                              <div className="skill-icon">{skill.icon}</div>
                              <p>{skill.name}</p>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default Skills;