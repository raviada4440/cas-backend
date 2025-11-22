import { Injectable } from '@nestjs/common'
import { Prisma } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'

import { LabOrder, LabOrderSummary, PagedLabOrders } from '@shared/contracts/laborders'
import { OrderableTest } from '@shared/contracts/orders'

import { CreateLabOrderInput, LabOrderSearchQuery, UpdateLabOrderInput } from './lab-orders.dto'
import { OrderableQueryInput } from './orderable-tests.dto'

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
    configuration: {
      select: {
        configurationName: true,
      },
    },
    version: {
      select: {
        versionNumber: true,
        test: {
          select: {
            casandraTestId: true,
            testName: true,
            lab: {
              select: {
                labName: true,
              },
            },
          },
        },
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
      select: {
        id: true,
      },
    },
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
    configuration: {
      select: {
        id: true,
        configurationName: true,
        type: true,
        customerId: true,
      },
    },
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
    labOrderStatuses: {
      orderBy: { statusDate: 'desc' },
      select: {
        id: true,
        status: true,
        statusDate: true,
      },
    },
    labOrderTests: {
      select: {
        id: true,
        testCatalog: {
          select: {
            id: true,
            labId: true,
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
        insuranceProvider: true,
        policyNumber: true,
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

  async list(query: LabOrderSearchQuery): Promise<PagedLabOrders> {
    const take = Math.min(query.limit ?? 20, 50)
    const where = this.buildSearchWhere(query)

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

  async detail(labOrderId: string): Promise<LabOrder> {
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

  async create(input: CreateLabOrderInput): Promise<LabOrder> {
    const { version, configuration } = await this.resolveVersionAndConfiguration(
      input.testId,
      input.versionId,
    )

    const created = await this.db.prisma.$transaction(async (tx) => {
      const labOrder = await tx.labOrder.create({
        data: {
          patientId: input.patientId,
          testVersionId: version.id,
          testConfigurationId: configuration.id,
          orderingProviderId: input.orderingProviderId ?? null,
          treatingProviderId: input.treatingProviderId ?? null,
          organizationId: input.organizationId ?? null,
          orderDate: input.orderDate ? new Date(input.orderDate) : undefined,
          orderNotes: input.orderNotes ?? null,
        },
      })

      const testIds = Array.from(new Set([input.testId, ...(input.testIds ?? [])]))
      if (testIds.length) {
        await tx.labOrderTest.createMany({
          data: testIds.map((testId) => ({
            labOrderId: labOrder.id,
            testId,
          })),
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

      await tx.labOrderStatus.create({
        data: {
          labOrderId: labOrder.id,
          status: 'DRAFT',
          statusDate: new Date(),
        },
      })

      return labOrder
    })

    return this.detail(created.id)
  }

  async update(labOrderId: string, input: UpdateLabOrderInput): Promise<LabOrder> {
    await this.ensureLabOrderExists(labOrderId)

    await this.db.prisma.$transaction(async (tx) => {
      await tx.labOrder.update({
        where: { id: labOrderId },
        data: {
          orderNotes: input.orderNotes ?? null,
          updatedAt: new Date(),
        },
      })

      if (input.testIds) {
        const uniqueTests = Array.from(new Set(input.testIds ?? []))
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
        const existingIds = new Set(existing.map((item) => item.testId).filter(Boolean) as string[])
        const toCreate = uniqueTests.filter((id) => !existingIds.has(id))
        if (toCreate.length) {
          await tx.labOrderTest.createMany({
            data: toCreate.map((testId) => ({ labOrderId, testId })),
          })
        }
      }

      if (input.icdIds) {
        const uniqueIcds = Array.from(new Set(input.icdIds ?? []))
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
        const existingIds = new Set(existing.map((item) => item.icdId).filter(Boolean) as string[])
        const toCreate = uniqueIcds.filter((id) => !existingIds.has(id))
        if (toCreate.length) {
          await tx.labOrderIcd.createMany({
            data: toCreate.map((icdId) => ({ labOrderId, icdId })),
          })
        }
      }

      if (input.specimens) {
        const updatePayload = input.specimens.filter((s) => !s._delete && s.id)
        const createPayload = input.specimens.filter((s) => !s._delete && !s.id)
        const deleteIds = input.specimens.filter((s) => s._delete && s.id).map((s) => s.id!) // safe because filtered

        if (deleteIds.length) {
          await tx.labOrderSpecimen.deleteMany({
            where: { labOrderId, id: { in: deleteIds } },
          })
        }

        for (const specimen of updatePayload) {
          await tx.labOrderSpecimen.update({
            where: { id: specimen.id! },
            data: {
              specimenType: specimen.specimenType,
              collectedDate: this.toDate(specimen.collectedDate),
              specimenCount: specimen.specimenCount ?? null,
              bodySite: specimen.bodySite ?? null,
            },
          })
        }

        if (createPayload.length) {
          await tx.labOrderSpecimen.createMany({
            data: createPayload.map((specimen) => ({
              labOrderId,
              specimenType: specimen.specimenType,
              collectedDate: this.toDate(specimen.collectedDate),
              specimenCount: specimen.specimenCount ?? null,
              bodySite: specimen.bodySite ?? null,
            })),
          })
        }
      }
    })

    return this.detail(labOrderId)
  }

  async updateStatus(labOrderId: string, status: string) {
    await this.ensureLabOrderExists(labOrderId)

    await this.db.prisma.labOrderStatus.create({
      data: {
        labOrderId,
        status,
        statusDate: new Date(),
      },
    })

    return this.detail(labOrderId)
  }

  async delete(labOrderId: string) {
    await this.ensureLabOrderExists(labOrderId)

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
      where.configuration = { test: { labId: query.labId } }
    }

    if (query.providerId) {
      where.orderingProviderId = query.providerId
    }

    if (query.status) {
      where.labOrderStatuses = {
        some: {
          status: query.status,
        },
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

  private async ensureLabOrderExists(labOrderId: string) {
    const exists = await this.db.prisma.labOrder.findUnique({
      where: { id: labOrderId },
      select: { id: true },
    })
    if (!exists) {
      throw new BizException(ErrorCodeEnum.LabOrderNotFound)
    }
  }

  private async resolveVersionAndConfiguration(testId: string, versionId?: string) {
    if (!testId) {
      throw new BizException(ErrorCodeEnum.TestNotFound)
    }

    const version = versionId
      ? await this.db.prisma.testCatalogVersion
          .findUnique({ where: { id: versionId } })
          .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestVersionNotFound)))
      : await this.db.prisma.testCatalogVersion.findFirst({
          where: { testId, status: 'PUBLISHED' },
          orderBy: { versionNumber: 'desc' },
        })

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    const configuration = await this.db.prisma.testCatalogConfiguration.findFirst({
      where: {
        testId,
        isActive: true,
        ...(version.id
          ? {
              OR: [{ versionId: version.id }, { versionId: null }],
            }
          : {}),
      },
      orderBy: [{ isDefault: 'desc' }, { versionNumber: 'desc' }],
    })

    if (!configuration) {
      throw new BizException(ErrorCodeEnum.TestConfigurationNotFound)
    }

    return { version, configuration }
  }

  private toDate(value?: string | Date | null) {
    if (!value) {
      return null
    }
    return value instanceof Date ? value : new Date(value)
  }

  private mapSummary(order: LabOrderSummaryPayload): LabOrderSummary {
    const latestStatus = order.labOrderStatuses[0]
    const billing = order.labOrderBilling[0]
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
      labName: order.version?.test?.lab?.labName ?? null,
      casandraTestId: order.version?.test?.casandraTestId ?? null,
      versionNumber: order.version?.versionNumber ?? null,
      totalCost: billing?.copayAmount ? Number(billing.copayAmount) : null,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
      testCount: order.labOrderTests.length,
      icdCount: order.labOrderIcds.length,
    }
  }

  private mapDetail(order: LabOrderDetailPayload): LabOrder {
    const billing = order.labOrderBilling.map((bill) => ({
      id: bill.id,
      billingType: bill.billingType ?? null,
      totalCost: bill.copayAmount ? Number(bill.copayAmount) : null,
      insuranceProvider: bill.insuranceProvider ?? null,
      policyNumber: bill.policyNumber ?? null,
      planName: null,
      groupNumber: null,
      benefitsId: null,
      insuredName: null,
      relationToPatient: null,
      insuredDob: null,
      insuredPhone: null,
      insurerState: null,
      referralAuthNumber: null,
      copayAmount: bill.copayAmount ? Number(bill.copayAmount) : null,
      deductibleAmount: null,
    }))

    return {
      id: order.id,
      orderNumber: order.orderNumber,
      accessionNumber: order.accessionNumber,
      testVersionId: order.testVersionId,
      testConfigurationId: order.testConfigurationId,
      patientMRN: order.patientMRN ?? null,
      patientMobile: order.patientMobile ?? order.patient?.mobile ?? null,
      patientEmail: order.patientEmail ?? order.patient?.email ?? null,
      orderDate: order.orderDate?.toISOString() ?? null,
      orderNotes: order.orderNotes ?? null,
      clinicalNotes: null,
      clinicalDetails: null,
      clinicalPresentation: null,
      clinicalTesting: null,
      riskFlags: null,
      riskFlagNotes: null,
      clinicalAttachments: null,
      labId: order.version?.test?.labId ?? null,
      organizationId: order.organizationId ?? null,
      orderingProviderId: order.orderingProviderId ?? null,
      treatingProviderId: order.treatingProviderId ?? null,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
      patient: order.patient
        ? {
            id: order.patient.id,
            firstName: order.patient.firstName ?? null,
            lastName: order.patient.lastName ?? null,
            dateOfBirth: order.patient.dateOfBirth?.toISOString() ?? null,
            gender: order.patient.gender ?? null,
            email: order.patient.email ?? null,
            mobile: order.patient.mobile ?? null,
          }
        : null,
      orderingProvider: order.orderingProvider
        ? {
            id: order.orderingProvider.id,
            firstName: order.orderingProvider.firstName ?? null,
            lastName: order.orderingProvider.lastName ?? null,
            npi: order.orderingProvider.npi ?? null,
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
      lab: order.version?.test?.lab
        ? {
            id: order.version.test.lab.id,
            labName: order.version.test.lab.labName ?? null,
          }
        : null,
      version: order.version
        ? {
            id: order.version.id,
            status: order.version.status ?? null,
            versionNumber: order.version.versionNumber ?? null,
            turnAroundTime: order.version.turnAroundTime ?? null,
            orderLoincs: order.version.orderLoincs.map((loinc) => ({
              loincCode: loinc.loincCode,
            })),
            specimens: order.version.specimens.map((specimen) => ({
              id: specimen.id,
              displayName: specimen.displayName ?? null,
              isPrimary: specimen.isPrimary ?? null,
              specimenType: specimen.specimenType ?? null,
              specimenRequirements: specimen.specimenRequirements ?? null,
              volume: specimen.volume ?? null,
              minimumVolume: specimen.minimumVolume ?? null,
              container: specimen.container ?? null,
              specialInstructions: specimen.specialInstructions ?? null,
              alternateContainers: specimen.alternateContainers ?? null,
              preferredVolume: specimen.preferredVolume ?? null,
            })),
          }
        : null,
      configuration: order.configuration
        ? {
            id: order.configuration.id,
            configurationName: order.configuration.configurationName ?? null,
            customerId: order.configuration.customerId ?? null,
            type: order.configuration.type ?? null,
          }
        : null,
      labOrderTests: order.labOrderTests.map((test) => ({
        id: test.id,
        testCatalog: test.testCatalog
          ? {
              testId: test.testCatalog.id,
              labId: test.testCatalog.labId ?? undefined,
              testName: test.testCatalog.testName ?? null,
              lab: test.testCatalog.lab
                ? {
                    id: test.testCatalog.lab.id,
                    labName: test.testCatalog.lab.labName ?? null,
                    labCode: test.testCatalog.lab.labCode ?? null,
                  }
                : null,
            }
          : null,
      })),
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
      labOrderBilling: billing,
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
        formSchema: form.formSchema ?? null,
        layoutSchema: form.layoutSchema ?? null,
        responses: form.responses ?? null,
        isCompleted: form.isCompleted,
        completedAt: form.completedAt?.toISOString() ?? null,
        createdAt: form.createdAt.toISOString(),
        updatedAt: form.updatedAt.toISOString(),
      })),
    }
  }
}
