import { Injectable, Logger } from '@nestjs/common'

import { DatabaseService } from '@core/processors/database/database.service'

import { FhirProvider } from '@shared/contracts/fhir'

type AccountModel = NonNullable<
  Awaited<ReturnType<DatabaseService['prisma']['account']['findFirst']>>
>

export interface FhirCredentials {
  accessToken: string
  fhirEndpoint: string
  provider: FhirProvider
  warning?: string
}

const PROVIDER_PRIORITY: FhirProvider[] = ['epic', 'cerner', 'generic-ehr']

@Injectable()
export class FhirCredentialsService {
  private readonly logger = new Logger(FhirCredentialsService.name)

  constructor(private readonly db: DatabaseService) {}

  async resolveProvider(userId: string, preferred?: FhirProvider): Promise<FhirProvider | null> {
    const accounts = await this.db.prisma.account.findMany({
      where: { userId },
      select: { provider: true, accessToken: true },
      orderBy: { updatedAt: 'desc' },
    })

    const available = new Set<FhirProvider>(
      accounts
        .filter((account) => Boolean(account.accessToken))
        .map((account) => mapProvider(account.provider))
        .filter((provider): provider is FhirProvider => provider !== null),
    )

    if (preferred && available.has(preferred)) {
      return preferred
    }

    for (const candidate of PROVIDER_PRIORITY) {
      if (available.has(candidate)) {
        return candidate
      }
    }

    return null
  }

  async getCredentials(
    userId: string,
    provider: FhirProvider,
  ): Promise<FhirCredentials> {
    let account = await this.db.prisma.account.findFirst({
      where: { userId, provider },
      orderBy: { updatedAt: 'desc' },
    })

    if (!account || !account.accessToken) {
      throw new Error(`No active ${provider.toUpperCase()} account for this user`)
    }

    const orgEndpoint = await this.db.prisma.organizationEndpoint.findFirst({
      where: {
        isActive: true,
        ehrVendor: provider,
      },
      orderBy: { updatedAt: 'desc' },
    })

    let warning: string | undefined
    if (account.expiresAt && account.expiresAt * 1000 < Date.now()) {
      if (account.refreshToken) {
        try {
          account = await this.refreshAccessToken(account, provider, orgEndpoint)
        } catch (error) {
          this.logger.error(
            `Failed to refresh ${provider.toUpperCase()} access token`,
            (error as Error)?.message,
            {
              userId,
              provider,
            },
          )
          throw error
        }
      } else {
        warning = `${provider.toUpperCase()} access token appears expired and no refresh token is available; reconnect the integration to restore full functionality.`
        this.logger.warn(warning, {
          userId,
          provider,
          expiresAt: account.expiresAt,
        })
      }
    }

    const resolvedEndpoint =
      orgEndpoint?.endpoint ?? getProviderEndpointFallback(provider)

    if (!resolvedEndpoint) {
      throw new Error(
        `No FHIR endpoint configured for provider ${provider.toUpperCase()}`,
      )
    }

    if (!account?.accessToken) {
      throw new Error('Missing access token for FHIR provider')
    }

    return {
      accessToken: account.accessToken,
      fhirEndpoint: ensureTrailingSlash(resolvedEndpoint),
      provider,
      warning,
    }
  }

