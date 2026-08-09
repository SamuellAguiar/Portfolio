import { useState } from 'react'

const navigation = [
  ['Sobre', '#sobre'],
  ['Experiencia', '#experiencia'],
  ['Projetos', '#projetos'],
  ['Contato', '#contato'],
]

export default function Header({ initials, theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Ir para o inicio"><img src="/Logo.png" alt="Logo Samuell Aguiar" /><span className="sr-only">{initials}</span></a>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onThemeChange} aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'} title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}><span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span></button>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">{menuOpen ? 'Fechar' : 'Abrir'} menu</span><span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
      </div>
      <nav id="primary-navigation" className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Navegacao principal">
        {navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
      </nav>
    </header>
  )
}
