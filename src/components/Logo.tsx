interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

// Marca provisória baseada no nome da clínica, pronta para ser substituída
// pelo arquivo de logotipo oficial (SVG/PNG) assim que disponível.
export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isDark = variant === 'dark'

  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${className}`} aria-label="Rosa de Saron Odontologia">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <circle cx="17" cy="17" r="17" fill={isDark ? '#0E4D9E' : '#FFFFFF'} />
        <path
          d="M9 15c0-4 3.5-7 8-7s8 3 8 7c0 5-3 9-5.5 12-1 1.2-2 1.2-3 0C14 24 9 20 9 15Z"
          fill={isDark ? '#FFFFFF' : '#0E4D9E'}
          opacity="0.95"
        />
      </svg>
      <span className={`font-display text-base font-semibold leading-tight ${isDark ? 'text-brand-navy' : 'text-white'}`}>
        Rosa de Saron
        <span className={`block text-[11px] font-normal tracking-wide ${isDark ? 'text-brand-blue' : 'text-brand-sky'}`}>
          ODONTOLOGIA
        </span>
      </span>
    </a>
  )
}
