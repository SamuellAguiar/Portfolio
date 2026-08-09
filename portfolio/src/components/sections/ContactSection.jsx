import ContactForm from '../ContactForm'

export default function ContactSection({ profile, whatsappUrl }) {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-content">
        <p className="eyebrow">06 &middot; Contato</p>
        <h2>Vamos criar algo<br /><span>incrivel juntos?</span></h2>
        <p className="contact-copy">Envie uma mensagem ou fale comigo pelo WhatsApp.</p>
        <a className="contact-phone" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{profile.phone} <span aria-hidden="true">&#8599;</span></a>
      </div>
      <ContactForm recipientEmail={profile.email} />
    </section>
  )
}
