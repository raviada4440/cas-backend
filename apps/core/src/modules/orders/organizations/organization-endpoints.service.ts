import { Injectable } from '@nestjs/common'
import { Prisma } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'

import { OrganizationEndpointDirectoryQueryInput } from './organizations.dto'
import {
  OrganizationEndpointListResponse,
  OrganizationEndpointRecord,
} from '@shared/contracts/organization-endpoint'

type OrganizationEndpointEntity = Prisma.OrganizationEndpointGetPayload<{}>

@Injectable()
export class OrganizationEndpointsService {
  constructor(private readonly db: DatabaseService) {}

  async list(
    query: OrganizationEndpointDirectoryQueryInput,
  ): Promise<OrganizationEndpointListResponse> {
    const where: Prisma.OrganizationEndpointWhereInput = {}

    if (query.search) {
      where.orgName = { contains: query.search, mode: Prisma.QueryMode.insensitive }
    }

    if (query.vendor) {
      where.ehrVendor = { contains: query.vendor, mode: Prisma.QueryMode.insensitive }
    }

    const items = await this.db.prisma.organizationEndpoint.findMany({
      where,
      orderBy: [{ orgName: 'asc' }],
      take: query.limit ?? 20,
    })

    return {
      items: items.map((endpoint) => this.mapEndpoint(endpoint)),
    }
  }

  async detail(endpointId: string): Promise<OrganizationEndpointRecord> {
    const endpoint = await this.db.prisma.organizationEndpoint.findUnique({
      where: { id: endpointId },
    })

    if (!endpoint) {
      throw new BizException(ErrorCodeEnum.OrganizationEndpointNotFound)
    }

    return this.mapEndpoint(endpoint)
  }

  private mapEndpoint(endpoint: OrganizationEndpointEntity): OrganizationEndpointRecord {
    return {
      id: endpoint.id,
      organizationId: endpoint.organizationId ?? null,
      orgName: endpoint.orgName ?? null,
      ehrVendor: endpoint.ehrVendor ?? null,
      fhirVersion: endpoint.fhirVersion ?? null,
      endpoint: endpoint.endpoint ?? null,
      issuer: endpoint.issuer ?? null,
      authorizationEndpoint: null,
      tokenEndpoint: null,
      isActive: endpoint.isActive ?? null,
    }
  }
}
