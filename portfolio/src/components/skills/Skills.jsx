import './Skills.css';
import {
     SiPython, SiHtml5, SiCss3, SiJavascript, SiReact,
     SiNodedotjs, SiGithub, SiMysql, SiJupyter, SiPhp
} from "react-icons/si";
import { DiJava, DiLinux } from "react-icons/di";
import { FaWindows, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";


const skills = [
     { name: 'HTML', icon: <SiHtml5 /> },
     { name: 'CSS', icon: <SiCss3 /> },
     { name: 'JavaScript', icon: <SiJavascript /> },
     { name: 'React', icon: <SiReact /> },
     { name: 'Node.js', icon: <SiNodedotjs /> },
     { name: 'Java', icon: <DiJava /> },
     { name: 'PHP', icon: <SiPhp /> },
     { name: 'Python', icon: <SiPython /> },
     { name: 'Jupyter', icon: <SiJupyter /> },
     { name: 'MySQL', icon: <SiMysql /> },
     { name: 'Git', icon: <FaGitAlt /> },
     { name: 'GitHub', icon: <SiGithub /> },
     { name: 'VS Code', icon: <VscVscode /> },
     { name: 'Windows', icon: <FaWindows /> },
     { name: 'Linux', icon: <DiLinux /> },
];

function Skills() {
     return (
          <section className="skills-section" id="skills">
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