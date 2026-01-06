import { Injectable } from '@nestjs/common'
import { Prisma, $Enums } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'

import {
  AttachmentCategory,
  LabOrder,
  LabOrderSummary,
  PagedLabOrders,
} from '@shared/contracts/laborders'
import { FamilyStructureType, VariantDimensionType } from '@shared/contracts/catalog'
import { LabOrderFormSnapshot, ResolvedOrderFormSection } from '@shared/contracts/order-forms'
import { OrderableTest } from '@shared/contracts/orders'

import { CreateLabOrderInput, LabOrderSearchQuery, UpdateLabOrderInput } from './lab-orders.dto'
import { OrderableQueryInput } from './orderable-tests.dto'

type TenantScope = {
  tenantIds: string[]
  isSuperAdmin: boolean
}

type LabOrderBillingContract = NonNullable<LabOrder['labOrderBilling']>[number]
type ClinicalAttachmentContract = NonNullable<LabOrder['clinicalAttachments']>[number]

export type CreateLabOrderExtras = {
  variantDimension?: VariantDimensionType
  variantValue?: string
  orderDate: Date
  versionId?: string
  derivedLabId?: string | null
}

const labOrderSummaryArgs = Prisma.validator<Prisma.LabOrderDefaultArgs>()({
  include: {
    patient: {
      select: {
        firstName: true,
        lastName: true,
      },
    },
    orderingProvider: {
      select: {
        name: true,
        firstName: true,
        lastName: true,
      },
    },
    labOrderStatuses: {
      orderBy: { statusDate: 'desc' },
      take: 1,
      select: {
        id: true,
        status: true,
        statusDate: true,
      },
    },
    labOrderBilling: {
      select: {
        id: true,
        copayAmount: true,
      },
    },
    labOrderTests: {
      include: {
        version: {
          select: {
            id: true,
            versionNumber: true,
            status: true,
            test: {
              select: {
                id: true,
                casandraTestId: true,
                labId: true,
                testName: true,
                lab: {
                  select: {
                    id: true,
                    labName: true,
                  },
                },
              },
            },
          },
        },
        configuration: {
          select: {
            id: true,
            configurationName: true,
            type: true,
            dimension: true,
            dimensionValue: true,
          },
        },
      },
    } as any,
    labOrderIcds: {
      select: {
        id: true,
      },
    },
  },
})

const labOrderDetailArgs = Prisma.validator<Prisma.LabOrderDefaultArgs>()({
  include: {
    patient: {
      select: {
        id: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        gender: true,
        email: true,
        mobile: true,
      },
    },
    orderingProvider: {
      select: {
        id: true,
        firstName: true,
        lastName: true,
        npi: true,
      },
    },
    treatingProvider: {
      select: {
        id: true,
        firstName: true,
        lastName: true,
        npi: true,
      },
    },
    organization: {
      select: {
        id: true,
        orgName: true,
        parentOrgName: true,
        orgAddress: true,
        orgCity: true,
        orgState: true,
        orgZip: true,
      },
    },
    labOrderStatuses: {
      orderBy: { statusDate: 'desc' },
      select: {
        id: true,
        status: true,
        statusDate: true,
      },
    },
    labOrderTests: {
      include: {
        version: {
          select: {
            id: true,
            versionNumber: true,
            status: true,
            turnAroundTime: true,
            orderLoincs: {
              select: {
                loincCode: true,
              },
            },
            specimens: {
              select: {
                id: true,
                displayName: true,
                isPrimary: true,
                specimenType: true,
                specimenRequirements: true,
                volume: true,
                minimumVolume: true,
                container: true,
                specialInstructions: true,
                alternateContainers: true,
                preferredVolume: true,
              },
            },
            test: {
              select: {
                id: true,
                labId: true,
                casandraTestId: true,
                testName: true,
                lab: {
                  select: {
                    id: true,
                    labName: true,
                    labCode: true,
                  },
                },
              },
            },
          },
        },
        configuration: {
          select: {
            id: true,
            configurationName: true,
            type: true,
            dimension: true,
            dimensionValue: true,
          },
        },
      },
    } as any,
    labOrderIcds: {
      select: {
        id: true,
        icd: {
          select: {
            id: true,
            code: true,
            shortDescription: true,
            alias1: true,
          },
        },
      },
    },
    labOrderSpecimens: {
      select: {
        id: true,
        specimenType: true,
        collectedDate: true,
        specimenCount: true,
        bodySite: true,
      },
    },
    labOrderBilling: {
      select: {
        id: true,
        billingType: true,
        copayAmount: true,
        deductibleAmount: true,
        insuranceProvider: true,
        policyNumber: true,
        planName: true,
        groupNumber: true,
        benefitsId: true,
        insuredName: true,
        relationToPatient: true,
        insuredDob: true,
        insuredPhone: true,
        insurerState: true,
        referralAuthNumber: true,
      },
    },
    labOrderAttachments: {
      select: {
        id: true,
        labOrderId: true,
        attachmentId: true,
        attachment: {
          select: {
            id: true,
            fileName: true,
            createdAt: true,
            url: true,
            attachmentUrl: true,
          },
        },
      },
    },
    orderForms: {
      select: {
        id: true,
        versionOrderFormId: true,
        orderFormTemplateId: true,
        sectionName: true,
        templateName: true,
        displayOrder: true,
        formSchema: true,
        layoutSchema: true,
        isCompleted: true,
        completedAt: true,
        responses: true,
        createdAt: true,
        updatedAt: true,
      },
    },
  },
})

type LabOrderSummaryPayload = Prisma.LabOrderGetPayload<typeof labOrderSummaryArgs>
type LabOrderDetailPayload = Prisma.LabOrderGetPayload<typeof labOrderDetailArgs>

@Injectable()
export class LabOrdersService {
  constructor(private readonly db: DatabaseService) {}

