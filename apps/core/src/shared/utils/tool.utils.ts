export const md5 = (text: string) =>
  require('crypto').createHash('md5').update(text).digest('hex') as string

export function getAvatar(mail: string | undefined) {
  if (!mail) {
    return ''
  }
  return `https://cravatar.cn/avatar/${md5(mail)}?d=retro`
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const safeJSONParse = (p: any) => {
  try {
    return JSON.parse(p)
  } catch {
    return null
  }
}

/**
 * hash string
 */
export const hashString = function (str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}

export async function* asyncPool<T, R>(
  concurrency: number,
  iterable: readonly T[],
  iteratorFn: (item: T, arr: readonly T[]) => Promise<R> | R,
): AsyncGenerator<R, void, unknown> {
  type WrappedPromise = Promise<[WrappedPromise, R]>
  const executing = new Set<WrappedPromise>()

  async function consume(): Promise<R> {
    const [promise, value] = await Promise.race(executing)
    executing.delete(promise)
    return value
  }
  for (const item of iterable) {
    // Wrap iteratorFn() in an async fn to ensure we get a promise.
    // Then expose such promise, so it's possible to later reference and
    // remove it from the executing pool.
    const wrappedPromise: WrappedPromise = Promise.resolve(iteratorFn(item, iterable)).then(
      (value) => [wrappedPromise, value],
    ) as WrappedPromise
    executing.add(wrappedPromise)
    if (executing.size >= concurrency) {
      yield await consume()
    }
  }
  while (executing.size) {
    yield await consume()
  }
}

export const camelcaseKey = (key: string) =>
  key.replace(/_(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))

export const camelcaseKeys = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  if (Array.isArray(obj)) {
    return obj.map(camelcaseKeys)
  }
  const n: any = {}
  Object.keys(obj).forEach((k) => {
    n[camelcaseKey(k)] = camelcaseKeys(obj[k])
  })
  return n
}
