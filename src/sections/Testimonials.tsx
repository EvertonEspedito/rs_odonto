import { MessageSquareHeart } from 'lucide-react'
import type { Testimonial } from '@/components/TestimonialCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'

// Nenhum depoimento real foi fornecido. Adicione objetos aqui
// ({ name, treatment, quote }) assim que a clínica compartilhar
// depoimentos reais e autorizados de pacientes.
const testimonials: Testimonial[] = []

export function Testimonials() {
  return (
    <section className="bg-brand-mist py-20 md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle eyebrow="Depoimentos" title="O que nossos pacientes dizem" />

        {testimonials.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-dashed border-brand-navy/15 bg-white/60 p-10 text-center">
            <MessageSquareHeart className="h-7 w-7 text-brand-blue/60" strokeWidth={1.5} />
            <p className="text-sm text-brand-navy/55">
              Depoimentos de nossos pacientes serão adicionados em breve.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
