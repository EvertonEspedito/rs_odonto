import { Smile } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SmileArc } from '@/components/SmileArc'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { company, whatsappMessages } from '@/data/company'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-mist pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-sky/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue shadow-soft">
            {company.instagramDescription}
          </span>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            Seu sorriso merece cuidado, tecnologia e excelência.
          </h1>

          <SmileArc className="h-4 w-24" />

          <p className="text-balance max-w-lg text-base leading-relaxed text-brand-navy/70 md:text-lg">
            {company.slogan} com atendimento especializado e soluções odontológicas
            personalizadas.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={whatsappMessages.general} variant="primary" size="lg">
              Agende sua avaliação
            </WhatsAppButton>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 px-8 py-4 text-base font-semibold text-brand-navy transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
            >
              Conheça nossos tratamentos
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue via-brand-blue-dark to-brand-navy shadow-lift md:justify-self-end">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-brand-sky/20 blur-2xl" />
            <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 300 380" aria-hidden="true">
              <path d="M0 260C80 200 220 320 300 220" stroke="white" strokeWidth="2" fill="none" />
              <path d="M0 160C90 90 210 210 300 120" stroke="white" strokeWidth="2" fill="none" />
            </svg>
            <div className="relative flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <Smile className="h-10 w-10 text-white" strokeWidth={1.5} />
              </span>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Imagem ilustrativa
              </p>
              <p className="max-w-[220px] text-sm text-white/60">
                Espaço reservado para foto oficial da clínica ou de pacientes reais.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
