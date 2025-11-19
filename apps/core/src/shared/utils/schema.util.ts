type DefaultKeys = 'id' | 'created' | 'modified' | 'deleted'
const defaultProjectKeys = ['id', 'created', 'modified', 'deleted'] as const

type Projection<K extends string | number | symbol> = {
  [P in K]: true
}

export function createProjectionOmit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
  withDefaults: true,
): Projection<K | DefaultKeys> & { keys: (K | DefaultKeys)[] }
export function createProjectionOmit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
): Projection<K> & { keys: K[] }

export function createProjectionOmit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
  withDefaults: boolean = false,
): (Projection<K | DefaultKeys> & { keys: (K | DefaultKeys)[] }) | (Projection<K> & { keys: K[] }) {
  const projection: Partial<Projection<K | DefaultKeys>> = {}

  // Add default keys if withDefaults is true
  const defaultKeys = withDefaults
    ? (defaultProjectKeys.filter((key) => key in obj) as DefaultKeys[])
    : []

  defaultKeys.forEach((key) => {
    projection[key] = true
  })

  // Add specified keys
  for (const key of keys) {
    projection[key as K] = true
  }

  if (withDefaults) {
    const resolvedKeys = [...keys, ...defaultKeys] as (K | DefaultKeys)[]
    Object.defineProperty(projection, 'keys', {
      value: resolvedKeys,
      enumerable: false,
      configurable: false,
    })
    return projection as Projection<K | DefaultKeys> & {
      keys: (K | DefaultKeys)[]
    }
  }

  Object.defineProperty(projection, 'keys', {
    value: keys,
    enumerable: false,
    configurable: false,
  })

  return projection as Projection<K> & { keys: K[] }
}
