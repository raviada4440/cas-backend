export function parseCookies(header: string): Record<string, string> {
  return header.split(';').reduce<Record<string, string>>((acc, part) => {
    const [key, ...valueParts] = part.split('=')
    if (!key) {
      return acc
    }
    const normalizedKey = key.trim()
    const value = valueParts.join('=').trim()
    if (normalizedKey) {
      acc[normalizedKey] = decodeURIComponent(value)
    }
    return acc
  }, {})
}

const SESSION_COOKIE_NAMES = [
  '__Secure-authjs.session-token',
  'authjs.session-token',
  'next-auth.session-token',
  '__Secure-next-auth.session-token',
]

export function extractAuthSessionCookie(header?: string): string | undefined {
  if (!header) {
    return undefined
  }
  const cookies = parseCookies(header)
  for (const name of SESSION_COOKIE_NAMES) {
    const value = cookies[name]
    if (value) {
      return value
    }
  }
  return undefined
}
