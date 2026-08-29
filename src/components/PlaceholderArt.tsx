import type { LucideIcon } from 'lucide-react'

interface PlaceholderArtProps {
  icon: LucideIcon
  className?: string
  tone?: 'blue' | 'navy' | 'mist'
}

const tones = {
  blue: 'from-brand-blue via-brand-blue-dark to-brand-navy',
  navy: 'from-brand-navy via-brand-blue-dark to-brand-blue',
  mist: 'from-brand-sky-light via-white to-brand-mist',
}

/**
 * Composição gráfica ilustrativa (não fotográfica) usada como imagem temporária.
 * Substituir pelas fotos reais da clínica assim que estiverem disponíveis.
 */
export function PlaceholderArt({ icon: Icon, className = '', tone = 'blue' }: PlaceholderArtProps) {
  const isDark = tone !== 'mist'

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-14 -right-8 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path d="M0 140C50 100 150 180 200 120" stroke="white" strokeWidth="2" fill="none" />
        <path d="M0 80C60 30 140 130 200 60" stroke="white" strokeWidth="2" fill="none" />
      </svg>
      <Icon
        className={isDark ? 'relative h-14 w-14 text-white/90' : 'relative h-14 w-14 text-brand-blue/70'}
        strokeWidth={1.5}
      />
    </div>
  )
}
