import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'
import { SectionTitle } from '@/components/SectionTitle'

export function ContactSection() {
  return (
    <section id="contato" className="bg-brand-mist py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionTitle
          align="left"
          eyebrow="Agende sua avaliação"
          title="Vamos cuidar do seu sorriso"
          description="Preencha o formulário abaixo com seus dados e preferências. Você será direcionado ao WhatsApp da unidade escolhida para finalizar o agendamento com nossa equipe."
        />

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
