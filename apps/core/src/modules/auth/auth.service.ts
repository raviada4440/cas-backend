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
      isSuperAdmin?: boolean
    },
  ) {
    const tenantIds = options?.tenantIds ?? []
    const claims: Record<string, unknown> = {}
    if (tenantIds.length > 0) {
      claims.tenantIds = tenantIds
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
    const identities = await this.db.prisma.userIdentity.findMany({
      where: {
        userId,
        orgId: {
          not: null,
        },
      },
      select: {
        orgId: true,
        organization: {
          select: {
            id: true,
            orgName: true,
          },
        },
      },
    })

    const byId = new Map<string, TenantMembership>()

    for (const identity of identities) {
      if (!identity.orgId) {
        continue
      }
      if (!byId.has(identity.orgId)) {
        const name = identity.organization?.orgName ?? null
        let slug: string | null = null
        if (name) {
          const normalized = name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
          slug = normalized.length > 0 ? normalized : null
        }
        byId.set(identity.orgId, {
          id: identity.orgId,
          name,
          slug,
        })
      }
    }

    // If no org identities, check for user attributes with admin/provider roles referencing organizations in future
    // Placeholder for extensibility

    return Array.from(byId.values())
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
