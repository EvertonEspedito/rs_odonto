import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/Logo'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { navLinks, whatsappMessages } from '@/data/company'
import { useScrolled } from '@/hooks/useScrollPosition'

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-navy/75 transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={whatsappMessages.general} variant="primary">
            Agendar avaliação
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-navy/5 bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-navy/80 hover:bg-brand-mist"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton
            message={whatsappMessages.general}
            variant="primary"
            className="mt-4 w-full"
          >
            Agendar avaliação
          </WhatsAppButton>
        </div>
      )}
    </header>
  )
}
