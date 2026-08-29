import { Sparkles } from 'lucide-react'
import { PlaceholderArt } from '@/components/PlaceholderArt'
import { Reveal } from '@/components/Reveal'
import { SmileArc } from '@/components/SmileArc'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { whatsappMessages } from '@/data/company'

export function FacetsHighlight() {
  return (
    <section className="bg-brand-mist py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-5 lg:order-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            Facetas
          </span>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-brand-navy md:text-4xl">
            Um novo sorriso começa com um planejamento personalizado
          </h2>
          <SmileArc className="h-3 w-16" />
          <p className="text-balance text-base leading-relaxed text-brand-navy/65">
            As facetas são lâminas finas aplicadas sobre os dentes para ajustar forma, cor e
            alinhamento aparente do sorriso. O planejamento é sempre individual, feito após
            avaliação da nossa equipe para entender o resultado mais adequado a cada paciente.
          </p>
          <div>
            <WhatsAppButton message={whatsappMessages.facets} variant="primary" size="lg">
              Agendar avaliação
            </WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:order-2">
          <PlaceholderArt icon={Sparkles} tone="blue" className="aspect-[4/3] w-full rounded-3xl" />
        </Reveal>
      </div>
    </section>
  )
}
