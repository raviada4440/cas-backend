import { Injectable } from '@nestjs/common'
import { Prisma, ProviderEducation } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'

import { randomUUID } from 'node:crypto'

import {
  CreateProviderInput,
  ProviderBulkUpdateResult,
  ProviderDetail,
  ProviderEducationListResponse,
  ProviderEducationRecord,
  ProviderFavoriteTestListResponse,
  ProviderOrganizationListResponse,
  ProviderOrganizationRecord,
  ProviderOrderListResponse,
  ProviderSearchResponse,
  ProviderStatsResponse,
  ProviderSummary,
  ProviderUserAccountResponse,
  UpdateProviderInput,
} from '@shared/contracts/providers'

import {
  CreateProviderDtoInput,
  ProviderBulkUpdateInputType,
  ProviderEducationCreateInputType,
  ProviderFavoriteCreateInputDto,
  ProviderOrganizationLinkInputType,
  ProviderOrganizationQuery,
  ProviderSearchQuery,
  ProviderUpsertDtoInput,
  ProviderUserAccountInput,
  UpdateProviderDtoInput,
} from './providers.dto'

type PrismaClientOrTx = Prisma.TransactionClient | DatabaseService['prisma']

type TenantScope = {
  tenantIds: string[]
  isSuperAdmin: boolean
}

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

const orderInclude = {
  organization: {
    select: {
      orgName: true,
    },
  },
  patient: {
    select: {
      firstName: true,
      lastName: true,
    },
  },
  labOrderStatuses: {
    orderBy: { statusDate: 'desc' },
    take: 1,
    select: {
      status: true,
      statusDate: true,
    },
  },
  labOrderTests: {
    include: {
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
      configuration: true,
    },
  },
} as any
type OrderEntity = Prisma.LabOrderGetPayload<{ include: typeof orderInclude }>

