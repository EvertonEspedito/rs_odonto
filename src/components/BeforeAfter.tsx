import { ImageOff } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export interface BeforeAfterCase {
  treatment: string
  description?: string
  beforeImage?: string
  afterImage?: string
}

function Slot({ label }: { label: string }) {
  return (
    <div className="relative flex h-48 flex-1 flex-col items-center justify-center gap-2 bg-brand-mist text-brand-navy/35">
      <ImageOff className="h-6 w-6" strokeWidth={1.5} />
      <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
    </div>
  )
}

export function BeforeAfter({ treatment, description, beforeImage, afterImage }: BeforeAfterCase) {
  return (
    <Reveal className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-brand-navy/5">
      <div className="flex">
        {beforeImage ? (
          <img src={beforeImage} alt={`Antes — ${treatment}`} className="h-48 flex-1 object-cover" />
        ) : (
          <Slot label="Antes" />
        )}
        {afterImage ? (
          <img src={afterImage} alt={`Depois — ${treatment}`} className="h-48 flex-1 object-cover" />
        ) : (
          <Slot label="Depois" />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-brand-navy">{treatment}</h3>
        <p className="mt-1 text-sm text-brand-navy/55">
          {description ?? 'Conteúdo a ser adicionado pela clínica.'}
        </p>
      </div>
    </Reveal>
  )
}
