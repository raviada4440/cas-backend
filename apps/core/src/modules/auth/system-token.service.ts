import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { I18nContext, I18nService } from 'nestjs-i18n'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  SystemTokenConfigResponse,
  SystemTokenRequest,
  SystemTokenResponse,
} from '@shared/contracts/auth'

interface OrgConfig {
  id: string
  slug: string
  displayName: string
  issuer: string
  fhirBase: string
  authTokenMethod?: string
  supportsLaunch?: boolean
  supportsUserinfo?: boolean
}

@Injectable()
export class SystemTokenService {
  private readonly logger = new Logger(SystemTokenService.name)

  constructor(
    private readonly database: DatabaseService,
    private readonly i18n: I18nService,
  ) {}

  public async findOrgBySlug(slug: string): Promise<OrgConfig | null> {
    const endpoint = await this.database.prisma.organizationEndpoint.findFirst({
      where: {
        isActive: true,
        OR: [
          { issuer: { contains: slug, mode: 'insensitive' } },
          { orgName: { contains: slug, mode: 'insensitive' } },
        ],
      },
      include: {
        organization: true,
      },
    })

    if (!endpoint) {
      return null
    }

    return {
      id: endpoint.organizationId ?? endpoint.id,
      slug,
      displayName: endpoint.orgName ?? endpoint.organization?.name ?? 'Unknown Organization',
      issuer: endpoint.issuer ?? '',
      fhirBase: endpoint.endpoint ?? '',
      authTokenMethod: 'client_secret_basic',
      supportsLaunch: true,
      supportsUserinfo: true,
    }
  }

  public async generateSystemToken(
    request: SystemTokenRequest,
    userId: string,
  ): Promise<SystemTokenResponse> {
    const orgConfig = await this.findOrgOrThrow(request.org)
    const scopes = request.scopes && request.scopes.length > 0 ? request.scopes : ['system/*.read']
    const audience = request.audience ?? orgConfig.fhirBase

    const issuedAt = Math.floor(Date.now() / 1000)
    const token: SystemTokenResponse = {
      access_token: `mock_system_token_${issuedAt}`,
      token_type: 'Bearer',
      expires_in: 3600,
      scope: scopes.join(' '),
      audience,
      issued_at: issuedAt,
      organization: orgConfig,
    }

    this.logger.log(
      `System token requested by ${userId} for org ${orgConfig.slug} with scopes ${scopes.join(
        ',',
      )}`,
    )

    return token
  }

  public async getSystemTokenConfig(org: string): Promise<SystemTokenConfigResponse> {
    const orgConfig = await this.findOrgOrThrow(org)
    return {
      organization: orgConfig,
      supportedScopes: [
        'system/*.read',
        'system/*.write',
        'system/Patient.read',
        'system/Observation.read',
        'system/DiagnosticReport.read',
        'system/Encounter.read',
      ],
      defaultScopes: ['system/*.read'],
      tokenEndpoint: `${orgConfig.issuer}/token`,
      authorizationEndpoint: `${orgConfig.issuer}/authorize`,
    }
  }

  private async findOrgOrThrow(slug: string): Promise<OrgConfig> {
    const org = await this.findOrgBySlug(slug)
    if (!org) {
      throw new NotFoundException(await this.translate('organization_not_found', { id: slug }))
    }
    return org
  }

  private translate(key: string, args?: Record<string, unknown>) {
    const lang = I18nContext.current()?.lang
    return this.i18n.translate<string>(`errors.${key}`, { lang, args })
  }
}