type ProviderOrganizationEntity = Prisma.ProviderOrganizationGetPayload<{
  include: {
    organization: true
  }
}>

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

  private readonly orderInclude: any = {
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
    labOrderTests: {
      include: {
        version: {
          include: {
            test: {
              include: {
                lab: true,
              },
            },
          },
        },
        configuration: true,
      },
    },
  }

  private normalizeScope(scope?: TenantScope): TenantScope {
    const tenantIds = Array.from(new Set(scope?.tenantIds ?? [])).filter(
      (id): id is string => typeof id === 'string' && id.length > 0,
    )

    return {
      tenantIds,
      isSuperAdmin: Boolean(scope?.isSuperAdmin),
    }
  }

  private combineWhere(
    base: Prisma.ProviderWhereInput,
    addition: Prisma.ProviderWhereInput,
  ): Prisma.ProviderWhereInput {
    if (!addition || Object.keys(addition).length === 0) {
      return base
    }

    const baseCopy = { ...base }
    const andConditions: Prisma.ProviderWhereInput[] = []

    if (baseCopy.AND) {
      const existing = baseCopy.AND
      delete baseCopy.AND
      andConditions.push(...(Array.isArray(existing) ? existing : [existing]))
    }

    if (Object.keys(baseCopy).length > 0) {
      andConditions.unshift(baseCopy)
    }

    andConditions.push(addition)

    if (andConditions.length === 1) {
      return andConditions[0]
    }

    return {
      AND: andConditions,
    }
  }

  private applyScopeToProviderWhere(
    where: Prisma.ProviderWhereInput,
    _scope: TenantScope,
  ): Prisma.ProviderWhereInput {
    // Scope filtering disabled: providers are no longer restricted by tenantIds here.
    // Caller may still supply organizationId explicitly via query to filter.
    return where
  }

  private async ensureOrganizationAccess(organizationId: string, scope: TenantScope) {
    const normalized = this.normalizeScope(scope)
    if (normalized.isSuperAdmin) {
      return
    }

    if (!normalized.tenantIds.includes(organizationId)) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }
  }

  async search(query: ProviderSearchQuery, scope: TenantScope): Promise<ProviderSearchResponse> {
    const normalizedScope = this.normalizeScope(scope)
    const take = Math.min(query.limit ?? 20, 50)
    let where: Prisma.ProviderWhereInput = {}

    if (query.search) {
      const searchTerm = query.search.trim()
      if (searchTerm.length) {
        where = {
          ...where,
          OR: [
            { firstName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
            { lastName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
            { name: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
            { email: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
            { npi: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
          ],
        }
      }
    }

    if (query.organizationId) {
      where = this.combineWhere(where, {
        providerOrganizations: {
          some: { organizationId: query.organizationId },
        },
      })
    }

    if (query.specialty) {
      const specialty = query.specialty.trim()
      if (specialty.length) {
        where = this.combineWhere(where, {
          specialty: { contains: specialty, mode: Prisma.QueryMode.insensitive },
        })
      }
    }

    where = this.applyScopeToProviderWhere(where, normalizedScope)

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

  async stats(scope: TenantScope): Promise<ProviderStatsResponse> {
    const normalizedScope = this.normalizeScope(scope)
    const baseWhere = this.applyScopeToProviderWhere({}, normalizedScope)

    const [totalProviders, providersWithOrganizations] = await this.db.prisma.$transaction([
      this.db.prisma.provider.count({ where: baseWhere }),
      this.db.prisma.provider.count({
        where: this.combineWhere(baseWhere, {
          providerOrganizations: {
            some: {},
          },
        }),
      }),
    ])

    return {
      totalProviders,
      providersWithOrganizations,
      providersWithoutOrganizations: Math.max(totalProviders - providersWithOrganizations, 0),
    }
  }

  async detail(providerId: string, scope: TenantScope): Promise<ProviderDetail> {
    const provider = await this.findProviderOrThrow(providerId, this.db.prisma, scope)
    return this.mapDetail(provider)
  }

  async detailByNpi(npi: string, scope: TenantScope): Promise<ProviderDetail> {
    const normalizedScope = this.normalizeScope(scope)
    const normalizedNpi = npi.trim()
    if (!normalizedNpi.length) {
      throw new BizException(ErrorCodeEnum.ProviderNotFound)
    }
    const where = this.applyScopeToProviderWhere({ npi: normalizedNpi }, normalizedScope)
    const provider = await this.db.prisma.provider.findFirst({
      where,
      include: this.providerInclude,
    })
    if (!provider) {
      throw new BizException(ErrorCodeEnum.ProviderNotFound)
    }
    return this.mapDetail(provider as ProviderEntity)
  }

  async create(input: CreateProviderDtoInput, _scope: TenantScope): Promise<ProviderDetail> {
    const created = await this.db.prisma.provider.create({
      data: this.buildCreateData(input),
      include: this.providerInclude,
    })
    return this.mapDetail(created)
  }

  async upsert(input: ProviderUpsertDtoInput, scope: TenantScope): Promise<ProviderDetail> {
    if (input.id) {
      return this.update(input.id, input, scope)
    }
    const { id: _ignoredId, ...createPayload } = input
    return this.create(createPayload as CreateProviderDtoInput, scope)
  }

  async bulkUpdate(
    input: ProviderBulkUpdateInputType,
    scope: TenantScope,
  ): Promise<ProviderBulkUpdateResult> {
    if (!input.providerIds.length) {
      return { updated: 0 }
    }

    const normalizedScope = this.normalizeScope(scope)
    const scopedWhere = this.applyScopeToProviderWhere(
      { id: { in: input.providerIds } },
      normalizedScope,
    )

    const accessibleProviders = await this.db.prisma.provider.findMany({
      where: scopedWhere,
      select: { id: true },
    })

    if (!accessibleProviders.length) {
      return { updated: 0 }
    }

    const updateData = this.buildUpdateData((input.updateData ?? {}) as UpdateProviderInput)

    if (Object.keys(updateData).length === 0) {
      return { updated: 0 }
    }

    const result = await this.db.prisma.provider.updateMany({
      where: {
        id: { in: accessibleProviders.map((provider) => provider.id) },
      },
      data: updateData,
    })

    return { updated: result.count }
  }

  async update(
    providerId: string,
    input: UpdateProviderDtoInput,
    scope: TenantScope,
  ): Promise<ProviderDetail> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)
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

  async delete(providerId: string, scope: TenantScope) {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

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
    scope: TenantScope,
  ): Promise<ProviderOrganizationListResponse> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

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
      items: organizations.map((item) => this.mapProviderOrganization(item)),
    }
  }

  async linkOrganization(
    providerId: string,
    input: ProviderOrganizationLinkInputType,
    scope: TenantScope,
  ): Promise<ProviderOrganizationRecord> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)
    await this.ensureOrganizationAccess(input.organizationId, scope)

    const existing = await this.db.prisma.providerOrganization.findFirst({
      where: { providerId, organizationId: input.organizationId },
      include: { organization: true },
    })

    if (existing) {
      const updateData = this.buildOrganizationUpdateData(input)
      if (Object.keys(updateData).length === 0) {
        return this.mapProviderOrganization(existing as ProviderOrganizationEntity)
      }

      const updated = await this.db.prisma.providerOrganization.update({
        where: { id: existing.id },
        data: updateData,
        include: { organization: true },
      })
      return this.mapProviderOrganization(updated as ProviderOrganizationEntity)
    }

    const created = await this.db.prisma.providerOrganization.create({
      data: this.buildOrganizationCreateData(providerId, input),
      include: { organization: true },
    })

    return this.mapProviderOrganization(created as ProviderOrganizationEntity)
  }

  async unlinkOrganization(providerId: string, organizationId: string, scope: TenantScope) {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)
    await this.ensureOrganizationAccess(organizationId, scope)

    const result = await this.db.prisma.providerOrganization.deleteMany({
      where: { providerId, organizationId },
    })

    return { success: result.count > 0, removed: result.count }
  }

  async listEducation(
    providerId: string,
    scope: TenantScope,
  ): Promise<ProviderEducationListResponse> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

    const education = await this.db.prisma.providerEducation.findMany({
      where: { providerId },
      orderBy: [{ createdAt: 'desc' }],
    })

    return {
      items: education.map((record) => this.mapEducation(record)),
    }
  }

  async addEducation(
    providerId: string,
    input: ProviderEducationCreateInputType,
    scope: TenantScope,
  ): Promise<ProviderEducationRecord> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

    const created = await this.db.prisma.providerEducation.create({
      data: {
        providerId,
        providerNpi: input.providerNpi ?? null,
        name: input.name ?? null,
        educationType: input.educationType ?? null,
        schoolName: input.schoolName ?? null,
        areaOfEducation: input.areaOfEducation ?? null,
      },
    })

    return this.mapEducation(created)
  }

  async listFavoriteTests(
    providerId: string,
    scope: TenantScope,
  ): Promise<ProviderFavoriteTestListResponse> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

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
    scope: TenantScope,
  ): Promise<ProviderFavoriteTestListResponse['items'][number]> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

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

  async listOrders(providerId: string, scope: TenantScope): Promise<ProviderOrderListResponse> {
    await this.findProviderOrThrow(providerId, this.db.prisma, scope)

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
    scope: TenantScope,
  ): Promise<ProviderUserAccountResponse> {
    return this.db.prisma.$transaction(async (tx) => {
      const provider = await this.findProviderOrThrow(providerId, tx, scope)

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

  private buildOrganizationCreateData(
    providerId: string,
    input: ProviderOrganizationLinkInputType,
  ): Prisma.ProviderOrganizationUncheckedCreateInput {
    return {
      providerId,
      organizationId: input.organizationId,
      providerNpi: input.providerNpi ?? null,
      name: input.name ?? null,
      parentOrgName: input.parentOrgName ?? null,
      orgName: input.orgName ?? null,
      orgAddress: input.orgAddress ?? null,
      orgCity: input.orgCity ?? null,
      orgState: input.orgState ?? null,
      orgZip: input.orgZip ?? null,
    }
  }

  private buildOrganizationUpdateData(
    input: ProviderOrganizationLinkInputType,
  ): Prisma.ProviderOrganizationUncheckedUpdateInput {
    return {
      ...(input.providerNpi !== undefined ? { providerNpi: input.providerNpi ?? null } : {}),
      ...(input.name !== undefined ? { name: input.name ?? null } : {}),
      ...(input.parentOrgName !== undefined ? { parentOrgName: input.parentOrgName ?? null } : {}),
      ...(input.orgName !== undefined ? { orgName: input.orgName ?? null } : {}),
      ...(input.orgAddress !== undefined ? { orgAddress: input.orgAddress ?? null } : {}),
      ...(input.orgCity !== undefined ? { orgCity: input.orgCity ?? null } : {}),
      ...(input.orgState !== undefined ? { orgState: input.orgState ?? null } : {}),
      ...(input.orgZip !== undefined ? { orgZip: input.orgZip ?? null } : {}),
    }
  }

  private async findProviderOrThrow(
    providerId: string,
    prisma: PrismaClientOrTx = this.db.prisma,
    scope?: TenantScope,
  ): Promise<ProviderEntity> {
    const normalizedScope = this.normalizeScope(scope)
    const where = this.applyScopeToProviderWhere({ id: providerId }, normalizedScope)
    const provider = await prisma.provider.findFirst({
      where,
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

  private mapProviderOrganization(record: ProviderOrganizationEntity): ProviderOrganizationRecord {
    const organization = record.organization
    return {
      id: record.id,
      providerId: record.providerId,
      organizationId: record.organizationId,
      providerNpi: record.providerNpi ?? null,
      name: record.name ?? organization?.orgName ?? null,
      parentOrgName: record.parentOrgName ?? organization?.parentOrgName ?? null,
      orgName: record.orgName ?? organization?.orgName ?? null,
      orgAddress: record.orgAddress ?? organization?.orgAddress ?? null,
      orgCity: record.orgCity ?? organization?.orgCity ?? null,
      orgState: record.orgState ?? organization?.orgState ?? null,
      orgZip: record.orgZip ?? organization?.orgZip ?? null,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
    }
  }

  private mapEducation(record: ProviderEducation): ProviderEducationRecord {
    return {
      id: record.id,
      providerId: record.providerId,
      providerNpi: record.providerNpi ?? null,
      name: record.name ?? null,
      educationType: record.educationType ?? null,
      schoolName: record.schoolName ?? null,
      areaOfEducation: record.areaOfEducation ?? null,
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString(),
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
    const latestStatus = (order.labOrderStatuses as any)?.[0] as any
    const role =
      order.orderingProviderId === providerId
        ? 'ordering'
        : order.treatingProviderId === providerId
          ? 'treating'
          : null

    const primaryTest = (order as any).labOrderTests?.[0] as any
    const primaryTestInfo = primaryTest?.version?.test as any

    return {
      id: order.id,
      orderNumber: order.orderNumber ?? null,
      casandraTestId: primaryTestInfo?.casandraTestId ?? null,
      testName: primaryTestInfo?.testName ?? null,
      status: latestStatus?.status ?? null,
      orderedAt: (order.orderDate ?? order.createdAt)?.toISOString() ?? null,
      patientName: this.formatName(order.patient as any),
      organizationName: (order.organization as any)?.orgName ?? null,
      role,
    }
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
