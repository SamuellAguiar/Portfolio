import { useState } from 'react'

const COOLDOWN_MS = 60_000
const MAX_MESSAGE_LENGTH = 2_000
const FORM_SUBMIT_URL = 'https://formsubmit.co/ajax/'

const initialFields = {
  name: '',
  email: '',
  message: '',
  website: '',
}

function getCooldownRemaining() {
  const lastSubmission = Number(localStorage.getItem('portfolio-contact-submission'))
  const remaining = COOLDOWN_MS - (Date.now() - lastSubmission)

  return Math.max(0, remaining)
}

export default function ContactForm({ recipientEmail }) {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setFields((currentFields) => ({ ...currentFields, [name]: value }))
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setMessage('')

    if (fields.website) return

    if (getCooldownRemaining() > 0) {
      setStatus('error')
      setMessage('Aguarde um minuto antes de enviar outra mensagem.')
      return
    }

    const name = fields.name.trim()
    const email = fields.email.trim()
    const content = fields.message.trim()

    if (name.length < 2 || content.length < 20 || content.length > MAX_MESSAGE_LENGTH) {
      setStatus('error')
      setMessage('Preencha um nome e uma mensagem entre 20 e 2000 caracteres.')
      return
    }

    setStatus('loading')

    const formData = new URLSearchParams({
      name,
      email,
      message: content,
      _subject: `Novo contato pelo portfolio: ${name}`,
      _template: 'table',
      _honey: '',
    })

    try {
      const response = await fetch(`${FORM_SUBMIT_URL}${encodeURIComponent(recipientEmail)}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) throw new Error('Unable to send message')

      localStorage.setItem('portfolio-contact-submission', String(Date.now()))
      setFields(initialFields)
      setStatus('success')
      setMessage('Mensagem enviada. Obrigado pelo contato!')
    } catch {
      setStatus('error')
      setMessage('Nao foi possivel enviar agora. Tente novamente em alguns instantes.')
    }
  }

  return (
    <form className="contact-form" onSubmit={submitForm} noValidate>
      <label>
        Nome
        <input name="name" value={fields.name} onChange={updateField} autoComplete="name" minLength="2" maxLength="80" required />
      </label>

      <label>
        E-mail
        <input name="email" type="email" value={fields.email} onChange={updateField} autoComplete="email" maxLength="120" required />
      </label>

      <label>
        Mensagem
        <textarea name="message" value={fields.message} onChange={updateField} minLength="20" maxLength={MAX_MESSAGE_LENGTH} required />
      </label>

      <input className="honeypot" name="website" value={fields.website} onChange={updateField} tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <button type="submit" className="button contact-submit" disabled={status === 'loading'}>{status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}</button>
      {message && <p className={`form-status form-status-${status}`} role="status">{message}</p>}
    </form>
  )
}
