const COUNTRY_CODE = '55'
const WHATSAPP_MESSAGE = 'Ola, Samuell! Encontrei seu portfolio e gostaria de conversar.'

export function createWhatsAppUrl(phone) {
  const phoneNumber = phone.replace(/\D/g, '')
  const message = encodeURIComponent(WHATSAPP_MESSAGE)

  return `https://wa.me/${COUNTRY_CODE}${phoneNumber}?text=${message}`
}
