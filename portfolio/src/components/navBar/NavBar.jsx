import "./NavBar.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function NavBar() {
     return (
          <div className="navbar">
               {/* Logo e Nome */}
               <div className="logo">
                    <div>
                         <img src="/Logo.png" alt="Logo" className="logo-image" />
                    </div>
                    <span className="name">Samuell Aguiar</span>
               </div>

               {/* Navegação */}
               <nav className="nav-links">
                    <a href="#about">Sobre Mim</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
               </nav>

               {/* Botão de Currículo */}
               <a href="/Samuell_Carlos_Oliveira_Aguiar.pdf" download className="resume-button">
                    Currículo <PictureAsPdfIcon className="pdf-icon" />
               </a>
          </div>
     );
}

export default NavBar;
