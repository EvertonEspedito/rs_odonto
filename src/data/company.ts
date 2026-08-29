// ---------------------------------------------------------------------------
// company.ts
//
// Arquivo central de configuração da Rosa de Saron Odontologia.
// Edite este arquivo para atualizar textos, contatos, unidades e tratamentos
// sem precisar procurar informações espalhadas pelo projeto.
//
// Campos marcados com "PLACEHOLDER" ainda não foram fornecidos pela clínica
// e devem ser preenchidos assim que a informação estiver disponível.
// ---------------------------------------------------------------------------

export interface Unit {
  id: string
  name: string
  whatsapp: string // formatado para exibição
  whatsappLink: string // link wa.me pronto para uso
  /** PLACEHOLDER — endereço completo ainda não informado pela clínica */
  address?: string
  /** PLACEHOLDER — link do Google Maps ainda não informado pela clínica */
  mapsLink?: string
}

export interface Treatment {
  id: string
  name: string
  description: string
  /** Caminho da imagem (placeholder até haver material oficial) */
  image: string
  /** Quando false, o card é exibido como "em breve" e não linka para o WhatsApp */
  confirmed: boolean
}

export const company = {
  name: 'Rosa de Saron Odontologia',
  shortName: 'Rosa de Saron',
  slogan: 'Transformamos sorrisos e cuidamos da sua saúde bucal',
  instagramDescription: 'Especialistas em implantes e facetas',
  instagramHandle: '@rosadesaron.odonto',
  instagramUrl: 'https://instagram.com/rosadesaron.odonto',

  seo: {
    title: 'Rosa de Saron Odontologia | Transformando Sorrisos',
    description:
      'Rosa de Saron Odontologia. Cuide do seu sorriso com atendimento especializado, implantes, facetas e soluções odontológicas personalizadas.',
  },

  // WhatsApp usado quando nenhuma unidade específica foi escolhida.
  // Por padrão aponta para a primeira unidade cadastrada abaixo.
  get defaultWhatsappLink() {
    return units[0].whatsappLink
  },
}

export const whatsappMessages = {
  general: 'Olá! Gostaria de agendar uma avaliação na Rosa de Saron Odontologia.',
  treatment: (treatmentName: string) =>
    `Olá! Gostaria de saber mais sobre o tratamento de ${treatmentName}.`,
  unit: (unitName: string) =>
    `Olá! Gostaria de agendar uma avaliação na unidade ${unitName} da Rosa de Saron Odontologia.`,
  implants: 'Olá! Gostaria de saber mais sobre implantes odontológicos na Rosa de Saron.',
  facets: 'Olá! Gostaria de saber mais sobre facetas na Rosa de Saron.',
}

export const units: Unit[] = [
  {
    id: 'km-25',
    name: 'Clínica do KM 25',
    whatsapp: '+55 87 99118-4197',
    whatsappLink: 'https://wa.me/5587991184197',
  },
  {
    id: 'extrema',
    name: 'Clínica de Extrema',
    whatsapp: '+55 87 99941-2056',
    whatsappLink: 'https://wa.me/5587999412056',
  },
  {
    id: 'dormentes',
    name: 'Dormentes',
    whatsapp: '+55 87 98127-8756',
    whatsappLink: 'https://wa.me/5587981278756',
  },
  {
    id: 'petrolina-centro',
    name: 'Clínica Petrolina Centro',
    whatsapp: '+55 87 99101-0054',
    whatsappLink: 'https://wa.me/5587991010054',
  },
]

// Tratamentos confirmados pela clínica (mencionados no Instagram).
// Os demais ficam como estrutura preparada ("em breve") até haver confirmação.
export const treatments: Treatment[] = [
  {
    id: 'implantes',
    name: 'Implantes',
    description: 'Soluções para recuperar dentes e devolver função e estética ao sorriso.',
    image: 'implants',
    confirmed: true,
  },
  {
    id: 'facetas',
    name: 'Facetas',
    description: 'Procedimentos voltados à estética e transformação do sorriso.',
    image: 'facets',
    confirmed: true,
  },
  {
    id: 'clinica-geral',
    name: 'Clínica geral',
    description: 'Em breve mais informações sobre este tratamento.',
    image: 'general',
    confirmed: false,
  },
  {
    id: 'ortodontia',
    name: 'Ortodontia',
    description: 'Em breve mais informações sobre este tratamento.',
    image: 'orthodontics',
    confirmed: false,
  },
  {
    id: 'protese',
    name: 'Prótese',
    description: 'Em breve mais informações sobre este tratamento.',
    image: 'prosthesis',
    confirmed: false,
  },
  {
    id: 'clareamento',
    name: 'Clareamento',
    description: 'Em breve mais informações sobre este tratamento.',
    image: 'whitening',
    confirmed: false,
  },
  {
    id: 'estetica-dental',
    name: 'Estética dental',
    description: 'Em breve mais informações sobre este tratamento.',
    image: 'aesthetics',
    confirmed: false,
  },
  {
    id: 'harmonizacao',
    name: 'Harmonização',
    description: 'Em breve mais informações sobre este tratamento.',
    image: 'harmonization',
    confirmed: false,
  },
]

export const differentials = [
  {
    title: 'Atendimento humanizado',
    description: 'Cuidado individualizado em todas as etapas do tratamento.',
  },
  {
    title: 'Especialistas',
    description: 'Equipe preparada para oferecer diferentes soluções odontológicas.',
  },
  {
    title: 'Tecnologia',
    description: 'Estrutura e recursos modernos para proporcionar mais segurança e conforto.',
  },
  {
    title: 'Resultado',
    description: 'Tratamentos planejados para proporcionar saúde, estética e confiança.',
  },
]

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Contato', href: '#contato' },
]
