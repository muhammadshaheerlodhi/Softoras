const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function sanitizeText(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return ''
  return value
    .trim()
    .slice(0, maxLength)
    .replace(/[\0\x08\x0B\x0C\x0E-\x1F]/g, '')
    .replace(/<[^>]*>/g, '')
}

export function sanitizeEmail(value: unknown): string | null {
  const email = sanitizeText(value, 160).toLowerCase()
  if (!email || !EMAIL_PATTERN.test(email)) return null
  return email
}

export function sanitizeUrl(value: unknown, maxLength = 300): string {
  const url = sanitizeText(value, maxLength)
  if (!url) return ''
  if (/^(javascript|data|vbscript):/i.test(url)) return ''
  return url
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function containsSuspiciousPayload(value: string): boolean {
  const sample = value.toLowerCase()
  const patterns = [
    /(\bunion\b.+\bselect\b)/,
    /(\bdrop\b.+\btable\b)/,
    /(\binsert\b.+\binto\b)/,
    /(\bdelete\b.+\bfrom\b)/,
    /(<script\b)/,
    /(javascript:)/,
    /(onerror\s*=)/,
    /(onload\s*=)/,
  ]
  return patterns.some((pattern) => pattern.test(sample))
}
