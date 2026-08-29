import { Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { company, treatments, units } from '@/data/company'
import { buildWhatsappLink } from '@/utils/whatsapp'

interface FormState {
  name: string
  phone: string
  unitId: string
  treatmentId: string
  message: string
}

const initialState: FormState = {
  name: '',
  phone: '',
  unitId: '',
  treatmentId: '',
  message: '',
}

// TODO: quando houver backend, substituir o handleSubmit por uma chamada de API
// (ex.: POST /api/leads) mantendo os mesmos campos do formulário.
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const selectedUnit = units.find((unit) => unit.id === form.unitId)
    const selectedTreatment = treatments.find((treatment) => treatment.id === form.treatmentId)

    const lines = [
      'Olá! Gostaria de solicitar uma avaliação na Rosa de Saron Odontologia.',
      `Nome: ${form.name || '-'}`,
      `Telefone: ${form.phone || '-'}`,
      selectedUnit ? `Unidade de interesse: ${selectedUnit.name}` : null,
      selectedTreatment ? `Tratamento de interesse: ${selectedTreatment.name}` : null,
      form.message ? `Mensagem: ${form.message}` : null,
    ].filter(Boolean)

    const link = selectedUnit?.whatsappLink ?? company.defaultWhatsappLink
    const href = buildWhatsappLink(link, lines.join('\n'))
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl bg-white p-6 shadow-card ring-1 ring-brand-navy/5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" htmlFor="name">
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClasses}
            placeholder="Seu nome completo"
          />
        </Field>

        <Field label="Telefone / WhatsApp" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClasses}
            placeholder="(87) 9 9999-9999"
          />
        </Field>

        <Field label="Unidade de interesse" htmlFor="unit">
          <select
            id="unit"
            value={form.unitId}
            onChange={(e) => update('unitId', e.target.value)}
            className={inputClasses}
          >
            <option value="">Selecione uma unidade</option>
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Tratamento de interesse" htmlFor="treatment">
          <select
            id="treatment"
            value={form.treatmentId}
            onChange={(e) => update('treatmentId', e.target.value)}
            className={inputClasses}
          >
            <option value="">Selecione um tratamento</option>
            {treatments.map((treatment) => (
              <option key={treatment.id} value={treatment.id}>
                {treatment.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Mensagem" htmlFor="message">
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={inputClasses}
          placeholder="Conte um pouco sobre o que você procura"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-sm font-semibold text-white shadow-lift transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark"
      >
        <Send className="h-4 w-4" strokeWidth={2.5} />
        Solicitar avaliação
      </button>

      <p className="text-center text-xs text-brand-navy/45">
        Ao enviar, você será direcionado ao WhatsApp da unidade escolhida com sua mensagem já preenchida.
      </p>
    </form>
  )
}

const inputClasses =
  'w-full rounded-xl border border-brand-navy/10 bg-brand-mist/60 px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 transition-colors focus:border-brand-blue focus:bg-white focus:outline-none'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-brand-navy/80">
        {label}
      </label>
      {children}
    </div>
  )
}
