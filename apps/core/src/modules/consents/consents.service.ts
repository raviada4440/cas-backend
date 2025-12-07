import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  AssignVersionConsentDto,
  ReorderVersionConsentsDto,
  UpdateVersionConsentDto,
} from './consents.dto'

@Injectable()
export class ConsentsService {
  constructor(private readonly db: DatabaseService) {}

  async listVersionConsents(versionId: string) {
    await this.ensureVersionExists(versionId)

    return this.db.prisma.testCatalogVersionConsent.findMany({
      where: { versionId },
      orderBy: { displayOrder: 'asc' },
      include: {
        consentTemplate: true,
        configuration: {
          select: {
            id: true,
            configurationName: true,
          },
        },
      },
    })
  }

  async assignVersionConsent(versionId: string, dto: AssignVersionConsentDto) {
    const template = await this.db.prisma.consentTemplate.findUnique({
      where: { id: dto.consentTemplateId },
      select: { id: true, status: true },
    })

    if (!template) {
      throw new NotFoundException(`Consent template ${dto.consentTemplateId} not found`)
    }

    const version = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { id: true },
    })

    if (!version) {
      throw new NotFoundException(`Version ${versionId} not found`)
    }

    const existingCount = await this.db.prisma.testCatalogVersionConsent.count({
      where: { versionId },
    })

    const consent = await this.db.prisma.testCatalogVersionConsent.create({
      data: {
        versionId,
        consentTemplateId: dto.consentTemplateId,
        configurationId: dto.configurationId ?? null,
        isRequired: dto.isRequired ?? true,
        customTitle: dto.customTitle ?? null,
        customContent: dto.customContent ?? null,
        conditionalLogic: dto.conditionalLogic ?? null,
        dependsOnConsent: dto.dependsOnConsent ?? null,
        displayOrder: existingCount,
      },
      include: {
        consentTemplate: true,
        configuration: {
          select: {
            id: true,
            configurationName: true,
          },
        },
      },
    })

    return consent
  }

  async updateVersionConsent(versionConsentId: string, dto: UpdateVersionConsentDto) {
    const existing = await this.db.prisma.testCatalogVersionConsent.findUnique({
      where: { id: versionConsentId },
      select: { id: true },
    })

    if (!existing) {
      throw new NotFoundException(`Version consent ${versionConsentId} not found`)
    }

    const consent = await this.db.prisma.testCatalogVersionConsent.update({
      where: { id: versionConsentId },
      data: {
        isRequired: dto.isRequired ?? undefined,
        customTitle: dto.customTitle ?? undefined,
        customContent: dto.customContent ?? undefined,
        conditionalLogic: dto.conditionalLogic ?? undefined,
        dependsOnConsent: dto.dependsOnConsent ?? undefined,
      },
      include: {
        consentTemplate: true,
        configuration: {
          select: {
            id: true,
            configurationName: true,
          },
        },
      },
    })

    return consent
  }

  async removeVersionConsent(versionConsentId: string) {
    const existing = await this.db.prisma.testCatalogVersionConsent.findUnique({
      where: { id: versionConsentId },
      select: { id: true },
    })

    if (!existing) {
      throw new NotFoundException(`Version consent ${versionConsentId} not found`)
    }

    await this.db.prisma.testCatalogVersionConsent.delete({
      where: { id: versionConsentId },
    })

    return { success: true }
  }

  async reorderVersionConsents(versionId: string, dto: ReorderVersionConsentsDto) {
    const assignments = await this.db.prisma.testCatalogVersionConsent.findMany({
      where: { versionId },
      select: { id: true },
      orderBy: { displayOrder: 'asc' },
    })

    const currentIds = assignments.map((assignment) => assignment.id)
    const providedIds = dto.consentIdsInOrder

    if (currentIds.length !== providedIds.length) {
      throw new BadRequestException('consentIdsInOrder must include every assignment exactly once')
    }

    const unmatched = new Set(currentIds)
    providedIds.forEach((id) => unmatched.delete(id))

    if (unmatched.size !== 0) {
      throw new BadRequestException('consentIdsInOrder contains invalid assignments')
    }

    await this.db.prisma.$transaction(
      providedIds.map((id, index) =>
        this.db.prisma.testCatalogVersionConsent.update({
          where: { id },
          data: { displayOrder: index },
        }),
      ),
    )

    return this.listVersionConsents(versionId)
  }

  private async ensureVersionExists(versionId: string) {
    const version = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { id: true },
    })

    if (!version) {
      throw new NotFoundException(`Version ${versionId} not found`)
    }
  }
}
