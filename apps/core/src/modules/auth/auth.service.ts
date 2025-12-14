import { compareSync } from 'bcrypt'
import { createHash } from 'crypto'

import { Session } from '@db/client'
import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { JWTService } from '@core/processors/helper/helper.jwt.service'
import { sleep } from '@core/shared/utils/tool.utils'
import { Injectable } from '@nestjs/common'

export interface TenantMembership {
  id: string
  name: string | null
  slug?: string | null
  organizationName?: string | null
  organizationType?: string | null
  providerOrganizationId?: string | null
  providerId?: string | null
  providerName?: string | null
  providerNpi?: string | null
  labName?: string | null
  tenantType?: 'organization' | 'lab'
}

export interface SanitizedUser {
  id: string
  email: string | null
  name: string | null
  image: string | null
  createdAt: Date
  updatedAt: Date
  emailVerified: Date | null
}

export interface SessionValidationResult {
  session: Session
  user: SanitizedUser
  tenants: TenantMembership[]
  isSuperAdmin: boolean
}

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly jwtService: JWTService,
  ) {}

  private readonly sessionSecret =
    process.env['AUTH_SECRET'] ||
    process.env['AUTHJS_SECRET'] ||
    process.env['NEXTAUTH_SECRET'] ||
    ''

  get jwtServicePublic() {
    return this.jwtService
  }

  async validateEmailAndPassword(email: string, password: string) {
    const user = await this.db.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user?.password || !compareSync(password, user.password)) {
      await sleep(3000)
      throw new BizException(ErrorCodeEnum.UserNotFound)
    }

    return user
  }

  async signToken(
    id: string,
    options?: {
      tenantIds?: string[]
      tenantScopes?: Array<{ type: 'organization' | 'lab'; id: string }>
      isSuperAdmin?: boolean
    },
  ) {
    const tenantIds = options?.tenantIds ?? []
    const tenantScopes = options?.tenantScopes ?? []
    const claims: Record<string, unknown> = {}
    if (tenantIds.length > 0) {
      claims.tenantIds = tenantIds
    }
    if (tenantScopes.length > 0) {
      claims.tenantScopes = tenantScopes
    }
    if (options?.isSuperAdmin) {
      claims.isSuperAdmin = true
    }
    return this.jwtService.sign(id, undefined, claims)
  }

  async validateSessionToken(rawToken: string): Promise<SessionValidationResult | null> {
    const session = await this.findSession(rawToken)
    if (!session) {
      return null
    }
    if (session.expires.getTime() <= Date.now()) {
      return null
    }

    const context = await this.getUserContext(session.userId)
    if (!context) {
      return null
    }

    return { session, ...context }
  }

  async getUserTenants(userId: string): Promise<TenantMembership[]> {
    // Derive tenant context from the user's profile:
    // - Providers: organization tenants via providerOrganizations
    // - Lab users: lab tenants via LabUser link
    const user = await this.db.prisma.user.findUnique({
      where: { id: userId },
      select: {
        userAttribute: {
          select: {
            userType: true,
            provider: {
              select: {
                id: true,
                name: true,
                firstName: true,
                lastName: true,
                npi: true,
                providerOrganizations: {
                  select: {
                    id: true,
                    organizationId: true,
                    providerNpi: true,
                    name: true,
                    parentOrgName: true,
                    orgName: true,
                    orgAddress: true,
                    orgCity: true,
                    orgState: true,
                    orgZip: true,
                    organization: {
                      select: {
                        id: true,
                        orgName: true,
                        orgType: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    const attr = user?.userAttribute
    if (!attr) {
      return []
    }

    const tenants: TenantMembership[] = []

    if (attr.userType === 'Provider' && attr.provider) {
      tenants.push(...this.deriveOrganizationContextFromProvider(attr.provider))
    }

    if (attr.userType === 'Lab') {
      const labMemberships = await this.db.prisma.labUser.findMany({
        where: { userId },
        select: {
          lab: {
            select: {
              id: true,
              labName: true,
              labCode: true,
            },
          },
        },
      })

      for (const membership of labMemberships) {
        if (membership.lab) {
          tenants.push(this.deriveLabContext(membership.lab))
        }
      }
    }

    return tenants
  }

  private deriveOrganizationContextFromProvider(provider: {
    id: string
    name: string | null
    firstName: string | null
    lastName: string | null
    npi: string | null
    providerOrganizations: Array<{
      id: string
      organizationId: string | null
      providerNpi: string | null
      orgName: string | null
      organization: { id: string; orgName: string | null; orgType: string | null } | null
    }>
  }): TenantMembership[] {
    const fallbackName = [provider.firstName, provider.lastName].filter(Boolean).join(' ').trim()
    const providerName = provider.name ?? (fallbackName.length > 0 ? fallbackName : null)

    const byId = new Map<string, TenantMembership>()

    for (const entry of provider.providerOrganizations ?? []) {
      if (!entry.organizationId) {
        continue
      }
      const organizationName = entry.orgName ?? entry.organization?.orgName ?? null
      const organizationType = entry.organization?.orgType ?? null
      const slug = this.slugify(organizationName)
      if (!byId.has(entry.organizationId)) {
        byId.set(entry.organizationId, {
          id: entry.organizationId,
          name: organizationName,
          slug,
          organizationName,
          organizationType,
          providerOrganizationId: entry.id,
          providerId: provider.id,
          providerName,
          providerNpi: entry.providerNpi ?? provider.npi ?? null,
          tenantType: 'organization',
        })
      }
    }

    return Array.from(byId.values())
  }

  private deriveLabContext(lab: { id: string; labName: string | null; labCode: string | null }) {
    const name = lab.labName ?? lab.labCode ?? null
    const slug = this.slugify(name)
    const tenant: TenantMembership = {
      id: lab.id,
      name,
      slug,
      labName: lab.labName ?? null,
      organizationName: null,
      organizationType: 'Lab',
      tenantType: 'lab',
    }
    return tenant
  }

  private slugify(name?: string | null): string | null {
    if (!name) return null
    const normalized = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
    return normalized.length > 0 ? normalized : null
  }

  async getUserContext(
    userId: string,
  ): Promise<{ user: SanitizedUser; tenants: TenantMembership[]; isSuperAdmin: boolean } | null> {
    const record = await this.db.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
        emailVerified: true,
        userAttribute: {
          select: {
            userType: true,
          },
        },
        userRoles: {
          select: {
            role: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    })

    if (!record) {
      return null
    }

    const tenants = await this.getUserTenants(userId)
    const isSuperAdmin =
      record.userAttribute?.userType === 'Admin' ||
      record.userRoles.some((link) => link.role.name === 'Super Admin')

    const sanitizedUser: SanitizedUser = {
      id: record.id,
      email: record.email,
      name: record.name,
      image: record.image,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      emailVerified: record.emailVerified ?? null,
    }

    return { user: sanitizedUser, tenants, isSuperAdmin }
  }

  isCustomToken(token: string) {
    return token.startsWith('txo') && token.length - 3 === 40
  }

  async verifyCustomToken(_token: string): Promise<string | null> {
    // API tokens are not modeled in the current schema; treat all custom tokens as invalid.
    return null
  }

  async removeSessionToken(rawToken: string): Promise<void> {
    const hashed = this.hashSessionToken(rawToken)
    const result = await this.db.prisma.session.deleteMany({
      where: {
        sessionToken: {
          in: [hashed, rawToken],
        },
      },
    })
    if (result.count > 0) {
      console.log(
        `[AuthService] Deleted ${result.count} session row(s) for token hash ${hashed.substring(
          0,
          8,
        )}…`,
      )
    } else {
      console.log(`[AuthService] No session rows matched token hash ${hashed.substring(0, 8)}…`)
    }
  }

  private hashSessionToken(token: string) {
    return createHash('sha256').update(`${token}${this.sessionSecret}`).digest('hex')
  }

  private async findSession(token: string): Promise<Session | null> {
    const hashed = this.hashSessionToken(token)

    const hashedMatch = await this.db.prisma.session.findUnique({
      where: {
        sessionToken: hashed,
      },
    })
    if (hashedMatch) {
      return hashedMatch
    }

    if (hashed !== token) {
      const rawMatch = await this.db.prisma.session.findUnique({
        where: {
          sessionToken: token,
        },
      })
      if (rawMatch) {
        return rawMatch
      }
    }

    return null
  }
}
