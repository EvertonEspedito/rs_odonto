import { ShieldCheck } from 'lucide-react'
import { PlaceholderArt } from '@/components/PlaceholderArt'
import { Reveal } from '@/components/Reveal'
import { SmileArc } from '@/components/SmileArc'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { whatsappMessages } from '@/data/company'

export function ImplantsHighlight() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <PlaceholderArt icon={ShieldCheck} tone="navy" className="aspect-[4/3] w-full rounded-3xl" />
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Implantes odontológicos
          </span>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
            Recupere a confiança para sorrir novamente
          </h2>
          <SmileArc className="h-3 w-16" />
          <p className="text-balance text-base leading-relaxed text-brand-navy/65">
            Os implantes odontológicos são uma alternativa para repor dentes ausentes, unindo
            função e estética em um planejamento individualizado. Cada caso é avaliado
            separadamente pela nossa equipe, que indicará a abordagem mais adequada após uma
            consulta detalhada.
          </p>
          <div>
            <WhatsAppButton message={whatsappMessages.implants} variant="primary" size="lg">
              Quero saber mais
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
