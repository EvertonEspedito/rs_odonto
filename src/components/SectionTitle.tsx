import { Reveal } from '@/components/Reveal'
import { SmileArc } from '@/components/SmileArc'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-brand-sky' : 'text-brand-blue'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance text-3xl font-semibold leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      <SmileArc className="h-3 w-16" variant={light ? 'dark' : 'light'} />
      {description && (
        <p className={`text-balance text-base leading-relaxed md:text-lg ${
          light ? 'text-white/80' : 'text-brand-navy/70'
        }`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
