import { Injectable } from '@nestjs/common'
import { Prisma, Organization } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'

import { randomUUID } from 'node:crypto'

import {
  CreateProviderInput,
  ProviderDetail,
  ProviderEducationListResponse,
  ProviderFavoriteTestListResponse,
  ProviderOrderListResponse,
  ProviderSearchResponse,
  ProviderSummary,
  ProviderUserAccountResponse,
  UpdateProviderInput,
} from '@shared/contracts/providers'
import { OrganizationListResponse, OrganizationRecord } from '@shared/contracts/organization'

import {
  CreateProviderDtoInput,
  ProviderFavoriteCreateInputDto,
  ProviderOrganizationQuery,
  ProviderSearchQuery,
  ProviderUserAccountInput,
  UpdateProviderDtoInput,
} from './providers.dto'

type PrismaClientOrTx = Prisma.TransactionClient | DatabaseService['prisma']

type ProviderEntity = Prisma.ProviderGetPayload<{
  include: {
    userAttribute: {
      select: {
        id: true
        userId: true
        user: {
          select: {
            id: true
          }
        }
      }
    }
  }
}>

type FavoriteInclude = {
  testCatalog: {
    select: {
      id: true
      casandraTestId: true
      testName: true
      lab: {
        select: {
          labName: true
        }
      }
    }
  }
}
type FavoriteEntity = Prisma.ProviderFavoriteTestGetPayload<{ include: FavoriteInclude }>

type OrderInclude = {
  organization: {
    select: {
      orgName: true
    }
  }
  patient: {
    select: {
      firstName: true
      lastName: true
    }
  }
  labOrderStatuses: {
    orderBy: { statusDate: 'desc' }
    take: 1
    select: {
      status: true
      statusDate: true
    }
  }
  version: {
    select: {
      test: {
        select: {
          casandraTestId: true
          testName: true
        }
      }
    }
  }
}
type OrderEntity = Prisma.LabOrderGetPayload<{ include: OrderInclude }>

@Injectable()
export class ProvidersService {
  constructor(private readonly db: DatabaseService) {}

  private readonly providerInclude = {
    userAttribute: {
      select: {
        id: true,
        userId: true,
        user: {
          select: {
            id: true,
          },
        },
      },
    },
  } satisfies Prisma.ProviderInclude

  private readonly favoriteInclude = {
    testCatalog: {
      select: {
        id: true,
        casandraTestId: true,
        testName: true,
        lab: {
          select: {
            labName: true,
          },
        },
      },
    },
  } satisfies Prisma.ProviderFavoriteTestInclude

  private readonly orderInclude = {
    organization: {
      select: { orgName: true },
    },
    patient: {
      select: { firstName: true, lastName: true },
    },
    labOrderStatuses: {
      orderBy: { statusDate: 'desc' },
      take: 1,
      select: { status: true, statusDate: true },
    },
    version: {
      select: {
        test: {
          select: {
            casandraTestId: true,
            testName: true,
          },
        },
      },
    },
  } satisfies Prisma.LabOrderInclude

