import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { Logo } from '@/components/Logo'
import { company, navLinks, whatsappMessages } from '@/data/company'
import { buildWhatsappLink } from '@/utils/whatsapp'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = buildWhatsappLink(company.defaultWhatsappLink, whatsappMessages.general)

  return (
    <footer className="bg-brand-navy pb-8 pt-16 text-white/70">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">{company.slogan}.</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/90">
            Contato
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/60">
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" /> {company.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        © {year} {company.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
