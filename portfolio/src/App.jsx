import { useState } from 'react'
import Header from './components/Header'
import DetailsModal from './components/DetailsModal'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import EducationSection from './components/sections/EducationSection'
import ExperienceSection from './components/sections/ExperienceSection'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import { portfolio } from './data/portfolio'
import { useTheme } from './hooks/useTheme'
import { createWhatsAppUrl } from './utils/contact'
import './App.css'

function App() {
  const { profile, experience, education, certifications, skills, projects } = portfolio
  const { theme, toggleTheme } = useTheme()
  const [selectedItem, setSelectedItem] = useState(null)
  const whatsappUrl = createWhatsAppUrl(profile.phone)

  const closeDetails = () => setSelectedItem(null)
  const selectSkill = (skill) => setSelectedItem({ type: 'skill', ...skill })
  const selectProject = (project) => setSelectedItem({ type: 'project', ...project })

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Pular para o conteudo</a>
      <Header initials={profile.initials} theme={theme} onThemeChange={toggleTheme} />

      <main id="conteudo">
        <HeroSection profile={profile} />
        <AboutSection about={profile.about} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} certifications={certifications} />
        <SkillsSection skills={skills} onSkillSelect={selectSkill} />
        <ProjectsSection projects={projects} onProjectSelect={selectProject} />
        <ContactSection profile={profile} whatsappUrl={whatsappUrl} />
      </main>

      <footer className="footer">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <a href="#inicio">Voltar ao topo &uarr;</a>
      </footer>

      <DetailsModal item={selectedItem} onClose={closeDetails} />
    </div>
  )
}

export default App
