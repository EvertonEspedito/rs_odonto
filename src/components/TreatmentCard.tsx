import { ArrowRight, Sparkles } from 'lucide-react'
import { PlaceholderArt } from '@/components/PlaceholderArt'
import { Reveal } from '@/components/Reveal'
import type { Treatment } from '@/data/company'
import { company, whatsappMessages } from '@/data/company'
import { buildWhatsappLink } from '@/utils/whatsapp'

interface TreatmentCardProps {
  treatment: Treatment
  delay?: number
}

export function TreatmentCard({ treatment, delay = 0 }: TreatmentCardProps) {
  const href = buildWhatsappLink(
    company.defaultWhatsappLink,
    whatsappMessages.treatment(treatment.name),
  )

  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-navy/5 transition-transform duration-300 hover:-translate-y-1"
    >
      <PlaceholderArt
        icon={Sparkles}
        tone={treatment.confirmed ? 'blue' : 'mist'}
        className="h-40 w-full"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-semibold text-brand-navy">{treatment.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-brand-navy/65">{treatment.description}</p>

        {treatment.confirmed ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-blue-dark"
          >
            Saiba mais
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        ) : (
          <span className="mt-2 inline-flex w-fit items-center rounded-full bg-brand-mist px-3 py-1 text-xs font-medium text-brand-navy/50">
            Em breve
          </span>
        )}
      </div>
    </Reveal>
  )
}
