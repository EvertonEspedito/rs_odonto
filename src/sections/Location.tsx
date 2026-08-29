import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'
import { units } from '@/data/company'

// PLACEHOLDER — nenhum endereço ou link do Google Maps foi fornecido ainda.
// Assim que a clínica informar, defina `mapsEmbedUrl` (iframe) e/ou o
// campo `mapsLink` de cada unidade em src/data/company.ts.
const mapsEmbedUrl: string | null = null

export function Location() {
  return (
    <section id="localizacao" className="bg-white py-20 md:py-28">
      <div className="container-page flex flex-col gap-14">
        <SectionTitle eyebrow="Localização" title="Estamos esperando por você" />

        <Reveal className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-mist ring-1 ring-brand-navy/5 lg:aspect-auto">
            {mapsEmbedUrl ? (
              <iframe
                title="Localização da Rosa de Saron Odontologia"
                src={mapsEmbedUrl}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-brand-navy/40">
                <MapPin className="h-8 w-8" strokeWidth={1.5} />
                <p className="max-w-xs text-sm">
                  Mapa a ser incorporado assim que o endereço oficial for informado.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {units.map((unit) => (
              <div
                key={unit.id}
                className="flex items-center justify-between gap-4 rounded-2xl border border-brand-navy/5 bg-brand-mist/50 p-5"
              >
                <div>
                  <p className="font-display text-base font-semibold text-brand-navy">{unit.name}</p>
                  <p className="text-sm text-brand-navy/50">
                    {unit.address ?? 'Endereço em breve'}
                  </p>
                </div>
                {unit.mapsLink ? (
                  <a
                    href={unit.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
                  >
                    Abrir no Google Maps
                  </a>
                ) : (
                  <span className="shrink-0 text-sm font-medium text-brand-navy/30">Em breve</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
