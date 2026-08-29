import { SectionTitle } from '@/components/SectionTitle'
import { TreatmentCard } from '@/components/TreatmentCard'
import { treatments } from '@/data/company'

export function Treatments() {
  return (
    <section id="tratamentos" className="bg-brand-mist py-20 md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle
          eyebrow="Nossos cuidados"
          title="Conheça nossos tratamentos"
          description="Soluções odontológicas pensadas para cada etapa da saúde e estética do seu sorriso."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={treatment.id} treatment={treatment} delay={index * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}