  async list(query: LabOrderSearchQuery, scope: TenantScope): Promise<PagedLabOrders> {
    const take = Math.min(query.limit ?? 20, 50)
    const baseWhere = this.buildSearchWhere(query)
    const where = this.applyScopeToLabOrderWhere(baseWhere, scope)

    const [orders, total] = await this.db.prisma.$transaction([
      this.db.prisma.labOrder.findMany({
        where,
        orderBy: [{ orderDate: 'desc' }, { createdAt: 'desc' }],
        take: take + 1,
        ...(query.cursor ? { skip: 1, cursor: { id: query.cursor } } : {}),
        include: labOrderSummaryArgs.include,
      }),
      this.db.prisma.labOrder.count({ where }),
    ])

    const items = orders.slice(0, take).map((order) => this.mapSummary(order))
    const nextCursor = orders.length > take ? orders[take].id : null

    return {
      items,
      nextCursor,
      total,
    }
  }

  async detail(labOrderId: string, scope: TenantScope): Promise<LabOrder> {
    await this.ensureLabOrderAccess(labOrderId, scope)

    const labOrder = await this.db.prisma.labOrder
      .findUnique({
        where: { id: labOrderId },
        include: labOrderDetailArgs.include,
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.LabOrderNotFound)))

    if (!labOrder) {
      throw new BizException(ErrorCodeEnum.LabOrderNotFound)
    }