  async search(query: ProviderSearchQuery): Promise<ProviderSearchResponse> {
    const take = Math.min(query.limit ?? 20, 50)
    const where: Prisma.ProviderWhereInput = {}

    if (query.search) {
      const searchTerm = query.search.trim()
      if (searchTerm.length) {
        where.OR = [
          { firstName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
          { lastName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
          { name: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
          { email: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
          { npi: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        ]
      }
    }

    if (query.organizationId) {
      where.providerOrganizations = {
        some: { organizationId: query.organizationId },
      }
    }

    const [providers, totalCount] = await this.db.prisma.$transaction([
      this.db.prisma.provider.findMany({
        where,
        orderBy: [{ updatedAt: 'desc' }],
        take: take + 1,
        ...(query.cursor ? { cursor: { id: query.cursor }, skip: 1 } : {}),
        include: this.providerInclude,
      }),
      this.db.prisma.provider.count({ where }),
    ])

    const items = providers.slice(0, take).map((provider) => this.mapSummary(provider))
    const nextCursor = providers.length > take ? providers[take].id : null

    return {
      items,
      nextCursor,
      totalCount,
    }
  }

  async detail(providerId: string): Promise<ProviderDetail> {
    const provider = await this.findProviderOrThrow(providerId)
    return this.mapDetail(provider)
  }

  async create(input: CreateProviderDtoInput): Promise<ProviderDetail> {
    const created = await this.db.prisma.provider.create({
      data: this.buildCreateData(input),
      include: this.providerInclude,
    })
    return this.mapDetail(created)
  }

  async update(providerId: string, input: UpdateProviderDtoInput): Promise<ProviderDetail> {
    const updated = await this.db.prisma.provider
      .update({
        where: { id: providerId },
        data: this.buildUpdateData(input),
        include: this.providerInclude,
      })
      .catch(() => {
        throw new BizException(ErrorCodeEnum.ProviderNotFound)
      })

    return this.mapDetail(updated)
  }

  async delete(providerId: string) {
    await this.db.prisma.$transaction(async (tx) => {
      await tx.providerFavoriteTest.deleteMany({ where: { providerId } })
      await tx.providerEducation.deleteMany({ where: { providerId } })
      await tx.providerOrganization.deleteMany({ where: { providerId } })

      await tx.provider.delete({ where: { id: providerId } }).catch(() => {
        throw new BizException(ErrorCodeEnum.ProviderNotFound)
      })
    })

    return { success: true }
  }

  async listOrganizations(
    providerId: string,
    query: ProviderOrganizationQuery,
  ): Promise<OrganizationListResponse> {
    await this.findProviderOrThrow(providerId)

    const take = Math.min(query.limit ?? 20, 100)
    const organizations = await this.db.prisma.providerOrganization.findMany({
      where: { providerId },
      take,
      orderBy: [{ createdAt: 'desc' }],
      include: {
        organization: true,
      },
    })

    return {
      items: organizations
        .map((item) => item.organization)
        .filter((org): org is NonNullable<typeof org> => Boolean(org))
        .map((org) => this.mapOrganization(org)),
    }
  }

  async listEducation(providerId: string): Promise<ProviderEducationListResponse> {
    await this.findProviderOrThrow(providerId)

    const education = await this.db.prisma.providerEducation.findMany({
      where: { providerId },
      orderBy: [{ createdAt: 'desc' }],
    })

    return {
      items: education.map((record) => ({
        id: record.id,
        providerId: record.providerId,
        providerNpi: record.providerNpi ?? null,
        name: record.name ?? null,
        educationType: record.educationType ?? null,
        schoolName: record.schoolName ?? null,
        areaOfEducation: record.areaOfEducation ?? null,
        createdAt: record.createdAt.toISOString(),
      })),
    }
  }

  async listFavoriteTests(providerId: string): Promise<ProviderFavoriteTestListResponse> {
    await this.findProviderOrThrow(providerId)

    const favorites = await this.db.prisma.providerFavoriteTest.findMany({
      where: { providerId },
      orderBy: [{ createdAt: 'desc' }],
      include: this.favoriteInclude,
    })

    return {
      items: favorites.map((favorite) => this.mapFavorite(favorite as FavoriteEntity)),
    }
  }

  async addFavoriteTest(
    providerId: string,
    input: ProviderFavoriteCreateInputDto,
  ): Promise<ProviderFavoriteTestListResponse['items'][number]> {
    await this.findProviderOrThrow(providerId)

    const existing = await this.db.prisma.providerFavoriteTest.findFirst({
      where: { providerId, testId: input.testId },
      include: this.favoriteInclude,
    })

    if (existing) {
      return this.mapFavorite(existing as FavoriteEntity)
    }

    const created = await this.db.prisma.providerFavoriteTest.create({
      data: {
        providerId,
        testId: input.testId,
      },
      include: this.favoriteInclude,
    })

    return this.mapFavorite(created as FavoriteEntity)
  }

  async listOrders(providerId: string): Promise<ProviderOrderListResponse> {
    await this.findProviderOrThrow(providerId)

    const orders = await this.db.prisma.labOrder.findMany({
      where: {
        OR: [{ orderingProviderId: providerId }, { treatingProviderId: providerId }],
      },
      orderBy: [{ orderDate: 'desc' }, { createdAt: 'desc' }],
      take: 100,
      include: this.orderInclude,
    })

    return {
      items: (orders as OrderEntity[]).map((order) => this.mapOrder(order, providerId)),
    }
  }

  async createUserAccount(
    providerId: string,
    input: ProviderUserAccountInput,
  ): Promise<ProviderUserAccountResponse> {
    return this.db.prisma.$transaction(async (tx) => {
      const provider = await this.findProviderOrThrow(providerId, tx)

      const autoVerify = input.autoVerify ?? false
      const email = input.email ?? provider.email ?? null
      if (!email) {
        throw new BizException(ErrorCodeEnum.UserNotFound)
      }

      const existingUserAttributeId = provider.userAttribute?.id ?? provider.userAttributeId ?? null
      if (existingUserAttributeId) {
        const userId =
          provider.userAttribute?.userId ??
          (
            await tx.userAttribute.findUnique({
              where: { id: existingUserAttributeId },
              select: { userId: true },
            })
          )?.userId

        if (!userId) {
          throw new BizException(ErrorCodeEnum.UserNotFound)
        }

        const summaryProvider =
          provider.userAttribute?.userId === userId
            ? provider
            : ({
                ...provider,
                userAttribute: {
                  id: existingUserAttributeId,
                  userId,
                  user: { id: userId },
                },
              } as ProviderEntity)

        return {
          provider: this.mapSummary(summaryProvider),
          userId,
          userAttributeId: existingUserAttributeId,
          verificationToken: null,
          autoVerified: autoVerify,
        }
      }

      const now = new Date()

      const user = await tx.user.upsert({
        where: { email },
        update: {
          name:
            provider.name ??
            ([provider.firstName, provider.lastName].filter(Boolean).join(' ') || null),
          ...(autoVerify ? { emailVerified: now } : {}),
        },
        create: {
          email,
          name:
            provider.name ??
            ([provider.firstName, provider.lastName].filter(Boolean).join(' ') || null),
          emailVerified: autoVerify ? now : null,
        },
      })

      let userAttribute = await tx.userAttribute.findFirst({
        where: { userId: user.id },
        select: { id: true, userId: true },
      })

      if (userAttribute) {
        await tx.userAttribute.update({
          where: { id: userAttribute.id },
          data: { userType: 'Provider' },
        })
      } else {
        userAttribute = await tx.userAttribute.create({
          data: {
            userId: user.id,
            userType: 'Provider',
          },
          select: { id: true, userId: true },
        })
      }

      if (!userAttribute) {
        throw new BizException(ErrorCodeEnum.UserNotFound)
      }

      await tx.provider.update({
        where: { id: providerId },
        data: { userAttributeId: userAttribute.id },
      })

      let verificationToken: string | null = null
      if (!autoVerify) {
        verificationToken = randomUUID()
        const expires = new Date(Date.now() + 6 * 60 * 60 * 1000) // 6 hours expiry
        await tx.verificationToken.upsert({
          where: {
            identifier_token: {
              identifier: email,
              token: verificationToken,
            },
          },
          update: {
            expires,
          },
          create: {
            identifier: email,
            token: verificationToken,
            expires,
          },
        })
      }

      const summaryProvider = {
        ...provider,
        userAttribute: {
          id: userAttribute.id,
          userId: user.id,
          user: { id: user.id },
        },
      } as ProviderEntity

      return {
        provider: this.mapSummary(summaryProvider),
        userId: user.id,
        userAttributeId: userAttribute.id,
        verificationToken,
        autoVerified: autoVerify,
      }
    })
  }

  private buildCreateData(input: CreateProviderInput): Prisma.ProviderUncheckedCreateInput {
    return {
      name: input.name ?? null,
      firstName: input.firstName ?? null,
      lastName: input.lastName ?? null,
      npi: input.npi ?? null,
      email: input.email ?? null,
      credentials: input.credentials ?? null,
      gender: input.gender ?? null,
      providerType: input.providerType ?? null,
      affiliation: input.affiliation ?? null,
      aboutme: input.aboutme ?? null,
      proceduresAndResearch: input.proceduresAndResearch ?? null,
      specialInterests: input.specialInterests ?? null,
      specialty: input.specialty ?? null,
      href: input.href ?? null,
    }
  }

  private buildUpdateData(input: UpdateProviderInput): Prisma.ProviderUncheckedUpdateInput {
    return {
      ...(input.name !== undefined ? { name: input.name } : {}),
      ...(input.firstName !== undefined ? { firstName: input.firstName } : {}),
      ...(input.lastName !== undefined ? { lastName: input.lastName } : {}),
      ...(input.npi !== undefined ? { npi: input.npi } : {}),
      ...(input.email !== undefined ? { email: input.email } : {}),
      ...(input.credentials !== undefined ? { credentials: input.credentials } : {}),
      ...(input.gender !== undefined ? { gender: input.gender } : {}),
      ...(input.providerType !== undefined ? { providerType: input.providerType } : {}),
      ...(input.affiliation !== undefined ? { affiliation: input.affiliation } : {}),
      ...(input.aboutme !== undefined ? { aboutme: input.aboutme } : {}),
      ...(input.proceduresAndResearch !== undefined
        ? { proceduresAndResearch: input.proceduresAndResearch }
        : {}),
      ...(input.specialInterests !== undefined ? { specialInterests: input.specialInterests } : {}),
      ...(input.specialty !== undefined ? { specialty: input.specialty } : {}),
      ...(input.href !== undefined ? { href: input.href } : {}),
    }
  }

  private async findProviderOrThrow(
    providerId: string,
    prisma: PrismaClientOrTx = this.db.prisma,
  ): Promise<ProviderEntity> {
    const provider = await prisma.provider.findUnique({
      where: { id: providerId },
      include: this.providerInclude,
    })

    if (!provider) {
      throw new BizException(ErrorCodeEnum.ProviderNotFound)
    }

    return provider
  }

  private mapSummary(provider: ProviderEntity): ProviderSummary {
    return {
      id: provider.id,
      firstName: provider.firstName ?? null,
      lastName: provider.lastName ?? null,
      name: provider.name ?? null,
      email: provider.email ?? null,
      userAttributeId: provider.userAttribute?.id ?? provider.userAttributeId ?? null,
      npi: provider.npi ?? null,
      specialty: provider.specialty ?? null,
    }
  }

  private mapDetail(provider: ProviderEntity): ProviderDetail {
    return {
      ...this.mapSummary(provider),
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
    }
  }

  private mapOrganization(org: Organization): OrganizationRecord {
    return {
      id: org.id,
      parentId: org.parentId ?? null,
      level: org.level ?? null,
      parentOrgName: org.parentOrgName ?? null,
      orgName: org.orgName ?? null,
      orgType: org.orgType ?? null,
      orgSpecialty: org.orgSpecialty ?? null,
      orgAddress: org.orgAddress ?? null,
      orgCity: org.orgCity ?? null,
      orgState: org.orgState ?? null,
      orgZip: org.orgZip ?? null,
      formattedAddress: this.formatAddress(org),
      contactEmail: null,
      contactPhone: null,
    }
  }

  private mapFavorite(favorite: FavoriteEntity): ProviderFavoriteTestListResponse['items'][number] {
    return {
      id: favorite.id,
      providerId: favorite.providerId ?? null,
      testId: favorite.testId ?? null,
      casandraTestId: favorite.testCatalog?.casandraTestId ?? null,
      testName: favorite.testCatalog?.testName ?? null,
      labName: favorite.testCatalog?.lab?.labName ?? null,
      createdAt: favorite.createdAt.toISOString(),
    }
  }

  private mapOrder(
    order: OrderEntity,
    providerId: string,
  ): ProviderOrderListResponse['items'][number] {
    const latestStatus = order.labOrderStatuses[0]
    const role =
      order.orderingProviderId === providerId
        ? 'ordering'
        : order.treatingProviderId === providerId
          ? 'treating'
          : null

    return {
      id: order.id,
      orderNumber: order.orderNumber ?? null,
      casandraTestId: order.version?.test?.casandraTestId ?? null,
      testName: order.version?.test?.testName ?? null,
      status: latestStatus?.status ?? null,
      orderedAt: (order.orderDate ?? order.createdAt)?.toISOString() ?? null,
      patientName: this.formatName(order.patient),
      organizationName: order.organization?.orgName ?? null,
      role,
    }
  }

  private formatAddress(org: Organization): string | null {
    const parts = [org.orgAddress, org.orgCity, org.orgState, org.orgZip]
      .map((part) => part?.trim())
      .filter((part): part is string => Boolean(part && part.length))

    return parts.length ? parts.join(', ') : null
  }

  private formatName(
    entity?: null | {
      firstName?: string | null
      lastName?: string | null
    },
  ): string | null {
    if (!entity) {
      return null
    }

    const parts = [entity.firstName, entity.lastName].filter((part): part is string =>
      Boolean(part && part.length),
    )

    return parts.length ? parts.join(' ') : null
  }
}
