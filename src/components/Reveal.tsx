import type { ReactNode } from 'react'
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span'
}

export function Reveal({ children, delay = 0, className = '', as = 'div' }: RevealProps) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={`${visible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