    return this.mapDetail(labOrder)
  }

  async create(
    input: CreateLabOrderInput,
    scope: TenantScope,
    extras: CreateLabOrderExtras,
  ): Promise<LabOrder> {
    // Default path: treat as final (non-draft). Drafts should call createDraftLabOrder explicitly.
    return this.createFinalLabOrder(input, scope, extras)
  }

  async createDraftLabOrder(
    input: CreateLabOrderInput,
    scope: TenantScope,
    extras: CreateLabOrderExtras,
  ): Promise<LabOrder> {
    const { variantDimension, variantValue, orderDate, versionId, derivedLabId } = extras
    const status = input.status ?? 'DRAFT'

    const normalizedScope = this.normalizeScope(scope)
    let organizationId = input.organizationId ?? null

    if (
      !organizationId &&
      !normalizedScope.isSuperAdmin &&
      normalizedScope.tenantIds.length === 1
    ) {
      organizationId = normalizedScope.tenantIds[0]
    }

    if (organizationId) {
      await this.ensureOrganizationAccess(organizationId, scope)
    } else if (!normalizedScope.isSuperAdmin && normalizedScope.tenantIds.length === 0) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }

    const hasTest = Boolean(input.testId)
    const canResolveVariant = hasTest && variantDimension && variantValue
    const variantContext = canResolveVariant
      ? await this.resolveVariantContext(input.testId!, {
          dimension: variantDimension,
          dimensionValue: variantValue,
          orderDate,
          versionId,
        })
      : null

    const created = await this.db.prisma.$transaction(async (tx) => {
      const labOrder = await tx.labOrder.create({
        data: {
          patientId: input.patientId ?? null,
          orderingProviderId: input.orderingProviderId ?? null,
          treatingProviderId: input.treatingProviderId ?? null,
          organizationId,
          labId: derivedLabId ?? null,
          orderDate,
          orderNotes: input.orderNotes ?? null,
        },
      })

      if (variantContext) {
        await tx.labOrderTest.create({
          data: {
            labOrderId: labOrder.id,
            testVersionId: variantContext.version.id,
            testConfigurationId: variantContext.configuration.id,
          },
        })
      }

      if (input.icdIds?.length) {
        await tx.labOrderIcd.createMany({
          data: input.icdIds.map((icdId) => ({
            labOrderId: labOrder.id,
            icdId,
          })),
        })
      }

      if (input.specimens?.length) {
        await tx.labOrderSpecimen.createMany({
          data: input.specimens.map((specimen) => ({
            labOrderId: labOrder.id,
            specimenType: specimen.specimenType,
            collectedDate: this.toDate(specimen.collectedDate),
            specimenCount: specimen.specimenCount ?? null,
            bodySite: specimen.bodySite ?? null,
          })),
        })
      }

      if (variantContext && variantContext.orderForms.length) {
        const formInputs = variantContext.orderForms
          .filter((form) => form.sectionName && form.templateId)
          .map((form, index) => ({
            labOrderId: labOrder.id,
            versionOrderFormId: form.assignmentId ?? null,
            orderFormTemplateId: form.templateId,
            sectionName: form.sectionName,
            templateName: form.templateName ?? null,
            displayOrder: form.displayOrder ?? index,
            formSchema: this.toPrismaJson(form.formSchema),
            layoutSchema: this.toPrismaJson(form.layoutSchema),
            responses: Prisma.JsonNull,
          }))

        if (formInputs.length) {
          await tx.labOrderForm.createMany({ data: formInputs })
        }
      }

      await tx.labOrderStatus.create({
        data: {
          labOrderId: labOrder.id,
          status,
          statusDate: new Date(),
        },
      })

      return labOrder
    })

    return this.detail(created.id, scope)
  }

  async createFinalLabOrder(
    input: CreateLabOrderInput,
    scope: TenantScope,
    extras: CreateLabOrderExtras,
  ): Promise<LabOrder> {
    const { variantDimension, variantValue, orderDate, versionId, derivedLabId } = extras
    const status = input.status ?? 'DRAFT'

    const hasTest = Boolean(input.testId)
    const canResolveVariant = hasTest && variantDimension && variantValue
    const variantContext = canResolveVariant
      ? await this.resolveVariantContext(input.testId!, {
          dimension: variantDimension,
          dimensionValue: variantValue,
          orderDate,
          versionId,
        })
      : null

    const normalizedScope = this.normalizeScope(scope)
    let organizationId = input.organizationId ?? null

    if (
      !organizationId &&
      !normalizedScope.isSuperAdmin &&
      normalizedScope.tenantIds.length === 1
    ) {
      organizationId = normalizedScope.tenantIds[0]
    }

    if (organizationId) {
      await this.ensureOrganizationAccess(organizationId, scope)
    } else if (!normalizedScope.isSuperAdmin && normalizedScope.tenantIds.length === 0) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }

    const created = await this.db.prisma.$transaction(async (tx) => {
      const labOrder = await tx.labOrder.create({
        data: {
          patientId: input.patientId ?? null,
          orderingProviderId: input.orderingProviderId ?? null,
          treatingProviderId: input.treatingProviderId ?? null,
          organizationId,
          labId: derivedLabId ?? null,
          orderDate,
          orderNotes: input.orderNotes ?? null,
        },
      })

      if (variantContext) {
        await tx.labOrderTest.create({
          data: {
            labOrderId: labOrder.id,
            testVersionId: variantContext.version.id,
            testConfigurationId: variantContext.configuration.id,
          },
        })
      }

      if (input.icdIds?.length) {
        await tx.labOrderIcd.createMany({
          data: input.icdIds.map((icdId) => ({
            labOrderId: labOrder.id,
            icdId,
          })),
        })
      }

      if (input.specimens?.length) {
        await tx.labOrderSpecimen.createMany({
          data: input.specimens.map((specimen) => ({
            labOrderId: labOrder.id,
            specimenType: specimen.specimenType,
            collectedDate: this.toDate(specimen.collectedDate),
            specimenCount: specimen.specimenCount ?? null,
            bodySite: specimen.bodySite ?? null,
          })),
        })
      }

      if (variantContext && variantContext.orderForms.length) {
        const formInputs = variantContext.orderForms
          .filter((form) => form.sectionName && form.templateId)
          .map((form, index) => ({
            labOrderId: labOrder.id,
            versionOrderFormId: form.assignmentId ?? null,
            orderFormTemplateId: form.templateId,
            sectionName: form.sectionName,
            templateName: form.templateName ?? null,
            displayOrder: form.displayOrder ?? index,
            formSchema: this.toPrismaJson(form.formSchema),
            layoutSchema: this.toPrismaJson(form.layoutSchema),
            responses: Prisma.JsonNull,
          }))

        if (formInputs.length) {
          await tx.labOrderForm.createMany({ data: formInputs })
        }
      }

      await tx.labOrderStatus.create({
        data: {
          labOrderId: labOrder.id,
          status,
          statusDate: new Date(),
        },
      })

      return labOrder
    })

    return this.detail(created.id, scope)
  }

  async update(
    labOrderId: string,
    input: UpdateLabOrderInput,
    scope: TenantScope,
  ): Promise<LabOrder> {
    await this.ensureLabOrderAccess(labOrderId, scope)

    await this.db.prisma.$transaction(async (tx) => {
      const updateData: Prisma.LabOrderUpdateInput = {
        updatedAt: new Date(),
      }
      if (input.orderNotes !== undefined) {
        updateData.orderNotes = input.orderNotes ?? null
      }
      await tx.labOrder.update({
        where: { id: labOrderId },
        data: updateData,
      })

      if (input.testIds !== undefined) {
        const uniqueTests = Array.from(
          new Set((input.testIds ?? []).filter((value): value is string => Boolean(value?.trim()))),
        )

        if (uniqueTests.length === 0) {
          await tx.labOrderTest.deleteMany({ where: { labOrderId } })
        } else {
          await tx.labOrderTest.deleteMany({
            where: {
              labOrderId,
              testId: { notIn: uniqueTests },
            },
          })
          const existing = await tx.labOrderTest.findMany({
            where: { labOrderId },
            select: { testId: true },
          })
          const existingIds = new Set(
            existing.map((item) => item.testId).filter(Boolean) as string[],
          )
          const toCreate = uniqueTests.filter((id) => !existingIds.has(id))
          if (toCreate.length) {
            await tx.labOrderTest.createMany({
              data: toCreate.map((testId) => ({ labOrderId, testId })),
            })
          }
        }
      }

      if (input.icdIds !== undefined) {
        const uniqueIcds = Array.from(
          new Set((input.icdIds ?? []).filter((value): value is string => Boolean(value?.trim()))),
        )

        if (uniqueIcds.length === 0) {
          await tx.labOrderIcd.deleteMany({ where: { labOrderId } })
        } else {
          await tx.labOrderIcd.deleteMany({
            where: {
              labOrderId,
              icdId: { notIn: uniqueIcds },
            },
          })
          const existing = await tx.labOrderIcd.findMany({
            where: { labOrderId },
            select: { icdId: true },
          })
          const existingIds = new Set(
            existing.map((item) => item.icdId).filter(Boolean) as string[],
          )
          const toCreate = uniqueIcds.filter((id) => !existingIds.has(id))
          if (toCreate.length) {
            await tx.labOrderIcd.createMany({
              data: toCreate.map((icdId) => ({ labOrderId, icdId })),
            })
          }
        }
      }

      if (input.specimens !== undefined) {
        if (input.specimens.length === 0) {
          await tx.labOrderSpecimen.deleteMany({ where: { labOrderId } })
        } else {
          const updatePayload = input.specimens.filter((s) => !s?._delete && s?.id)
          const createPayload = input.specimens.filter((s) => !s?._delete && !s?.id)
          const deleteIds = input.specimens.filter((s) => s?._delete && s?.id).map((s) => s!.id!)

          if (deleteIds.length) {
            await tx.labOrderSpecimen.deleteMany({
              where: { labOrderId, id: { in: deleteIds } },
            })
          }

          for (const specimen of updatePayload) {
            await tx.labOrderSpecimen.update({
              where: { id: specimen!.id! },
              data: {
                specimenType: specimen!.specimenType ?? null,
                collectedDate: this.toDate(specimen!.collectedDate),
                specimenCount: specimen!.specimenCount ?? null,
                bodySite: specimen!.bodySite ?? null,
              },
            })
          }

          const toCreate = createPayload
            .filter((specimen) => specimen?.specimenType)
            .map((specimen) => ({
              labOrderId,
              specimenType: specimen!.specimenType!,
              collectedDate: this.toDate(specimen!.collectedDate),
              specimenCount: specimen!.specimenCount ?? null,
              bodySite: specimen!.bodySite ?? null,
            }))

          if (toCreate.length) {
            await tx.labOrderSpecimen.createMany({
              data: toCreate,
            })
          }
        }
      }
    })

    return this.detail(labOrderId, scope)
  }

  async updateStatus(labOrderId: string, status: string, scope: TenantScope) {
    await this.ensureLabOrderAccess(labOrderId, scope)

    await this.db.prisma.labOrderStatus.create({
      data: {
        labOrderId,
        status,
        statusDate: new Date(),
      },
    })

    return this.detail(labOrderId, scope)
  }

  async delete(labOrderId: string, scope: TenantScope) {
    await this.ensureLabOrderAccess(labOrderId, scope)

    await this.db.prisma.$transaction(async (tx) => {
      await tx.labOrderAttachment.deleteMany({ where: { labOrderId } })
      await tx.labOrderBilling.deleteMany({ where: { labOrderId } })
      await tx.labOrderIcd.deleteMany({ where: { labOrderId } })
      await tx.labOrderSpecimen.deleteMany({ where: { labOrderId } })
      await tx.labOrderStatus.deleteMany({ where: { labOrderId } })
      await tx.labOrderTest.deleteMany({ where: { labOrderId } })
      await tx.labOrderSponsoredTestConsent.deleteMany({ where: { labOrderId } })
      await tx.labOrderConsent.deleteMany({ where: { labOrderId } })
      await tx.labOrderForm.deleteMany({ where: { labOrderId } })
      await tx.labOrder.delete({ where: { id: labOrderId } })
    })

    return { success: true }
  }

  async listOrderableTests(query: OrderableQueryInput): Promise<OrderableTest[]> {
    const take = Math.min(query.limit ?? 50, 100)

    const configurations = await this.db.prisma.testCatalogConfiguration.findMany({
      where: {
        ...(query.customerId ? { customerId: query.customerId } : {}),
        isActive: true,
      },
      orderBy: [{ updatedAt: 'desc' }],
      take,
      include: {
        test: {
          select: {
            id: true,
            testName: true,
          },
        },
        version: {
          select: {
            id: true,
            turnAroundTime: true,
            orderLoincs: { select: { loincCode: true } },
            specimens: {
              select: {
                displayName: true,
                minimumVolume: true,
                container: true,
              },
            },
          },
        },
      },
    })

    return configurations.map((configuration) => ({
      testId: configuration.testId,
      orderName:
        configuration.customTestName ??
        configuration.test?.testName ??
        configuration.configurationName,
      versionId: configuration.version?.id ?? configuration.versionId ?? configuration.testId,
      orderLoincs:
        configuration.version?.orderLoincs?.map((orderLoinc) => ({
          loincCode: orderLoinc.loincCode,
        })) ?? [],
      requiredSpecimens:
        configuration.version?.specimens?.map((specimen) => ({
          displayName: specimen.displayName ?? '',
          minVolume: specimen.minimumVolume ?? null,
          container: specimen.container ?? null,
        })) ?? [],
      turnAroundTime:
        configuration.customTurnAroundTime ?? configuration.version?.turnAroundTime ?? null,
    })) as OrderableTest[]
  }

  private buildSearchWhere(query: LabOrderSearchQuery): Prisma.LabOrderWhereInput {
    const where: Prisma.LabOrderWhereInput = {}

    if (query.labId) {
      where.labOrderTests = {
        some: { version: { is: { test: { labId: query.labId } } } },
      } as any
    }

    if (query.providerId) {
      where.orderingProviderId = query.providerId
    }

    if (query.status) {
      const allowedStatuses = Object.values($Enums.LabOrderStatusEnum)
      if (allowedStatuses.includes(query.status as $Enums.LabOrderStatusEnum)) {
        where.labOrderStatuses = {
          some: {
            status: query.status as $Enums.LabOrderStatusEnum,
          },
        }
      }
    }

    if (query.dateFrom || query.dateTo) {
      where.orderDate = {
        ...(query.dateFrom ? { gte: new Date(query.dateFrom) } : {}),
        ...(query.dateTo ? { lte: new Date(query.dateTo) } : {}),
      }
    }

    if (query.query) {
      const numeric = Number.parseInt(query.query, 10)
      where.OR = [
        ...(Number.isFinite(numeric)
          ? [{ orderNumber: numeric }, { accessionNumber: numeric }]
          : []),
        { orderNotes: { contains: query.query, mode: Prisma.QueryMode.insensitive } },
        {
          patient: {
            OR: [
              { firstName: { contains: query.query, mode: Prisma.QueryMode.insensitive } },
              { lastName: { contains: query.query, mode: Prisma.QueryMode.insensitive } },
              { email: { contains: query.query, mode: Prisma.QueryMode.insensitive } },
            ],
          },
        },
      ]
    }

    return where
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
    base: Prisma.LabOrderWhereInput,
    addition: Prisma.LabOrderWhereInput,
  ): Prisma.LabOrderWhereInput {
    if (!addition || Object.keys(addition).length === 0) {
      return base
    }

    const baseCopy = { ...base }
    const andConditions: Prisma.LabOrderWhereInput[] = []

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

  private applyScopeToLabOrderWhere(
    where: Prisma.LabOrderWhereInput,
    scope: TenantScope,
  ): Prisma.LabOrderWhereInput {
    const normalized = this.normalizeScope(scope)
    if (normalized.isSuperAdmin || normalized.tenantIds.length === 0) {
      return where
    }

    const scopeFilter: Prisma.LabOrderWhereInput = {
      organizationId: { in: normalized.tenantIds },
    }

    return this.combineWhere(where, scopeFilter)
  }

  private async ensureOrganizationAccess(organizationId: string, scope: TenantScope) {
    if (!organizationId) {
      return
    }
    const normalized = this.normalizeScope(scope)
    if (normalized.isSuperAdmin) {
      return
    }

    if (!normalized.tenantIds.includes(organizationId)) {
      throw new BizException(ErrorCodeEnum.OrganizationNotFound)
    }
  }

  private async ensureLabOrderAccess(labOrderId: string, scope: TenantScope) {
    const labOrder = await this.db.prisma.labOrder.findUnique({
      where: { id: labOrderId },
      select: { id: true, organizationId: true },
    })

    if (!labOrder) {
      throw new BizException(ErrorCodeEnum.LabOrderNotFound)
    }

    const normalized = this.normalizeScope(scope)
    if (
      !normalized.isSuperAdmin &&
      (normalized.tenantIds.length === 0 ||
        !labOrder.organizationId ||
        !normalized.tenantIds.includes(labOrder.organizationId))
    ) {
      throw new BizException(ErrorCodeEnum.LabOrderNotFound)
    }
  }

  private async resolveVariantContext(
    testId: string,
    options: {
      dimension: VariantDimensionType
      dimensionValue: string
      orderDate: Date
      versionId?: string
    },
  ): Promise<{
    version: Awaited<ReturnType<typeof this.ensurePublishedMasterVersion>>
    configuration: Awaited<ReturnType<typeof this.ensureOperationalConfiguration>>
    orderForms: ResolvedOrderFormSection[]
  }> {
    if (!testId) {
      throw new BizException(ErrorCodeEnum.TestNotFound)
    }

    const dimension = this.toPrismaVariantDimension(options.dimension)
    const normalizedValue = options.dimensionValue.trim().toUpperCase()
    const orderDate = options.orderDate

    const version = await this.ensurePublishedMasterVersion(testId, orderDate, options.versionId)
    const configuration = await this.ensureOperationalConfiguration(
      testId,
      version.id,
      dimension,
      normalizedValue,
      orderDate,
    )
    const orderForms = await this.loadResolvedOrderForms(version.id, configuration.id)

    return { version, configuration, orderForms }
  }

  private async ensurePublishedMasterVersion(testId: string, orderDate: Date, versionId?: string) {
    if (versionId) {
      const version = await this.db.prisma.testCatalogVersion.findFirst({
        where: {
          id: versionId,
          testId,
          status: $Enums.TestCatalogVersionStatus.PUBLISHED,
          OR: [{ effectiveDate: null }, { effectiveDate: { lte: orderDate } }],
        },
      })
      if (!version) {
        throw new BizException(ErrorCodeEnum.TestVersionNotFound)
      }
      return version
    }

    const published = await this.db.prisma.testCatalogVersion.findFirst({
      where: {
        testId,
        status: $Enums.TestCatalogVersionStatus.PUBLISHED,
        OR: [{ effectiveDate: null }, { effectiveDate: { lte: orderDate } }],
      },
      orderBy: [{ effectiveDate: 'desc' }, { createdAt: 'desc' }],
    })
    if (published) {
      return published
    }

    const latest = await this.db.prisma.testCatalogVersion.findFirst({
      where: { testId },
      orderBy: [{ versionNumber: 'desc' }, { createdAt: 'desc' }],
    })
    if (latest) {
      return this.db.prisma.testCatalogVersion.update({
        where: { id: latest.id },
        data: {
          status: $Enums.TestCatalogVersionStatus.PUBLISHED,
          effectiveDate: orderDate,
        },
      })
    }

    return this.db.prisma.testCatalogVersion.create({
      data: {
        testId,
        versionNumber: 1,
        status: $Enums.TestCatalogVersionStatus.PUBLISHED,
        effectiveDate: orderDate,
      },
    })
  }

  private async ensureOperationalConfiguration(
    testId: string,
    versionId: string,
    dimension: $Enums.VariantDimension,
    dimensionValue: string,
    orderDate: Date,
  ) {
    const configuration = await this.db.prisma.testCatalogConfiguration.findFirst({
      where: {
        testId,
        versionId,
        type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
        dimension,
        dimensionValue,
        status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
        isActive: true,
        OR: [{ effectiveDate: null }, { effectiveDate: { lte: orderDate } }],
        AND: [{ OR: [{ expirationDate: null }, { expirationDate: { gt: orderDate } }] }],
      },
      orderBy: [{ versionNumber: 'desc' }, { effectiveDate: 'desc' }, { createdAt: 'desc' }],
    })

    if (configuration) {
      return configuration
    }

    return this.db.prisma.testCatalogConfiguration.create({
      data: {
        testId,
        versionId,
        configurationName: `Auto ${dimension} ${dimensionValue}`,
        type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
        dimension,
        dimensionValue,
        status: $Enums.TestCatalogConfigurationStatus.ACTIVE,
        isActive: true,
        effectiveDate: orderDate,
      },
    })
  }

  private async loadResolvedOrderForms(
    versionId: string,
    configurationId: string,
  ): Promise<ResolvedOrderFormSection[]> {
    let assignments = await this.db.prisma.testCatalogVersionOrderForm.findMany({
      where: {
        versionId,
        configurationId,
      },
      orderBy: [{ displayOrder: 'asc' }, { createdAt: 'asc' }],
      select: {
        id: true,
        orderFormTemplateId: true,
        displayOrder: true,
        customTitle: true,
        isRequired: true,
        isVisible: true,
        template: {
          select: {
            id: true,
            name: true,
            orderFormSectionId: true,
            formSchema: true,
            layoutSchema: true,
            section: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    })

    if (assignments.length === 0) {
      assignments = await this.db.prisma.testCatalogVersionOrderForm.findMany({
        where: {
          versionId,
          configurationId: null,
        },
        orderBy: [{ displayOrder: 'asc' }, { createdAt: 'asc' }],
        select: {
          id: true,
          orderFormTemplateId: true,
          displayOrder: true,
          customTitle: true,
          isRequired: true,
          isVisible: true,
          template: {
            select: {
              id: true,
              name: true,
              orderFormSectionId: true,
              formSchema: true,
              layoutSchema: true,
              section: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      })
    }

    return assignments
      .filter((assignment) => assignment.template)
      .map((assignment) => {
        const template = assignment.template!
        const sectionId = template.section?.id ?? template.orderFormSectionId
        if (!sectionId) {
          throw new BizException(ErrorCodeEnum.OrderFormSectionNotFound)
        }

        const sectionName = template.section?.name ?? assignment.customTitle ?? template.name ?? ''
        if (!sectionName) {
          throw new BizException(ErrorCodeEnum.OrderFormTemplateNotFound)
        }

        return {
          assignmentId: assignment.id,
          sectionId,
          sectionName,
          templateId: template.id,
          templateName: template.name ?? null,
          displayOrder: assignment.displayOrder ?? 0,
          isRequired: assignment.isRequired ?? false,
          isVisible: assignment.isVisible ?? true,
          customTitle: assignment.customTitle ?? null,
          formSchema: template.formSchema ?? null,
          layoutSchema: template.layoutSchema ?? null,
        } satisfies ResolvedOrderFormSection
      })
  }

  private toPrismaJson(value: unknown): Prisma.InputJsonValue | typeof Prisma.JsonNull {
    if (value === null || value === undefined) {
      return Prisma.JsonNull
    }
    return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue
  }

  private toPrismaVariantDimension(value: VariantDimensionType): $Enums.VariantDimension {
    const dimension = value as $Enums.VariantDimension
    if (!Object.values($Enums.VariantDimension).includes(dimension)) {
      throw new BizException(ErrorCodeEnum.TestConfigurationNotFound)
    }
    return dimension
  }

  private toDate(value?: string | Date | null) {
    if (!value) {
      return null
    }
    return value instanceof Date ? value : new Date(value)
  }

  private parseOrderSnapshot(orderNotes: string | null): Record<string, unknown> | null {
    if (!orderNotes) {
      return null
    }
    try {
      const parsed = JSON.parse(orderNotes)
      return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? (parsed as Record<string, unknown>)
        : null
    } catch {
      return null
    }
  }

  private ensureRecord(value: unknown): Record<string, unknown> {
    return value && typeof value === 'object' && !Array.isArray(value)
      ? (value as Record<string, unknown>)
      : {}
  }

  private ensureArray<T = unknown>(value: unknown): T[] {
    return Array.isArray(value) ? (value as T[]) : []
  }

  private toOptionalString(value: unknown): string | null {
    if (typeof value === 'string') {
      const trimmed = value.trim()
      return trimmed.length > 0 ? trimmed : null
    }
    return null
  }

  private toOptionalNumber(value: unknown): number | null {
    return this.decimalToNumber(value as Prisma.Decimal | number | string | null | undefined)
  }

  private toOptionalDateString(value: unknown): string | null {
    if (value instanceof Date) {
      return value.toISOString()
    }
    if (typeof value === 'string') {
      const trimmed = value.trim()
      if (!trimmed) {
        return null
      }
      const parsed = new Date(trimmed)
      return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString()
    }
    return null
  }

  private parseStringArray(value: unknown): string[] | null {
    const items = this.ensureArray(value)
    const result = items
      .map((item) => this.toOptionalString(item))
      .filter((item): item is string => Boolean(item))
    return result.length ? result : null
  }

  private mapClinicalAttachments(value: unknown): ClinicalAttachmentContract[] | null {
    const attachments: ClinicalAttachmentContract[] = []
    this.ensureArray(value).forEach((item, index) => {
      const record = this.ensureRecord(item)
      const fileName = this.toOptionalString(record.fileName)
      const fileId = this.toOptionalString(record.fileId)
      const uploadedAt = this.toOptionalString(record.uploadedAt)
      const categoryValue = this.toOptionalString(record.category)
      if (!fileName || !fileId || !uploadedAt || !categoryValue) {
        return
      }
      const id = this.toOptionalString(record.id) ?? `snapshot-attachment-${index.toString(10)}`
      const attachment: ClinicalAttachmentContract = {
        id,
        category: categoryValue as AttachmentCategory,
        fileId,
        fileName,
        uploadedAt,
      }
      const url = this.toOptionalString(record.url)
      if (url) {
        attachment.url = url
      }
      const notes = this.toOptionalString(record.notes)
      if (notes) {
        attachment.notes = notes
      }
      attachments.push(attachment)
    })
    return attachments.length ? attachments : null
  }

  private mapBillingRecord(
    bill: LabOrderDetailPayload['labOrderBilling'][number],
  ): LabOrderBillingContract {
    return {
      id: bill.id,
      billingType: bill.billingType ?? null,
      totalCost: this.decimalToNumber(bill.copayAmount),
      insuranceProvider: bill.insuranceProvider ?? null,
      policyNumber: bill.policyNumber ?? null,
      planName: bill.planName ?? null,
      groupNumber: bill.groupNumber ?? null,
      benefitsId: bill.benefitsId ?? null,
      insuredName: bill.insuredName ?? null,
      relationToPatient: bill.relationToPatient ?? null,
      insuredDob: bill.insuredDob?.toISOString() ?? null,
      insuredPhone: bill.insuredPhone ?? null,
      insurerState: bill.insurerState ?? null,
      referralAuthNumber: bill.referralAuthNumber ?? null,
      copayAmount: this.decimalToNumber(bill.copayAmount),
      deductibleAmount: this.decimalToNumber(bill.deductibleAmount),
    }
  }

  private buildBillingFromSnapshot(billing: Record<string, unknown>): LabOrderBillingContract[] {
    const entries: LabOrderBillingContract[] = []
    const addInsuranceEntry = (insurance: Record<string, unknown>, type: string, key: string) => {
      if (Object.keys(insurance).length === 0) {
        return
      }
      const entry: LabOrderBillingContract = {
        id: `snapshot-${key}`,
        billingType: type,
        totalCost: this.toOptionalNumber(insurance.copayAmount),
        insuranceProvider: this.toOptionalString(insurance.insuranceName) ?? null,
        policyNumber: this.toOptionalString(insurance.insuranceId) ?? null,
        planName: this.toOptionalString(insurance.planName) ?? null,
        groupNumber: this.toOptionalString(insurance.groupNumber) ?? null,
        benefitsId: this.toOptionalString(insurance.benefitsId) ?? null,
        insuredName: this.toOptionalString(insurance.insuredName) ?? null,
        relationToPatient: this.toOptionalString(insurance.relationToPatient) ?? null,
        insuredDob: this.toOptionalDateString(insurance.insuredDob),
        insuredPhone: this.toOptionalString(insurance.insuredPhone) ?? null,
        insurerState: this.toOptionalString(insurance.insurerState) ?? null,
        referralAuthNumber: this.toOptionalString(insurance.referralAuthNumber) ?? null,
        copayAmount: this.toOptionalNumber(insurance.copayAmount),
        deductibleAmount: this.toOptionalNumber(insurance.deductibleAmount),
      }
      entries.push(entry)
    }

    addInsuranceEntry(this.ensureRecord(billing.primaryInsurance), 'INSURANCE_PRIMARY', 'primary')
    addInsuranceEntry(
      this.ensureRecord(billing.secondaryInsurance),
      'INSURANCE_SECONDARY',
      'secondary',
    )

    return entries
  }

  private extractPrimaryPhone(value: unknown): string | null {
    const phones = this.ensureArray(value)
    for (const phone of phones) {
      const record = this.ensureRecord(phone)
      const number = this.toOptionalString(record.number)
      if (number) {
        return number
      }
    }
    return null
  }

  private extractNamePart(fullName: unknown, part: 'first' | 'last'): string | null {
    const value = this.toOptionalString(fullName)
    if (!value) {
      return null
    }
    const segments = value.trim().split(/\s+/)
    if (!segments.length) {
      return null
    }
    return part === 'first' ? segments[0] : segments[segments.length - 1]
  }

  private decimalToNumber(
    value: Prisma.Decimal | number | string | null | undefined,
  ): number | null {
    if (value === null || value === undefined) {
      return null
    }
    if (typeof value === 'number') {
      return Number.isFinite(value) ? value : null
    }
    if (typeof value === 'string') {
      const parsed = Number(value)
      return Number.isFinite(parsed) ? parsed : null
    }
    if (value instanceof Prisma.Decimal) {
      return value.toNumber()
    }
    return null
  }

  private mapSummary(order: LabOrderSummaryPayload): LabOrderSummary {
    const latestStatus = order.labOrderStatuses[0]
    const billing = order.labOrderBilling[0]
    const primaryTest = order.labOrderTests[0] as any
    const version = primaryTest?.version as any
    const test = version?.test as any
    const providerNameParts = [
      order.orderingProvider?.firstName,
      order.orderingProvider?.lastName,
    ].filter(Boolean)
    const providerName =
      order.orderingProvider?.name ??
      (providerNameParts.length ? providerNameParts.join(' ') : null)

    return {
      id: order.id,
      orderNumber: order.orderNumber,
      accessionNumber: order.accessionNumber,
      orderDate: order.orderDate?.toISOString() ?? null,
      patientMRN: order.patientMRN ?? null,
      patientName: order.patient
        ? [order.patient.firstName, order.patient.lastName].filter(Boolean).join(' ') || null
        : null,
      status: latestStatus?.status ?? null,
      providerName,
      labName: test?.lab?.labName ?? null,
      casandraTestId: test?.casandraTestId ?? null,
      versionNumber: version?.versionNumber ?? null,
      totalCost: billing?.copayAmount ? Number(billing.copayAmount) : null,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
      testCount: order.labOrderTests.length,
      icdCount: order.labOrderIcds.length,
    }
  }

  private mapDetail(order: LabOrderDetailPayload): LabOrder {
    const snapshot = this.parseOrderSnapshot(order.orderNotes)
    const clinicalSnapshot = this.ensureRecord(snapshot?.clinicalHistory)
    const billingSnapshot = this.ensureRecord(snapshot?.billing)
    const patientSnapshot = this.ensureRecord(snapshot?.patient)
    const providerSnapshot = this.ensureRecord(
      this.ensureRecord(snapshot?.provider).orderingProvider,
    )

    const clinicalDetails = this.toOptionalString(clinicalSnapshot.clinicalDetails)
    const clinicalPresentation = this.toOptionalString(clinicalSnapshot.clinicalPresentation)
    const clinicalTesting = this.toOptionalString(clinicalSnapshot.clinicalTesting)
    const riskFlags = this.parseStringArray(clinicalSnapshot.riskFlags)
    const riskFlagNotes = this.toOptionalString(clinicalSnapshot.riskFlagNotes)
    const clinicalAttachments = this.mapClinicalAttachments(clinicalSnapshot.attachments)

    const labOrderBilling =
      order.labOrderBilling.length > 0
        ? order.labOrderBilling.map((bill) => this.mapBillingRecord(bill))
        : this.buildBillingFromSnapshot(billingSnapshot)

    const patientMRN =
      order.patientMRN ?? this.toOptionalString(this.ensureRecord(patientSnapshot.demographics).mrn)

    const patientContact = this.ensureRecord(patientSnapshot.contact)
    const snapshotPrimaryPhone = this.extractPrimaryPhone(patientContact.phones)

    const patient =
      order.patient ??
      (patientSnapshot && (patientSnapshot.firstName || patientSnapshot.lastName)
        ? {
            id: order.patientId ?? this.toOptionalString(patientSnapshot.id) ?? '',
            firstName: this.toOptionalString(patientSnapshot.firstName),
            lastName: this.toOptionalString(patientSnapshot.lastName),
            dateOfBirth: this.toOptionalDateString(
              this.ensureRecord(patientSnapshot.demographics).dateOfBirth,
            ),
            gender: this.toOptionalString(
              this.ensureRecord(patientSnapshot.demographics).sexAtBirth,
            ),
            email: this.toOptionalString(patientContact.email),
            mobile: snapshotPrimaryPhone,
            // Additional fields not in contract are ignored
          }
        : null)

    const orderingProvider =
      order.orderingProvider ??
      (providerSnapshot && (providerSnapshot.fullName || providerSnapshot.npi)
        ? {
            id: order.orderingProviderId ?? this.toOptionalString(providerSnapshot.id) ?? '',
            firstName: this.extractNamePart(providerSnapshot.fullName, 'first'),
            lastName: this.extractNamePart(providerSnapshot.fullName, 'last'),
            npi: this.toOptionalString(providerSnapshot.npi),
          }
        : null)

    const primaryTest = order.labOrderTests[0] as any
    const primaryVersion = (primaryTest?.version ?? null) as any
    const primaryConfig = (primaryTest?.configuration ?? null) as any
    const primaryTestInfo = (primaryVersion?.test ?? null) as any

    return {
      id: order.id,
      orderNumber: order.orderNumber,
      accessionNumber: order.accessionNumber,
      patientMRN: patientMRN ?? null,
      patientMobile:
        order.patientMobile ??
        order.patient?.mobile ??
        snapshotPrimaryPhone ??
        this.toOptionalString(patientSnapshot.mobile),
      patientEmail:
        order.patientEmail ?? order.patient?.email ?? this.toOptionalString(patientContact.email),
      orderDate: order.orderDate?.toISOString() ?? null,
      orderNotes: order.orderNotes ?? null,
      clinicalNotes: clinicalDetails,
      clinicalDetails,
      clinicalPresentation,
      clinicalTesting,
      riskFlags,
      riskFlagNotes,
      clinicalAttachments,
      labId: order.labId ?? primaryTestInfo?.labId ?? this.toOptionalString(snapshot?.labId),
      organizationId: order.organizationId ?? null,
      orderingProviderId: order.orderingProviderId ?? null,
      treatingProviderId: order.treatingProviderId ?? null,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
      patient: patient
        ? {
            id: patient.id,
            firstName: patient.firstName ?? null,
            lastName: patient.lastName ?? null,
            dateOfBirth: patient.dateOfBirth ?? null,
            gender: patient.gender ?? null,
            email: patient.email ?? null,
            mobile: patient.mobile ?? null,
          }
        : null,
      orderingProvider: orderingProvider
        ? {
            id: orderingProvider.id,
            firstName: orderingProvider.firstName ?? null,
            lastName: orderingProvider.lastName ?? null,
            npi: orderingProvider.npi ?? null,
          }
        : null,
      treatingProvider: order.treatingProvider
        ? {
            id: order.treatingProvider.id,
            firstName: order.treatingProvider.firstName ?? null,
            lastName: order.treatingProvider.lastName ?? null,
            npi: order.treatingProvider.npi ?? null,
          }
        : null,
      organization: order.organization
        ? {
            id: order.organization.id,
            orgName: order.organization.orgName ?? null,
            parentOrgName: order.organization.parentOrgName ?? null,
            orgAddress: order.organization.orgAddress ?? null,
            orgCity: order.organization.orgCity ?? null,
            orgState: order.organization.orgState ?? null,
            orgZip: order.organization.orgZip ?? null,
          }
        : null,
      lab: primaryTestInfo?.lab
        ? {
            id: primaryTestInfo.lab.id,
            labName: primaryTestInfo.lab.labName ?? null,
          }
        : null,
      version: primaryVersion
        ? {
            id: primaryVersion.id,
            status: primaryVersion.status ?? undefined,
            versionNumber: primaryVersion.versionNumber ?? undefined,
          }
        : null,
      configuration: primaryConfig
        ? {
            id: primaryConfig.id,
            configurationName: primaryConfig.configurationName ?? null,
            familyStructure:
              primaryConfig.dimension === 'FAMILY_STRUCTURE' && primaryConfig.dimensionValue
                ? (primaryConfig.dimensionValue as FamilyStructureType)
                : null,
            type: primaryConfig.type ?? undefined,
          }
        : null,
      labOrderTests: order.labOrderTests.map((test) => {
        const version = (test as any).version as any
        const configuration = (test as any).configuration as any
        const testInfo = version?.test as any

        return {
          id: test.id,
          testVersionId: (test as any).testVersionId ?? null,
          testConfigurationId: (test as any).testConfigurationId ?? null,
          version: version
            ? {
                id: version.id,
                versionNumber: version.versionNumber ?? undefined,
                status: version.status ?? undefined,
                test: testInfo
                  ? {
                      id: testInfo.id,
                      casandraTestId: testInfo.casandraTestId ?? null,
                      labId: testInfo.labId ?? null,
                      testName: testInfo.testName ?? null,
                      lab: testInfo.lab
                        ? {
                            id: testInfo.lab.id,
                            labName: testInfo.lab.labName ?? null,
                            labCode: testInfo.lab.labCode ?? null,
                          }
                        : null,
                    }
                  : null,
              }
            : null,
          configuration: configuration
            ? {
                id: configuration.id,
                configurationName: configuration.configurationName ?? null,
                familyStructure:
                  configuration.dimension === 'FAMILY_STRUCTURE' && configuration.dimensionValue
                    ? (configuration.dimensionValue as FamilyStructureType)
                    : null,
                type: configuration.type ?? undefined,
              }
            : null,
          testCatalog: testInfo
            ? {
                testId: testInfo.id,
                labId: testInfo.labId ?? undefined,
                testName: testInfo.testName ?? null,
                lab: testInfo.lab
                  ? {
                      id: testInfo.lab.id,
                      labName: testInfo.lab.labName ?? null,
                      labCode: testInfo.lab.labCode ?? null,
                    }
                  : null,
              }
            : null,
        }
      }),
      labOrderIcds: order.labOrderIcds.map((icd) => ({
        id: icd.id,
        icd: icd.icd
          ? {
              id: icd.icd.id,
              code: icd.icd.code ?? null,
              shortDescription: icd.icd.shortDescription ?? null,
              longDescription: icd.icd.alias1 ?? null,
            }
          : null,
      })),
      labOrderSpecimens: order.labOrderSpecimens.map((specimen) => ({
        id: specimen.id,
        specimenType: specimen.specimenType ?? null,
        collectedDate: specimen.collectedDate?.toISOString() ?? null,
        specimenCount: specimen.specimenCount ?? null,
        bodySite: specimen.bodySite ?? null,
      })),
      labOrderBilling,
      labOrderAttachments: order.labOrderAttachments.map((attachment) => ({
        id: attachment.id,
        labOrderId: attachment.labOrderId ?? null,
        attachmentId: attachment.attachmentId ?? null,
        attachment: attachment.attachment
          ? {
              id: attachment.attachment.id,
              fileName: attachment.attachment.fileName,
              createdAt: attachment.attachment.createdAt?.toISOString() ?? null,
              url: attachment.attachment.url ?? null,
              attachmentUrl: attachment.attachment.attachmentUrl ?? null,
            }
          : null,
      })),
      labOrderStatuses: order.labOrderStatuses.map((status) => ({
        id: status.id,
        status: status.status ?? null,
        statusDate: status.statusDate?.toISOString() ?? null,
      })),
      orderForms: order.orderForms.map((form) => ({
        id: form.id,
        versionOrderFormId: form.versionOrderFormId ?? null,
        orderFormTemplateId: form.orderFormTemplateId ?? null,
        sectionName: form.sectionName,
        templateName: form.templateName ?? null,
        displayOrder: form.displayOrder ?? 0,
        formSchema: (form.formSchema ?? null) as LabOrderFormSnapshot['formSchema'],
        layoutSchema: (form.layoutSchema ?? null) as LabOrderFormSnapshot['layoutSchema'],
        responses: (form.responses ?? null) as LabOrderFormSnapshot['responses'],
        isCompleted: form.isCompleted,
        completedAt: form.completedAt?.toISOString() ?? null,
        createdAt: form.createdAt.toISOString(),
        updatedAt: form.updatedAt.toISOString(),
      })),
    }
  }
}
