import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { Prisma, $Enums } from '@db/client'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  CloneConsentTemplateDto,
  ConsentTemplateActiveQueryDto,
  ConsentTemplateListQueryDto,
  ConsentTemplateStatsQueryDto,
  CreateConsentTemplateDto,
  UpdateConsentTemplateDto,
} from './consent-templates.dto'

@Injectable()
export class ConsentTemplatesService {
  constructor(private readonly db: DatabaseService) {}

  async create(dto: CreateConsentTemplateDto) {
    const { effectiveDate, ...data } = dto
    return this.db.prisma.consentTemplate.create({
      data: {
        ...data,
        effectiveDate: effectiveDate ? new Date(effectiveDate) : new Date(),
      },
    })
  }

  async update(id: string, dto: UpdateConsentTemplateDto) {
    const existing = await this.db.prisma.consentTemplate.findUnique({ where: { id } })
    if (!existing) {
      throw new NotFoundException(`Consent template ${id} not found`)
    }

    const { effectiveDate, retiredDate, ...rest } = dto

    return this.db.prisma.consentTemplate.update({
      where: { id },
      data: {
        ...rest,
        effectiveDate: effectiveDate ? new Date(effectiveDate) : undefined,
        retiredDate: retiredDate ? new Date(retiredDate) : undefined,
      },
    })
  }

  async findById(id: string) {
    const template = await this.db.prisma.consentTemplate.findUnique({
      where: { id },
      include: {
        versionConsents: {
          include: {
            version: {
              select: {
                id: true,
                testId: true,
                versionNumber: true,
              },
            },
            configuration: {
              select: {
                id: true,
                configurationName: true,
              },
            },
          },
        },
        labOrderConsents: {
          take: 10,
          orderBy: { collectedAt: 'desc' },
          select: {
            id: true,
            isAccepted: true,
            collectedAt: true,
          },
        },
      },
    })

    if (!template) {
      throw new NotFoundException(`Consent template ${id} not found`)
    }

    return template
  }

  async list(query: ConsentTemplateListQueryDto) {
    const where: Prisma.ConsentTemplateWhereInput = {}

    if (query.organizationId) {
      where.organizationId = query.organizationId
    }
    if (query.consentType) {
      where.consentType = query.consentType as $Enums.ConsentType
    }
    if (query.status) {
      where.status = query.status as $Enums.ConsentTemplateStatus
    }
    if (typeof query.isGlobal === 'boolean') {
      where.isGlobal = query.isGlobal
    }

    const take = query.limit ?? 50
    const skip = query.offset ?? 0

    return this.db.prisma.consentTemplate.findMany({
      where,
      include: {
        versionConsents: {
          select: {
            id: true,
            isRequired: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take,
      skip,
    })
  }

  async listActive(query: ConsentTemplateActiveQueryDto) {
    const where: Prisma.ConsentTemplateWhereInput = {
      status: $Enums.ConsentTemplateStatus.ACTIVE,
    }

    if (query.organizationId) {
      where.OR = [{ organizationId: query.organizationId }, { isGlobal: true }]
    } else {
      where.isGlobal = true
    }

    if (query.consentType) {
      where.consentType = query.consentType as $Enums.ConsentType
    }

    return this.db.prisma.consentTemplate.findMany({
      where,
      orderBy: { name: 'asc' },
    })
  }

  async listForTest(testId: string) {
    return this.db.prisma.consentTemplate.findMany({
      where: {
        versionConsents: {
          some: {
            version: {
              testId,
            },
          },
        },
      },
      include: {
        versionConsents: {
          where: {
            version: {
              testId,
            },
          },
          select: {
            id: true,
            isRequired: true,
            displayOrder: true,
            customTitle: true,
            customContent: true,
            versionId: true,
            configurationId: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    })
  }

  async listForConfiguration(configurationId: string) {
    return this.db.prisma.consentTemplate.findMany({
      where: {
        versionConsents: {
          some: {
            configurationId,
          },
        },
      },
      include: {
        versionConsents: {
          where: { configurationId },
          select: {
            id: true,
            isRequired: true,
            displayOrder: true,
            customTitle: true,
            customContent: true,
            versionId: true,
            configurationId: true,
          },
        },
      },
      orderBy: { name: 'asc' },
    })
  }

  async updateStatus(id: string, status: $Enums.ConsentTemplateStatus) {
    const template = await this.db.prisma.consentTemplate.findUnique({ where: { id } })
    if (!template) {
      throw new NotFoundException(`Consent template ${id} not found`)
    }

    return this.db.prisma.consentTemplate.update({
      where: { id },
      data: {
        status,
        retiredDate: status === $Enums.ConsentTemplateStatus.RETIRED ? new Date() : null,
      },
    })
  }

  async retire(id: string) {
    const template = await this.db.prisma.consentTemplate.findUnique({ where: { id } })
    if (!template) {
      throw new NotFoundException(`Consent template ${id} not found`)
    }

    return this.db.prisma.consentTemplate.update({
      where: { id },
      data: {
        status: $Enums.ConsentTemplateStatus.RETIRED,
        retiredDate: new Date(),
      },
    })
  }

  async stats(query: ConsentTemplateStatsQueryDto) {
    const where: Prisma.ConsentTemplateWhereInput = {}

    if (query.organizationId) {
      where.organizationId = query.organizationId
    }

    const [totalTemplates, activeTemplates, templatesByType, templatesByStatus] = await Promise.all(
      [
        this.db.prisma.consentTemplate.count({ where }),
        this.db.prisma.consentTemplate.count({
          where: { ...where, status: $Enums.ConsentTemplateStatus.ACTIVE },
        }),
        this.db.prisma.consentTemplate.groupBy({
          by: ['consentType'],
          where,
          _count: { id: true },
        }),
        this.db.prisma.consentTemplate.groupBy({
          by: ['status'],
          where,
          _count: { id: true },
        }),
      ],
    )

    return {
      totalTemplates,
      activeTemplates,
      inactiveTemplates: totalTemplates - activeTemplates,
      typeBreakdown: templatesByType,
      statusBreakdown: templatesByStatus,
    }
  }

  async remove(id: string) {
    const template = await this.db.prisma.consentTemplate.findUnique({ where: { id } })
    if (!template) {
      throw new NotFoundException(`Consent template ${id} not found`)
    }

    const usageCount = await this.db.prisma.testCatalogVersionConsent.count({
      where: { consentTemplateId: id },
    })

    if (usageCount > 0) {
      throw new ConflictException('Cannot delete consent template that is currently in use')
    }

    await this.db.prisma.consentTemplate.delete({ where: { id } })
    return { success: true }
  }

  async clone(id: string, dto: CloneConsentTemplateDto) {
    const originalTemplate = await this.db.prisma.consentTemplate.findUnique({ where: { id } })

    if (!originalTemplate) {
      throw new NotFoundException(`Consent template ${id} not found`)
    }

    return this.db.prisma.consentTemplate.create({
      data: {
        name: dto.newName,
        description: originalTemplate.description,
        consentType: originalTemplate.consentType,
        isRequired: originalTemplate.isRequired,
        title: originalTemplate.title,
        content: originalTemplate.content,
        legalText: originalTemplate.legalText,
        organizationId: dto.organizationId ?? originalTemplate.organizationId ?? undefined,
        isGlobal: originalTemplate.isGlobal,
        status: $Enums.ConsentTemplateStatus.DRAFT,
        version: 1,
      },
    })
  }
}
