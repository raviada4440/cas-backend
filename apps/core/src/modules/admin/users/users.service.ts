import { Injectable } from '@nestjs/common'
import { Prisma } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'

import { UserDetail, UserListResponse, UserSummary } from '@shared/contracts/users'

import { UserSearchQuery } from './users.dto'

@Injectable()
export class AdminUsersService {
  constructor(private readonly db: DatabaseService) {}

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
      items: users.map((user) => this.mapSummary(user)),
    }
  }

  async detail(userId: string): Promise<UserDetail> {
    const user = await this.db.prisma.user.findUnique({
      where: { id: userId },
      include: {
        userAttribute: {
          select: {
            userType: true,
          },
        },
      },
    })

    if (!user) {
      throw new BizException(ErrorCodeEnum.UserNotFound)
    }

    return this.mapDetail(user)
  }

  private mapSummary(
    user: Prisma.UserGetPayload<{
      include: {
        userAttribute: {
          select: {
            userType: true
          }
        }
      }
    }>,
  ): UserSummary {
    return {
      id: user.id,
      name: user.name ?? null,
      email: user.email ?? null,
      hasPassword: Boolean(user.password),
      createdAt: user.createdAt?.toISOString() ?? null,
    }
  }

  private mapDetail(
    user: Prisma.UserGetPayload<{
      include: {
        userAttribute: {
          select: {
            userType: true
          }
        }
      }
    }>,
  ): UserDetail {
    return {
      ...this.mapSummary(user),
      userAttribute: user.userAttribute
        ? {
            userType: user.userAttribute.userType ?? null,
          }
        : null,
      updatedAt: user.updatedAt?.toISOString() ?? null,
    }
  }
}
