import React, { useState } from 'react';
import "./NavBar.css";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function NavBar() {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div className="navbar">
               {/* Logo e Nome */}
               <div className="logo">
                    <img src="/Logo.png" alt="Logo" className="logo-image" />
                    <span className="name">Samuell Aguiar</span>
               </div>

               {/* Botão de menu mobile */}
               <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
               </div>

               {/* Navegação com botão dentro */}
               <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Início</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Habilidades</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>Experiência</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>

                    <a
                         href="/Samuell_Carlos_Oliveira_Aguiar.pdf"
                         download
                         className="resume-button"
                         onClick={() => setMenuOpen(false)}
                    >
                         Currículo <PictureAsPdfIcon className="pdf-icon" />
                    </a>
               </nav>
          </div>
     );
}

export default NavBar;
