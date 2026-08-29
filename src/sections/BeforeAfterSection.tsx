import { BeforeAfter } from '@/components/BeforeAfter'
import { SectionTitle } from '@/components/SectionTitle'

// Nenhum caso real foi fornecido ainda — os slots ficam prontos para
// receber fotos e descrições reais de antes/depois da clínica.
const cases = [
  { treatment: 'Implantes' },
  { treatment: 'Facetas' },
  { treatment: 'A definir' },
]

export function BeforeAfterSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle
          eyebrow="Resultados"
          title="Transformações que devolvem confiança"
          description="Espaço reservado para casos reais de antes e depois, a serem adicionados pela clínica."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <BeforeAfter key={item.treatment} treatment={item.treatment} />
          ))}
        </div>
      </div>
    </section>
  )
}
