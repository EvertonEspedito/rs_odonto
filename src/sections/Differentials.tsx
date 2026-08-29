import { HeartHandshake, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { differentials } from '@/data/company'

const icons = [HeartHandshake, Stethoscope, ShieldCheck, Sparkles]

export function Differentials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle
          eyebrow="Por que a Rosa de Saron"
          title="Cuidado, técnica e confiança em cada etapa"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="flex flex-col gap-4 rounded-2xl border border-brand-navy/5 bg-brand-mist/50 p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-blue shadow-soft">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-navy/60">{item.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
