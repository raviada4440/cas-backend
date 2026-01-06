import { Injectable } from '@nestjs/common'
import { Prisma } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'

import {
  FacilityDirectoryQueryInput,
  OrganizationDirectoryQueryInput,
  FacilityCreateInputDto,
  OrganizationAncestryResponseType,
  OrganizationCreateInputDto,
  OrganizationFavoriteCreateInputDto,
  OrganizationFavoriteTestListResponseType,
  OrganizationResultListResponseType,
  OrganizationUpdateInputDto,
  ProviderSummaryType,
  UserListResponseType,
} from './organizations.dto'
import {
  OrganizationListResponse,
  OrganizationRecord,
  OrganizationFavoriteTestRecord,
  OrganizationResultRecord,
} from '@shared/contracts/organization'
import { UserSummary } from '@shared/contracts/users'

type OrganizationEntity = Prisma.OrganizationGetPayload<{}>
type UserEntity = Prisma.UserGetPayload<{
  include: {
    userAttribute: {
      select: {
        userType: true
      }
    }
  }
}>
type FavoriteInclude = {
  organization: {
    select: {
      id: true
      orgName: true
    }
  }
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
type FavoriteEntity = Prisma.OrganizationFavoriteTestGetPayload<{ include: FavoriteInclude }>
const resultInclude = {
  orderingProvider: {
    select: {
      firstName: true,
      lastName: true,
      name: true,
    },
  },
  patient: {
    select: {
      firstName: true,
      lastName: true,
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
  labOrderStatuses: {
    orderBy: { statusDate: 'desc' },
    take: 1,
    select: {
      status: true,
      statusDate: true,
    },
  },
} as any
type ResultEntity = Prisma.LabOrderGetPayload<{ include: typeof resultInclude }>
type ProviderEntity = Prisma.ProviderGetPayload<{}>

@Injectable()
export class OrganizationsService {
  constructor(private readonly db: DatabaseService) {}

  private readonly favoriteInclude = {
    organization: {
      select: {
        id: true,
        orgName: true,
      },
    },
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
  } satisfies Prisma.OrganizationFavoriteTestInclude

  private readonly resultInclude: any = {
    orderingProvider: {
      select: {
        firstName: true,
        lastName: true,
        name: true,
      },
    },
    patient: {
      select: {
        firstName: true,
        lastName: true,
      },
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
    labOrderStatuses: {
      orderBy: { statusDate: 'desc' },
      take: 1,
      select: {
        status: true,
        statusDate: true,
      },
    },
  }

  async listOrganizations(
    query: OrganizationDirectoryQueryInput,
  ): Promise<OrganizationListResponse> {
    const where = this.buildOrganizationWhere(query.search)

    const items = await this.db.prisma.organization.findMany({
      where,
      orderBy: [{ orgName: 'asc' }],
      take: query.limit ?? 20,
    })

    return {
      items: items.map((org) => this.mapOrganization(org)),
    }
  }

  async listFacilities(query: FacilityDirectoryQueryInput): Promise<OrganizationListResponse> {
    const where: Prisma.OrganizationWhereInput = {
      parentId: query.parentId ?? undefined,
      ...this.buildOrganizationWhere(query.search),
    }

    const items = await this.db.prisma.organization.findMany({
      where,
      orderBy: [{ orgName: 'asc' }],
      take: query.limit ?? 20,
    })

    return {
      items: items.map((org) => this.mapOrganization(org)),
    }
  }

  async getFacility(facilityId: string): Promise<OrganizationRecord> {
    const facility = await this.db.prisma.organization.findUnique({
      where: { id: facilityId },
    })

    if (!facility) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }

    return this.mapOrganization(facility)
  }

  async createOrganization(input: OrganizationCreateInputDto): Promise<OrganizationRecord> {
    const parent = input.parentId ? await this.findOrganizationOrThrow(input.parentId) : null

    const created = await this.db.prisma.organization.create({
      data: {
        parentId: input.parentId ?? null,
        parentOrgName: parent?.orgName ?? null,
        level: parent ? (parent.level ?? 0) + 1 : 0,
        orgName: input.orgName.trim(),
        orgType: input.orgType ?? null,
        orgSpecialty: input.orgSpecialty ?? null,
        orgAddress: input.orgAddress ?? null,
        orgCity: input.orgCity ?? null,
        orgState: input.orgState ?? null,
        orgZip: input.orgZip ?? null,
      },
    })

    return this.mapOrganization(created)
  }

  async createFacility(input: FacilityCreateInputDto): Promise<OrganizationRecord> {
    return this.createOrganization(input as OrganizationCreateInputDto)
  }

  async getOrganization(organizationId: string): Promise<OrganizationRecord> {
    const organization = await this.findOrganizationOrThrow(organizationId)
    return this.mapOrganization(organization)
  }

  async updateOrganization(
    organizationId: string,
    input: OrganizationUpdateInputDto,
  ): Promise<OrganizationRecord> {
    const existing = await this.findOrganizationOrThrow(organizationId)

    const hasParentField = Object.prototype.hasOwnProperty.call(input, 'parentId')
    const parentId = hasParentField ? input.parentId ?? null : existing.parentId ?? null
    if (parentId === organizationId) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }

    const parent = parentId ? await this.findOrganizationOrThrow(parentId) : null
    const nextLevel = parent
      ? (parent.level ?? 0) + 1
      : parentId === null
        ? 0
        : existing.level ?? null

    const data: Prisma.OrganizationUpdateInput = {}

    if (hasParentField) {
      data.parentId = parentId
      data.parentOrgName = parent?.orgName ?? null
      data.level = nextLevel
    }

    if (typeof input.orgName !== 'undefined') {
      data.orgName = input.orgName.trim()
    }
    if (typeof input.orgType !== 'undefined') {
      data.orgType = input.orgType
    }
    if (typeof input.orgSpecialty !== 'undefined') {
      data.orgSpecialty = input.orgSpecialty
    }
    if (typeof input.orgAddress !== 'undefined') {
      data.orgAddress = input.orgAddress
    }
    if (typeof input.orgCity !== 'undefined') {
      data.orgCity = input.orgCity
    }
    if (typeof input.orgState !== 'undefined') {
      data.orgState = input.orgState
    }
    if (typeof input.orgZip !== 'undefined') {
      data.orgZip = input.orgZip
    }

    const updated = await this.db.prisma.organization.update({
      where: { id: organizationId },
      data,
    })

    return this.mapOrganization(updated)
  }

  async listOrganizationUsers(organizationId: string): Promise<UserListResponseType> {
    await this.findOrganizationOrThrow(organizationId)

    const users = await this.db.prisma.user.findMany({
      where: {
        userIdentities: {
          some: {
            orgId: organizationId,
          },
        },
      },
      orderBy: [{ createdAt: 'desc' }],
      include: {
        userAttribute: {
          select: {
            userType: true,
          },
        },
      },
    })

    return {
      items: users.map((user) => this.mapUserSummary(user)),
    }
  }

  async listOrganizationFavoriteTests(
    organizationId: string,
  ): Promise<OrganizationFavoriteTestListResponseType> {
    const organization = await this.findOrganizationOrThrow(organizationId)
    const ancestry = await this.buildAncestryChain(organization)
    const ancestorIds = ancestry.slice(0, -1).map((org) => org.id)

    const [owned, inherited] = await Promise.all([
      this.db.prisma.organizationFavoriteTest.findMany({
        where: { organizationId },
        orderBy: [{ createdAt: 'desc' }],
        include: this.favoriteInclude,
      }),
      ancestorIds.length
        ? this.db.prisma.organizationFavoriteTest.findMany({
            where: { organizationId: { in: ancestorIds } },
            orderBy: [{ createdAt: 'desc' }],
            include: this.favoriteInclude,
          })
        : Promise.resolve([]),
    ])

    return {
      owned: owned.map((favorite) => this.mapFavorite(favorite)),
      inherited: (inherited as FavoriteEntity[]).map((favorite) => this.mapFavorite(favorite)),
    }
  }

  async addOrganizationFavoriteTest(
    organizationId: string,
    input: OrganizationFavoriteCreateInputDto,
  ): Promise<OrganizationFavoriteTestRecord> {
    const organization = await this.findOrganizationOrThrow(organizationId)

    const existing = await this.db.prisma.organizationFavoriteTest.findFirst({
      where: {
        organizationId,
        testId: input.testId,
      },
      include: this.favoriteInclude,
    })

    if (existing) {
      return this.mapFavorite(existing as FavoriteEntity)
    }

    const created = await this.db.prisma.organizationFavoriteTest.create({
      data: {
        organizationId,
        testId: input.testId,
        parentId: organization.parentId ?? null,
        parentName: organization.parentOrgName ?? null,
        level: organization.level ?? 0,
      },
      include: this.favoriteInclude,
    })

    return this.mapFavorite(created as FavoriteEntity)
  }

  async listOrganizationResults(
    organizationId: string,
  ): Promise<OrganizationResultListResponseType> {
    await this.findOrganizationOrThrow(organizationId)

    const orders = await this.db.prisma.labOrder.findMany({
      where: { organizationId },
      orderBy: [{ orderDate: 'desc' }, { createdAt: 'desc' }],
      take: 50,
      include: this.resultInclude,
    })

    return {
      items: (orders as ResultEntity[]).map((order) => this.mapResult(order)),
    }
  }

  async getOrganizationAncestry(organizationId: string): Promise<OrganizationAncestryResponseType> {
    const organization = await this.findOrganizationOrThrow(organizationId)
    const chain = await this.buildAncestryChain(organization)

    return {
      items: chain.map((item) => ({
        id: item.id,
        orgName: item.orgName ?? null,
        parentId: item.parentId ?? null,
        level: item.level ?? null,
      })),
    }
  }

  async associateProviderWithOrganization(
    organizationId: string,
    providerId: string,
  ): Promise<ProviderSummaryType> {
    const organization = await this.findOrganizationOrThrow(organizationId)
    const provider = await this.db.prisma.provider.findUnique({
      where: { id: providerId },
    })

    if (!provider) {
      throw new BizException(ErrorCodeEnum.ProviderNotFound)
    }

    const existing = await this.db.prisma.providerOrganization.findFirst({
      where: { organizationId, providerId },
    })

    if (!existing) {
      await this.db.prisma.providerOrganization.create({
        data: {
          organizationId,
          providerId,
          providerNpi: provider.npi ?? null,
          name: provider.name ?? null,
          parentOrgName: organization.parentOrgName ?? null,
          orgName: organization.orgName ?? null,
          orgAddress: organization.orgAddress ?? null,
          orgCity: organization.orgCity ?? null,
          orgState: organization.orgState ?? null,
          orgZip: organization.orgZip ?? null,
        },
      })
    }

    return this.mapProviderSummary(provider)
  }

  private buildOrganizationWhere(search?: string | null): Prisma.OrganizationWhereInput {
    if (!search) {
      return {}
    }

    return {
      OR: [
        { orgName: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { parentOrgName: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { orgCity: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { orgState: { contains: search, mode: Prisma.QueryMode.insensitive } },
        { orgZip: { contains: search, mode: Prisma.QueryMode.insensitive } },
      ],
    }
  }

  private async findOrganizationOrThrow(organizationId: string): Promise<OrganizationEntity> {
    const organization = await this.db.prisma.organization.findUnique({
      where: { id: organizationId },
    })

    if (!organization) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }

    return organization
  }

  private async buildAncestryChain(
    organization: OrganizationEntity,
  ): Promise<OrganizationEntity[]> {
    const chain: OrganizationEntity[] = []
    let current: OrganizationEntity | null = organization
    const visited = new Set<string>()

    while (current && !visited.has(current.id)) {
      chain.unshift(current)
      visited.add(current.id)

      if (!current.parentId) {
        break
      }

      const parent = await this.db.prisma.organization.findUnique({
        where: { id: current.parentId },
      })

      if (!parent) {
        break
      }

      current = parent
    }

    return chain
  }

  private mapOrganization(org: OrganizationEntity): OrganizationRecord {
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

  private mapUserSummary(user: UserEntity): UserSummary {
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

  private mapFavorite(favorite: FavoriteEntity): OrganizationFavoriteTestRecord {
    return {
      id: favorite.id,
      ownerOrgId: favorite.organizationId ?? null,
      ownerOrgName: favorite.organization?.orgName ?? null,
      testId: favorite.testId ?? null,
      casandraTestId: favorite.testCatalog?.casandraTestId ?? null,
      testName: favorite.testCatalog?.testName ?? null,
      labName: favorite.testCatalog?.lab?.labName ?? null,
      level: favorite.level ?? null,
      parentName: favorite.parentName ?? null,
      createdAt: favorite.createdAt.toISOString(),
    }
  }

  private mapResult(order: ResultEntity): OrganizationResultRecord {
    const latestStatus = (order.labOrderStatuses as any)?.[0] as any
    const orderedAt = order.orderDate ?? order.createdAt
    const primaryTest = (order as any).labOrderTests?.[0] as any
    const test = primaryTest?.version?.test as any

    return {
      id: order.id,
      orderNumber: order.orderNumber ?? null,
      casandraTestId: test?.casandraTestId ?? null,
      testName: test?.testName ?? null,
      status: latestStatus?.status ?? null,
      orderedAt: orderedAt?.toISOString() ?? null,
      providerName: this.formatName(order.orderingProvider as any),
      patientName: this.formatName(order.patient as any),
    }
  }

  private mapProviderSummary(provider: ProviderEntity): ProviderSummaryType {
    return {
      id: provider.id,
      firstName: provider.firstName ?? null,
      lastName: provider.lastName ?? null,
      name: provider.name ?? null,
      npi: provider.npi ?? null,
      specialty: provider.specialty ?? null,
    }
  }

  private formatAddress(org: OrganizationEntity): string | null {
    const parts = [org.orgAddress, org.orgCity, org.orgState, org.orgZip]
      .map((value) => value?.trim())
      .filter((value): value is string => Boolean(value && value.length))

    if (!parts.length) {
      return null
    }

    return parts.join(', ')
  }

  private formatName(
    entity?: null | {
      firstName?: string | null
      lastName?: string | null
      name?: string | null
    },
  ): string | null {
    if (!entity) {
      return null
    }

    const parts = [entity.firstName, entity.lastName].filter((part): part is string =>
      Boolean(part && part.length),
    )

    if (parts.length) {
      return parts.join(' ')
    }

    return entity.name ?? null
  }
}
