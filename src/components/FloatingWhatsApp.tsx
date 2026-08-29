import { MessageCircle } from 'lucide-react'
import { company, whatsappMessages } from '@/data/company'
import { buildWhatsappLink } from '@/utils/whatsapp'

export function FloatingWhatsApp() {
  const href = buildWhatsappLink(company.defaultWhatsappLink, whatsappMessages.general)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Rosa de Saron Odontologia pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.25} />
      <span className="sr-only">Falar pelo WhatsApp</span>
    </a>
  )
}
