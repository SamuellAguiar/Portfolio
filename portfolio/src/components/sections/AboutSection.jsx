import SectionHeading from '../SectionHeading'

export default function AboutSection({ about }) {
  return <section id="sobre" className="section split-section"><SectionHeading number="01" label="Perfil" title="Sobre mim" /><div className="section-content about-card"><p>{about}</p><a className="text-link" href="#contato">Entre em contato <span aria-hidden="true">&rarr;</span></a></div></section>
}
