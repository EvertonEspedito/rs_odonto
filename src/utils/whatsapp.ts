export function buildWhatsappLink(baseLink: string, message: string): string {
  const url = new URL(baseLink)
  url.searchParams.set('text', message)
  return url.toString()
}
