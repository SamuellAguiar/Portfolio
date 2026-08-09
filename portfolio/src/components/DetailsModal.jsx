import { useEffect } from 'react'
import ExternalLink from './ExternalLink'
import '../App.modal.css'

export default function DetailsModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [item, onClose])

  if (!item) return null
  const isProject = item.type === 'project'
  const titleId = `modal-${item.name.replaceAll(' ', '-').toLowerCase()}`
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><section className="details-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}><button type="button" className="modal-close" onClick={onClose} aria-label="Fechar detalhes">×</button><p className="eyebrow">{isProject ? 'Projeto em detalhe' : 'Habilidade em detalhe'}</p><h2 id={titleId}>{item.name}</h2><p className="modal-intro">{item.details}</p>{item.highlights?.length > 0 && <ul className="modal-list">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}{isProject && <><p className="modal-label">Tecnologias</p><ul className="tag-list">{item.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul><div className="modal-links"><ExternalLink href={item.githubUrl} className="button button-secondary">GitHub</ExternalLink><ExternalLink href={item.liveUrl} className="button button-primary">Abrir projeto</ExternalLink></div></>}</section></div>
}
