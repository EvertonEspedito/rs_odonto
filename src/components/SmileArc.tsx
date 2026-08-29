interface SmileArcProps {
  className?: string
  variant?: 'light' | 'dark'
}

/**
 * Elemento de assinatura visual da marca: uma curva que remete a um sorriso,
 * usada com moderação como divisor e elemento decorativo ao longo do site.
 */
export function SmileArc({ className = '', variant = 'light' }: SmileArcProps) {
  const stroke = variant === 'light' ? 'var(--color-brand-sky)' : 'var(--color-brand-gold)'

  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 4C40 34 160 34 198 4"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}
