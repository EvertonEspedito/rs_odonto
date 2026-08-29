import { HeartPulse, Microscope, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'

const pillars = [
  { icon: HeartPulse, label: 'Acolhimento em cada consulta' },
  { icon: Microscope, label: 'Tecnologia a favor do seu tratamento' },
  { icon: ShieldCheck, label: 'Equipe comprometida com a qualidade' },
]

export function About() {
  return (
    <section id="sobre" className="bg-brand-navy py-20 text-white md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle
          eyebrow="Sobre a Rosa de Saron"
          title="Cuidar do seu sorriso é cuidar de você."
          description="A Rosa de Saron Odontologia reúne atendimento humanizado, tecnologia e uma equipe preparada para acompanhar você em cada etapa do cuidado com a sua saúde bucal. Nosso compromisso é oferecer um atendimento próximo, transparente e de qualidade em todas as unidades."
          light
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.label}
              delay={index * 90}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur"
            >
              <pillar.icon className="h-7 w-7 text-brand-sky" strokeWidth={1.5} />
              <p className="text-sm font-medium text-white/80">{pillar.label}</p>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto max-w-2xl text-center text-xs text-white/40">
          História, missão, visão, valores e equipe serão adicionados a esta seção assim que
          disponibilizados pela clínica.
        </p>
      </div>
    </section>
  )
}
