import './AboutMe.css';
import AboutImage from '/Me2.jpeg'; 

export default function AboutMe() {
     return (
          <section className="about-section" id="about">
               <div className="about-container">
                    <div className="about-image">
                         <img src={AboutImage} alt="About me illustration" />
                    </div>
                    <div className="about-content">
                         <h2 className="about-title">Sobre <span>Mim</span></h2>
                         <p>
                              Sou desenvolvedor web Full Stack e estudante de <i>Sistemas de Informação na Universidade Federal de Ouro Preto (UFOP)</i>. Tenho experiência prática no desenvolvimento de interfaces web responsivas e acessíveis, atuando com tecnologias como <i>HTML, CSS, JavaScript, React.js e Node.js</i>.
                         </p>
                         <p>
                              Durante meu período na empresa júnior <b>Visão Tecnologia e Sistemas</b>, participei de projetos reais utilizando <i>WordPress e Elementor</i>, colaborando com equipes ágeis e contribuindo na padronização de componentes reutilizáveis.
                         </p>
                         <p>
                              Sou uma pessoa dedicada, comunicativa e sempre disposta a aprender. Gosto de encarar desafios com calma e foco, buscando compreender o todo antes de agir. Tenho facilidade em trabalhar em equipe e oferecer suporte de forma atenciosa, prezando pela organização e por um ambiente colaborativo. Acredito no aprendizado contínuo e vejo cada nova experiência como uma oportunidade de evolução pessoal e profissional.
                         </p>
                    </div>
               </div>
          </section>
     );
}
