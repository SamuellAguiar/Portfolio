import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
import SkillsSection from './components/skills/Skills';
import Experience from './components/experience/Experience';
import AboutMe from './components/aboutMe/AboutMe';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Home />
        <SkillsSection />
        <Experience />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
