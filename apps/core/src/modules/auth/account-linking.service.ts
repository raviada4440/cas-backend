import { Injectable } from '@nestjs/common'
import { createHash } from 'crypto'

import { DatabaseService } from '@core/processors/database/database.service'

export interface LinkOrCreateUserOptions {
  provider: string
  issuer: string
  subject: string
  email?: string | null
  name?: string | null
  image?: string | null
  fhirUser?: string | null
  orgId?: string | null
}

@Injectable()
export class AccountLinkingService {
  constructor(private readonly db: DatabaseService) {}

  externalKey(issuer: string, sub: string) {
    const hash = createHash('sha256')
    hash.update(`${issuer}|${sub}`)
    return hash.digest('hex')
  }

  async linkOrCreateUser(opts: LinkOrCreateUserOptions) {
    const { provider, issuer, subject, email, name, image, fhirUser, orgId } = opts

    if (email) {
      const existing = await this.db.prisma.user.findFirst({
        where: { email },
      })

      if (existing) {
        await this.db.prisma.userIdentity.upsert({
          where: {
            provider_issuer_subject: {
              provider,
              issuer,
              subject,
            },
          },
          update: {
            userId: existing.id,
            fhirUser: fhirUser ?? undefined,
            orgId: orgId ?? undefined,
          },
          create: {
            userId: existing.id,
            provider,
            issuer,
            subject,
            fhirUser: fhirUser ?? undefined,
            orgId: orgId ?? undefined,
          },
        })

        return existing.id
      }
    }

    const identity = await this.db.prisma.userIdentity.findUnique({
      where: {
        provider_issuer_subject: {
          provider,
          issuer,
          subject,
        },
      },
      select: {
        userId: true,
      },
    })

    if (identity) {
      return identity.userId
    }

    const user = await this.db.prisma.user.create({
      data: {
        email: email ?? null,
        name: name ?? null,
        image: image ?? null,
      },
    })

    await this.db.prisma.userIdentity.create({
      data: {
        userId: user.id,
        provider,
        issuer,
        subject,
        fhirUser: fhirUser ?? undefined,
        orgId: orgId ?? undefined,
      },
    })

    return user.id
  }

  async findUserByExternalIdentity(provider: string, issuer: string, subject: string) {
    const identity = await this.db.prisma.userIdentity.findUnique({
      where: {
        provider_issuer_subject: {
          provider,
          issuer,
          subject,
        },
      },
      select: {
        userId: true,
        fhirUser: true,
        orgId: true,
      },
    })

    if (!identity) {
      return null
    }

    return {
      userId: identity.userId,
      fhirUser: identity.fhirUser ?? undefined,
      orgId: identity.orgId ?? undefined,
    }
  }

  async updateUserFhirContext(
    userId: string,
    provider: string,
    issuer: string,
    subject: string,
    fhirUser?: string,
    orgId?: string,
  ) {
    await this.db.prisma.userIdentity.upsert({
      where: {
        provider_issuer_subject: {
          provider,
          issuer,
          subject,
        },
      },
      update: {
        fhirUser: fhirUser ?? undefined,
        orgId: orgId ?? undefined,
      },
      create: {
        userId,
        provider,
        issuer,
        subject,
        fhirUser: fhirUser ?? undefined,
        orgId: orgId ?? undefined,
      },
    })
  }

  async getUserExternalIdentities(userId: string) {
    const identities = await this.db.prisma.userIdentity.findMany({
      where: { userId },
      select: {
        provider: true,
        issuer: true,
        subject: true,
        fhirUser: true,
        orgId: true,
        createdAt: true,
      },
    })

    return identities.map((identity) => ({
      provider: identity.provider,
      issuer: identity.issuer,
      subject: identity.subject,
      fhirUser: identity.fhirUser ?? undefined,
      orgId: identity.orgId ?? undefined,
      createdAt: identity.createdAt,
    }))
  }

  async unlinkExternalIdentity(userId: string, provider: string, issuer: string, subject: string) {
    const result = await this.db.prisma.userIdentity.deleteMany({
      where: {
        userId,
        provider,
        issuer,
        subject,
      },
    })

    return result.count > 0
  }

  async hasProviderIdentity(userId: string, provider: string) {
    const count = await this.db.prisma.userIdentity.count({
      where: {
        userId,
        provider,
      },
    })

    return count > 0
  }
}
