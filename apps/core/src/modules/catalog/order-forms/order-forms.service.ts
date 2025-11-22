import { Injectable } from '@nestjs/common'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { $Enums } from '@db/client'

import {
  AssignOrderFormResponse,
  AssignOrderFormsInput,
  CreateOrderFormSectionInput,
  CreateOrderFormTemplateInput,
  OrderFormAssignmentItem,
  OrderFormSectionListResponse,
  OrderFormSectionSummary,
  OrderFormTemplateListResponse,
  OrderFormTemplateSummary,
  UpdateOrderFormSectionInput,
  UpdateOrderFormTemplateInput,
} from './order-forms.dto'

@Injectable()
export class OrderFormsService {
  constructor(private readonly db: DatabaseService) {}

  private get prisma() {
    return this.db.prisma as any
  }

  async listSections(): Promise<OrderFormSectionListResponse> {
    const sections = await this.prisma.orderFormSection.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'asc' }],
    })

    return {
      items: sections.map((section) => this.mapSection(section)),
    }
  }

  async createSection(input: CreateOrderFormSectionInput): Promise<OrderFormSectionSummary> {
    const section = await this.prisma.orderFormSection.create({
      data: {
        name: input.name,
        description: input.description ?? null,
        sortOrder: input.sortOrder ?? 0,
        isActive: input.isActive ?? true,
        organizationId: input.organizationId ?? null,
      },
    })

    return this.mapSection(section)
  }

  async updateSection(
    sectionId: string,
    input: UpdateOrderFormSectionInput,
  ): Promise<OrderFormSectionSummary> {
    const section = await this.prisma.orderFormSection
      .update({
        where: { id: sectionId },
        data: {
          name: input.name ?? undefined,
          description: input.description ?? undefined,
          sortOrder: input.sortOrder ?? undefined,
          isActive: input.isActive ?? undefined,
        },
      })
      .catch(() => {
        throw new BizException(ErrorCodeEnum.OrderFormSectionNotFound)
      })

    return this.mapSection(section)
  }

  async listTemplates(filter: {
    sectionId?: string
    status?: string
  }): Promise<OrderFormTemplateListResponse> {
    const templates = await this.prisma.orderFormTemplate.findMany({
      where: {
        ...(filter.sectionId ? { orderFormSectionId: filter.sectionId } : {}),
        ...(filter.status ? { status: filter.status as $Enums.OrderFormTemplateStatus } : {}),
      },
      include: {
        section: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: [{ status: 'asc' }, { name: 'asc' }],
    })

    return {
      items: templates.map((template) => this.mapTemplate(template)),
    }
  }

  async createTemplate(input: CreateOrderFormTemplateInput) {
    await this.ensureSectionExists(input.orderFormSectionId)

    const template = await this.prisma.orderFormTemplate.create({
      data: {
        orderFormSectionId: input.orderFormSectionId,
        name: input.name,
        description: input.description ?? null,
        status: (input.status ?? $Enums.OrderFormTemplateStatus.DRAFT) as $Enums.OrderFormTemplateStatus,
        formSchema: input.formSchema ?? null,
        layoutSchema: input.layoutSchema ?? null,
        organizationId: input.organizationId ?? null,
        isGlobal: input.isGlobal ?? false,
      },
      include: {
        section: {
          select: { id: true, name: true },
        },
      },
    })

    return this.mapTemplate(template)
  }

  async getTemplate(templateId: string) {
    const template = await this.prisma.orderFormTemplate
      .findUnique({
        where: { id: templateId },
        include: {
          section: {
            select: { id: true, name: true },
          },
        },
      })
      .catch(() => null)

    if (!template) {
      throw new BizException(ErrorCodeEnum.OrderFormTemplateNotFound)
    }

    return this.mapTemplate(template)
  }

  async updateTemplate(templateId: string, input: UpdateOrderFormTemplateInput) {
    const template = await this.prisma.orderFormTemplate
      .update({
        where: { id: templateId },
        data: {
          name: input.name ?? undefined,
          description: input.description ?? undefined,
          status: input.status as $Enums.OrderFormTemplateStatus | undefined,
          effectiveDate: input.effectiveDate ? new Date(input.effectiveDate) : undefined,
          retiredDate: input.retiredDate ? new Date(input.retiredDate) : undefined,
          formSchema: input.formSchema ?? undefined,
          layoutSchema: input.layoutSchema ?? undefined,
        },
        include: {
          section: {
            select: { id: true, name: true },
          },
        },
      })
      .catch(() => {
        throw new BizException(ErrorCodeEnum.OrderFormTemplateNotFound)
      })

    return this.mapTemplate(template)
  }

  async getAssignments(
    testId: string,
    versionId: string,
    configurationId?: string,
  ): Promise<AssignOrderFormResponse> {
    await this.ensureVersionMatchesTest(testId, versionId)
    const assignments = await this.prisma.testCatalogVersionOrderForm.findMany({
      where: {
        versionId,
        configurationId: configurationId ?? null,
      },
      include: {
        template: {
          include: {
            section: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: { displayOrder: 'asc' },
    })

    return {
      items: assignments.map((item) => this.mapAssignment(item)),
    }
  }

  async assign(testId: string, input: AssignOrderFormsInput): Promise<AssignOrderFormResponse> {
    await this.ensureVersionMatchesTest(testId, input.versionId)

    await this.prisma.$transaction(async (tx: any) => {
      await tx.testCatalogVersionOrderForm.deleteMany({
        where: {
          versionId: input.versionId,
          configurationId: input.configurationId ?? null,
        },
      })

      if (input.assignments.length === 0) {
        return
      }

      await tx.testCatalogVersionOrderForm.createMany({
        data: input.assignments.map((assignment, index) => ({
          versionId: input.versionId,
          configurationId: input.configurationId ?? null,
          orderFormTemplateId: assignment.orderFormTemplateId,
          displayOrder: assignment.displayOrder ?? index,
          customTitle: assignment.customTitle ?? null,
          isRequired: assignment.isRequired ?? true,
          isVisible: assignment.isVisible ?? true,
        })),
      })
    })

    return this.getAssignments(testId, input.versionId, input.configurationId ?? undefined)
  }

  private async ensureSectionExists(sectionId: string) {
    await this.prisma.orderFormSection
      .findUniqueOrThrow({
        where: { id: sectionId },
        select: { id: true },
      })
      .catch(() => {
        throw new BizException(ErrorCodeEnum.OrderFormSectionNotFound)
      })
  }

  private async ensureVersionMatchesTest(testId: string, versionId: string) {
    const version = await this.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { testId: true },
    })
    if (!version || version.testId !== testId) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }
  }

  private mapSection(section: any) {
    return {
      id: section.id,
      name: section.name,
      description: section.description ?? null,
      sortOrder: section.sortOrder,
      isActive: section.isActive,
      organizationId: section.organizationId ?? null,
      createdBy: section.createdBy ?? null,
      createdAt: section.createdAt.toISOString(),
      updatedAt: section.updatedAt.toISOString(),
    } as OrderFormSectionSummary
  }

  private mapTemplate(template: any): OrderFormTemplateSummary {
    return {
      id: template.id,
      orderFormSectionId: template.orderFormSectionId,
      name: template.name,
      description: template.description ?? null,
      status: template.status,
      version: template.version,
      effectiveDate: template.effectiveDate?.toISOString() ?? null,
      retiredDate: template.retiredDate?.toISOString() ?? null,
      formSchema: template.formSchema ?? null,
      layoutSchema: template.layoutSchema ?? null,
      organizationId: template.organizationId ?? null,
      isGlobal: template.isGlobal,
      createdBy: template.createdBy ?? null,
      createdAt: template.createdAt.toISOString(),
      updatedAt: template.updatedAt.toISOString(),
      section: template.section ?? undefined,
    }
  }

  private mapAssignment(assignment: any): OrderFormAssignmentItem {
    return {
      id: assignment.id,
      versionId: assignment.versionId,
      configurationId: assignment.configurationId ?? null,
      orderFormTemplateId: assignment.orderFormTemplateId,
      displayOrder: assignment.displayOrder,
      customTitle: assignment.customTitle ?? null,
      isRequired: assignment.isRequired,
      isVisible: assignment.isVisible,
      createdBy: assignment.createdBy ?? null,
      createdAt: assignment.createdAt.toISOString(),
      updatedAt: assignment.updatedAt.toISOString(),
      template: assignment.template ? this.mapTemplate(assignment.template) : undefined,
    }
  }
}
