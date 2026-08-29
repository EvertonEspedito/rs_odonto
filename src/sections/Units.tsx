import { SectionTitle } from '@/components/SectionTitle'
import { UnitCard } from '@/components/UnitCard'
import { units } from '@/data/company'

export function Units() {
  return (
    <section id="unidades" className="bg-brand-mist py-20 md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle
          eyebrow="Nossas unidades"
          title="Encontre a unidade mais próxima de você"
          description="Escolha a unidade da Rosa de Saron mais conveniente e fale diretamente com a nossa equipe pelo WhatsApp."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {units.map((unit, index) => (
            <UnitCard key={unit.id} unit={unit} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
