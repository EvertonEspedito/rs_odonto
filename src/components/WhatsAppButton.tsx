import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { company } from '@/data/company'
import { buildWhatsappLink } from '@/utils/whatsapp'

interface WhatsAppButtonProps {
  message: string
  link?: string
  children: React.ReactNode
  variant?: 'whatsapp' | 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
  className?: string
}

export function WhatsAppButton({
  message,
  link,
  children,
  variant = 'whatsapp',
  size = 'md',
  className = '',
}: WhatsAppButtonProps) {
  const href = buildWhatsappLink(link ?? company.defaultWhatsappLink, message)

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      icon={<MessageCircle className="h-4 w-4" strokeWidth={2.5} />}
      className={className}
    >
      {children}
    </Button>
  )
}
