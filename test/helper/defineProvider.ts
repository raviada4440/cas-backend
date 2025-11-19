export interface Provider<T = unknown> {
  provide: new (...args: any[]) => T
  useValue: Partial<T>
}

export const defineProvider = <T>(provider: Provider<T>): Provider<T> => provider

export function defineProviders(providers: [Provider]): [Provider]
export function defineProviders(providers: [Provider, Provider]): [Provider, Provider]
export function defineProviders(
  providers: [Provider, Provider, Provider],
): [Provider, Provider, Provider]
export function defineProviders(providers: Provider[]): Provider[] {
  return providers
}