  private async refreshAccessToken(
    account: AccountModel,
    provider: FhirProvider,
    orgEndpoint: Awaited<
      ReturnType<DatabaseService['prisma']['organizationEndpoint']['findFirst']>
    > | null,
  ): Promise<AccountModel> {
    if (!account?.refreshToken) {
      throw new Error(
        `${provider.toUpperCase()} access token has expired and no refresh token is available`,
      )
    }

    const { clientId, clientSecret, tokenEndpoint } = resolveOAuthClientConfig(
      provider,
      orgEndpoint,
    )

    if (!clientId || !clientSecret || !tokenEndpoint) {
      throw new Error(
        `Missing OAuth client configuration for ${provider.toUpperCase()}`,
      )
    }

    const params = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: account.refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    })

    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: params.toString(),
    })

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '')
      throw new Error(
        `Failed to refresh ${provider.toUpperCase()} token: ${response.status} ${response.statusText} ${errorBody}`,
      )
    }

    const payload = (await response.json()) as {
      access_token?: string
      refresh_token?: string
      expires_in?: number
      token_type?: string
      scope?: string
    }

    if (!payload.access_token) {
      throw new Error(
        `Refresh response for ${provider.toUpperCase()} missing access_token`,
      )
    }

    const expiresAt = payload.expires_in
      ? Math.floor(Date.now() / 1000) + payload.expires_in
      : null

    const updated = await this.db.prisma.account.update({
      where: { id: account.id },
      data: {
        accessToken: payload.access_token,
        refreshToken: payload.refresh_token ?? account.refreshToken,
        expiresAt,
        tokenType: payload.token_type ?? account.tokenType,
        scope: payload.scope ?? account.scope,
        updatedAt: new Date(),
      },
    })

    return updated
  }
}

function mapProvider(provider: string): FhirProvider | null {
  if (provider === 'epic' || provider === 'cerner' || provider === 'generic-ehr') {
    return provider
  }
  return null
}

function ensureTrailingSlash(value: string): string {
  if (!value) return value
  return value.endsWith('/') ? value : `${value}/`
}

function getProviderEndpointFallback(provider: FhirProvider): string | undefined {
  switch (provider) {
    case 'epic':
      return process.env['EPIC_FHIR_ENDPOINT']
    case 'cerner':
      return process.env['CERNER_FHIR_ENDPOINT']
    case 'generic-ehr':
      return process.env['GENERIC_EHR_FHIR_ENDPOINT']
    default:
      return undefined
  }
}

function resolveOAuthClientConfig(
  provider: FhirProvider,
  orgEndpoint: Awaited<
    ReturnType<DatabaseService['prisma']['organizationEndpoint']['findFirst']>
  > | null,
): {
  clientId?: string
  clientSecret?: string
  tokenEndpoint?: string
} {
  const clientId =
    orgEndpoint?.clientId ?? getProviderClientIdFallback(provider)
  const clientSecret =
    orgEndpoint?.clientSecret ?? getProviderClientSecretFallback(provider)

  let tokenEndpoint = orgEndpoint?.issuer
    ? `${orgEndpoint.issuer.replace(/\/$/, '')}/token`
    : undefined

  if (!tokenEndpoint) {
    tokenEndpoint = getProviderTokenEndpointFallback(provider)
  }

  return { clientId, clientSecret, tokenEndpoint }
}

function getProviderClientIdFallback(provider: FhirProvider): string | undefined {
  switch (provider) {
    case 'epic':
      return process.env['EPIC_CLIENT_ID']
    case 'cerner':
      return process.env['CERNER_CLIENT_ID']
    case 'generic-ehr':
      return process.env['GENERIC_EHR_CLIENT_ID']
    default:
      return undefined
  }
}

function getProviderClientSecretFallback(
  provider: FhirProvider,
): string | undefined {
  switch (provider) {
    case 'epic':
      return process.env['EPIC_CLIENT_SECRET']
    case 'cerner':
      return process.env['CERNER_CLIENT_SECRET']
    case 'generic-ehr':
      return process.env['GENERIC_EHR_CLIENT_SECRET']
    default:
      return undefined
  }
}

function getProviderTokenEndpointFallback(
  provider: FhirProvider,
): string | undefined {
  switch (provider) {
    case 'epic':
      return (
        process.env['EPIC_TOKEN_ENDPOINT'] ??
        `${(process.env['EPIC_ISSUER'] ?? 'https://fhir.epic.com/interconnect-fhir-oauth/oauth2').replace(/\/$/, '')}/token`
      )
    case 'cerner':
      return process.env['CERNER_TOKEN_ENDPOINT']
    case 'generic-ehr':
      return process.env['GENERIC_EHR_TOKEN_ENDPOINT']
    default:
      return undefined
  }
}

