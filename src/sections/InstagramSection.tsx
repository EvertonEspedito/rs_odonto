import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { company } from '@/data/company'

// Área preparada para futura integração real com os posts do Instagram.
// Nenhuma integração falsa/simulada foi adicionada.
export function InstagramSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <SectionTitle eyebrow="Redes sociais" title="Acompanhe a Rosa de Saron" />

        <Reveal className="flex flex-col items-center gap-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-mist text-brand-navy/25 sm:h-32 sm:w-32"
              >
                <InstagramIcon className="h-6 w-6" strokeWidth={1.5} />
              </div>
            ))}
          </div>

          <a
            href={company.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky px-8 py-4 text-sm font-semibold text-white shadow-lift transition-transform duration-200 hover:-translate-y-0.5"
          >
            <InstagramIcon className="h-4 w-4" strokeWidth={2} />
            Seguir no Instagram · {company.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
