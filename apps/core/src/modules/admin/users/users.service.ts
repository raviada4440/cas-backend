import { Injectable } from '@nestjs/common'
import { Prisma } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { UserOnboardingService } from '@core/modules/auth/user-onboarding.service'

import {
  UserDetail,
  UserListResponse,
  UserSummary,
  UserDetail as UserDetailContract,
} from '@shared/contracts/users'
import { InviteUserRequest, InviteUserResponse } from '@shared/contracts/auth'

import { UserSearchQuery } from './users.dto'

type UserSummaryInclude = Prisma.UserGetPayload<{
  include: {
    userAttribute: {
      select: {
        userType: true
      }
    }
  }
}>

type UserDetailInclude = Prisma.UserGetPayload<{
  include: {
    userAttribute: {
      select: {
        userType: true
        provider: {
          include: {
            providerOrganizations: {
              include: {
                organization: true
              }
            }
          }
        }
      }
    }
    userRoles: {
      select: {
        role: {
          select: {
            id: true
            name: true
            description: true
            permissions: true
          }
        }
      }
    }
  }
}>

@Injectable()
export class AdminUsersService {
  constructor(
    private readonly db: DatabaseService,
    private readonly onboarding: UserOnboardingService,
  ) {}

  async list(query: UserSearchQuery): Promise<UserListResponse> {
    const where: Prisma.UserWhereInput = {}
    const take = Math.min(query.limit ?? 50, 100)

    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: Prisma.QueryMode.insensitive } },
        { email: { contains: query.search, mode: Prisma.QueryMode.insensitive } },
      ]
    }

    const users = await this.db.prisma.user.findMany({
      where,
      orderBy: [{ createdAt: 'desc' }],
      take,
      include: {
        userAttribute: {
          select: {
            userType: true,
          },
        },
      },
    })

    return {
      items: users.map((user) => this.mapSummary(user as UserSummaryInclude)),
    }
  }

  async invite(input: InviteUserRequest): Promise<InviteUserResponse> {
    return this.onboarding.inviteUser(input)
  }

  async detailByEmail(email: string): Promise<UserDetail> {
    const user = await this.db.prisma.user.findUnique({
      where: { email },
      include: this.userDetailInclude(),
    })

    if (!user) {
      throw new BizException(ErrorCodeEnum.UserNotFound)
    }

    return this.mapDetail(user as UserDetailInclude)
  }

  async detail(userId: string): Promise<UserDetail> {
    const user = await this.db.prisma.user.findUnique({
      where: { id: userId },
      include: this.userDetailInclude(),
    })

    if (!user) {
      throw new BizException(ErrorCodeEnum.UserNotFound)
    }

    return this.mapDetail(user as UserDetailInclude)
  }

  private userDetailInclude(): Prisma.UserInclude {
    return {
      userAttribute: {
        select: {
          userType: true,
          provider: {
            include: {
              providerOrganizations: {
                include: {
                  organization: true,
                },
              },
            },
          },
        },
      },
      userRoles: {
        select: {
          role: {
            select: {
              id: true,
              name: true,
              description: true,
              permissions: true,
            },
          },
        },
      },
    }
  }

  private mapSummary(user: UserSummaryInclude): UserSummary {
    return {
      id: user.id,
      name: user.name ?? null,
      email: user.email ?? null,
      hasPassword: Boolean(user.password),
      createdAt: user.createdAt?.toISOString() ?? null,
      updatedAt: user.updatedAt?.toISOString() ?? null,
      emailVerified: user.emailVerified?.toISOString() ?? null,
      image: user.image ?? null,
      userAttribute: user.userAttribute
        ? {
            userType: user.userAttribute.userType ?? null,
          }
        : null,
    }
  }

  private mapDetail(user: UserDetailInclude): UserDetailContract {
    const summary = this.mapSummary(user)

    return {
      ...summary,
      roles:
        user.userRoles?.map((assignment) => ({
          id: assignment.role.id,
          name: assignment.role.name,
          description: assignment.role.description ?? null,
          permissions: assignment.role.permissions ?? [],
        })) ?? [],
      providerProfile: this.mapProviderProfile(user.userAttribute?.provider),
    }
  }

  private mapProviderProfile(
    provider?: Prisma.ProviderGetPayload<{
      include: {
        providerOrganizations: {
          include: {
            organization: true
          }
        }
      }
    }> | null,
  ): UserDetailContract['providerProfile'] {
    if (!provider) {
      return null
    }

    return {
      id: provider.id,
      firstName: provider.firstName ?? null,
      lastName: provider.lastName ?? null,
      name: provider.name ?? null,
      email: provider.email ?? null,
      userAttributeId: provider.userAttributeId ?? null,
      npi: provider.npi ?? null,
      specialty: provider.specialty ?? null,
      credentials: provider.credentials ?? null,
      gender: provider.gender ?? null,
      providerType: provider.providerType ?? null,
      affiliation: provider.affiliation ?? null,
      aboutme: provider.aboutme ?? null,
      proceduresAndResearch: provider.proceduresAndResearch ?? null,
      specialInterests: provider.specialInterests ?? null,
      href: provider.href ?? null,
      createdAt: provider.createdAt.toISOString(),
      updatedAt: provider.updatedAt.toISOString(),
      organizations: provider.providerOrganizations.map((org) => ({
        id: org.id,
        providerId: org.providerId,
        organizationId: org.organizationId,
        providerNpi: org.providerNpi ?? null,
        name: org.name ?? null,
        parentOrgName: org.parentOrgName ?? null,
        orgName: org.orgName ?? org.organization?.orgName ?? null,
        orgAddress: org.orgAddress ?? org.organization?.orgAddress ?? null,
        orgCity: org.orgCity ?? org.organization?.orgCity ?? null,
        orgState: org.orgState ?? org.organization?.orgState ?? null,
        orgZip: org.orgZip ?? org.organization?.orgZip ?? null,
        createdAt: org.createdAt.toISOString(),
        updatedAt: org.updatedAt.toISOString(),
      })),
    }
  }
}

