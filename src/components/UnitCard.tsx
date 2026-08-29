import { MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import type { Unit } from '@/data/company'
import { whatsappMessages } from '@/data/company'

interface UnitCardProps {
  unit: Unit
  delay?: number
}

export function UnitCard({ unit, delay = 0 }: UnitCardProps) {
  return (
    <Reveal
      delay={delay}
      className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-navy/5"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sky-light text-brand-blue">
          <MapPin className="h-5 w-5" strokeWidth={2} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-brand-navy">{unit.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-navy/60">
            <Phone className="h-3.5 w-3.5" />
            {unit.whatsapp}
          </p>
        </div>
      </div>

      <p className="text-sm text-brand-navy/50">
        {unit.address ?? 'Endereço a ser adicionado em breve.'}
      </p>

      <div className="mt-auto flex flex-col gap-2 sm:flex-row">
        <WhatsAppButton
          message={whatsappMessages.unit(unit.name)}
          link={unit.whatsappLink}
          size="md"
          className="flex-1"
        >
          Falar pelo WhatsApp
        </WhatsAppButton>
        {unit.mapsLink ? (
          <a
            href={unit.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-blue/20 px-6 py-3 text-sm font-semibold text-brand-blue transition-colors hover:border-brand-blue/50"
          >
            Ver localização
          </a>
        ) : (
          <span className="inline-flex flex-1 cursor-default items-center justify-center gap-2 rounded-full border border-brand-navy/10 px-6 py-3 text-sm font-medium text-brand-navy/35">
            Localização em breve
          </span>
        )}
      </div>
    </Reveal>
  )
}
