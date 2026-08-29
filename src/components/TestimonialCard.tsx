import { Quote } from 'lucide-react'

export interface Testimonial {
  name: string
  treatment?: string
  quote: string
}

export function TestimonialCard({ name, treatment, quote }: Testimonial) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-navy/5">
      <Quote className="h-6 w-6 text-brand-sky" strokeWidth={1.5} />
      <p className="flex-1 text-sm leading-relaxed text-brand-navy/70">“{quote}”</p>
      <div className="text-sm font-semibold text-brand-navy">
        {name}
        {treatment && <span className="ml-1 font-normal text-brand-navy/50">· {treatment}</span>}
      </div>
    </div>
  )
}
