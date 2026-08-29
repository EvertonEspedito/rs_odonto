import { CTASection } from '@/components/CTASection'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { whatsappMessages } from '@/data/company'
import { About } from '@/sections/About'
import { BeforeAfterSection } from '@/sections/BeforeAfterSection'
import { ContactSection } from '@/sections/ContactSection'
import { Differentials } from '@/sections/Differentials'
import { FacetsHighlight } from '@/sections/FacetsHighlight'
import { Hero } from '@/sections/Hero'
import { ImplantsHighlight } from '@/sections/ImplantsHighlight'
import { InstagramSection } from '@/sections/InstagramSection'
import { Location } from '@/sections/Location'
import { Testimonials } from '@/sections/Testimonials'
import { Treatments } from '@/sections/Treatments'
import { Units } from '@/sections/Units'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Differentials />
        <Treatments />
        <ImplantsHighlight />
        <FacetsHighlight />
        <BeforeAfterSection />
        <About />
        <Units />
        <Location />
        <Testimonials />
        <InstagramSection />

        <CTASection
          eyebrow="Vamos começar"
          title="Pronto para dar o próximo passo pelo seu sorriso?"
          description="Fale agora com a nossa equipe e agende sua avaliação na unidade Rosa de Saron mais próxima de você."
        >
          <WhatsAppButton message={whatsappMessages.general} variant="whatsapp" size="lg">
            Fale com nossa equipe
          </WhatsAppButton>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/50"
          >
            Preencher formulário
          </a>
        </CTASection>

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
