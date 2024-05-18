import React from 'react';
import NavBar from './Components/NavBar';
import Init from './Components/Init.jsx';
import Experience from './Components/Experience.jsx';
import Technologies from './Components/Technologies.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: '#191919' }}>
        <Element name="início">
          <Init />
        </Element>
        <Element name="experiencia">
          <Experience />
        </Element>
        <Element name="tecnologias">
          <Technologies />
        </Element>
        <Element name="projetos">
          <Projects />
        </Element>
        <Element name="contato">
          <Contact />
        </Element>
        <Footer />
      </div>
    </>
  );
};

export default App;
