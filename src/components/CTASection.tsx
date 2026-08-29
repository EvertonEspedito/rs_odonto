import type { ReactNode } from 'react'
import { Reveal } from '@/components/Reveal'
import { SmileArc } from '@/components/SmileArc'

interface CTASectionProps {
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function CTASection({ eyebrow, title, description, children }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/40 via-brand-navy to-brand-navy" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-sky/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <Reveal className="flex max-w-2xl flex-col items-center gap-4">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">
              {eyebrow}
            </span>
          )}
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">{title}</h2>
          <SmileArc className="h-3 w-16" variant="dark" />
          {description && (
            <p className="text-balance text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row">
          {children}
        </Reveal>
      </div>
    </section>
  )
}
