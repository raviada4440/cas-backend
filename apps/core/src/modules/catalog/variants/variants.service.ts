import { Injectable } from '@nestjs/common'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Prisma, $Enums } from '@db/client'

import { FileUploadRequirement, ResolvedOrderFormSection } from '@shared/contracts/order-forms'
import {
  OperationalVariantBiomarkerOverride,
  OperationalVariantFinalBiomarker,
} from '@shared/contracts/catalog-variants'
import { ResolveVariantInput as ResolveVariantInputType } from '@shared/contracts/catalog'

import { OrderFormsService } from '../order-forms/order-forms.service'
import { TestsService } from '../tests/tests.service'

import {
  CreateOperationalVariantInput,
  UpsertCustomerVariantInput,
  UpdateOperationalVariantInput,
} from './variants.dto'

const operationalVariantInclude = {
  version: {
    select: {
      versionNumber: true,
      status: true,
      turnAroundTime: true,
    },
  },
  cptOverrides: true,
  orderLoincOverrides: true,
  resultLoincOverrides: true,
  specimenManifestEntries: true,
  biomarkerOverrides: {
    include: {
      biomarker: {
        select: {
          hgncApprovedSymbol: true,
          hgncApprovedName: true,
        },
      },
    },
  },
} as const

@Injectable()
export class VariantsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly testsService: TestsService,
    private readonly orderFormsService: OrderFormsService,
  ) {}

  async listOperationalVariants(testId: string, versionId?: string) {
    await this.ensureTestExists(testId)

    const configs = await this.db.prisma.testCatalogConfiguration.findMany({
      where: {
        testId,
        type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
        ...(versionId ? { versionId } : {}),
      },
      include: this.operationalInclude,
      orderBy: { updatedAt: 'desc' },
    })

    return configs.map((config) => this.mapOperationalVariant(config))
  }

  async createOperationalVariant(testId: string, input: CreateOperationalVariantInput) {
    await this.ensureVersionMatchesTest(testId, input.versionId)

    const configuration = await this.db.prisma.$transaction(async (tx) => {
      const created = await tx.testCatalogConfiguration.create({
        data: this.buildOperationalConfigurationData(testId, input),
      })

      await this.replaceOperationalOverrides(tx, created.id, input)

      return tx.testCatalogConfiguration.findUniqueOrThrow({
        where: { id: created.id },
        include: this.operationalInclude,
      })
    })

    return this.mapOperationalVariant(configuration)
  }

  async updateOperationalVariant(
    testId: string,
    configurationId: string,
    input: UpdateOperationalVariantInput,
  ) {
    const configuration = await this.db.prisma.$transaction(async (tx) => {
      const existing = await tx.testCatalogConfiguration
        .findUnique({
          where: { id: configurationId },
          select: { testId: true, versionId: true },
        })
        .catch(() => null)

      if (!existing || existing.testId !== testId) {
        throw new BizException(ErrorCodeEnum.TestConfigurationNotFound)
      }

      if (input.versionId && existing.versionId !== input.versionId) {
        await this.ensureVersionMatchesTest(testId, input.versionId)
      }

      await tx.testCatalogConfiguration.update({
        where: { id: configurationId },
        data: this.buildOperationalConfigurationData(testId, input),
      })

      await this.replaceOperationalOverrides(tx, configurationId, input)

      return tx.testCatalogConfiguration.findUniqueOrThrow({
        where: { id: configurationId },
        include: this.operationalInclude,
      })
    })

    return this.mapOperationalVariant(configuration)
  }

  async listCustomerVariants(testId: string) {
    await this.ensureTestExists(testId)

    const configs = await this.db.prisma.testCatalogConfiguration.findMany({
      where: {
        testId,
        type: $Enums.TestCatalogConfigurationType.CUSTOMER,
      },
      include: {
        version: {
          select: {
            versionNumber: true,
          },
        },
      },
      orderBy: { updatedAt: 'desc' },
    })

    return configs.map((config) => this.mapCustomerVariant(config))
  }

  async upsertCustomerVariant(
    testId: string,
    configurationId: string | undefined,
    input: UpsertCustomerVariantInput,
  ) {
    await this.ensureVersionMatchesTest(testId, input.versionId ?? undefined, true)

    const data = this.buildCustomerConfigurationData(testId, input)

    const configuration = await this.db.prisma.testCatalogConfiguration.upsert({
      where: configurationId
        ? { id: configurationId }
        : { id: '00000000-0000-0000-0000-000000000000' }, // impossible id to trigger create
      create: data,
      update: data,
      include: {
        version: {
          select: { versionNumber: true },
        },
      },
    })

    if (configuration.testId !== testId) {
      throw new BizException(ErrorCodeEnum.TestConfigurationNotFound)
    }

    return this.mapCustomerVariant(configuration)
  }

  async bulkUpsertBiomarkerOverrides(configurationId: string, overrides: any[]) {
    await this.ensureConfigurationExists(configurationId)

    await this.db.prisma.$transaction(async (tx) => {
      for (const override of overrides) {
        await tx.testConfigBiomarker.upsert({
          where: {
            configurationId_hgncId: {
              configurationId,
              hgncId: override.hgncId,
            },
          },
          update: {
            action: override.action,
            transcriptReference: override.transcriptReference ?? null,
            reportTier: override.reportTier ?? null,
            isReportable: override.isReportable ?? null,
            displayOrder: override.displayOrder ?? null,
            notes: override.notes ?? null,
          },
          create: {
            configurationId,
            hgncId: override.hgncId,
            action: override.action,
            transcriptReference: override.transcriptReference ?? null,
            reportTier: override.reportTier ?? null,
            isReportable: override.isReportable ?? null,
            displayOrder: override.displayOrder ?? null,
            notes: override.notes ?? null,
          },
        })
      }
    })

    return this.getBiomarkerOverrides(configurationId)
  }

  async deleteBiomarkerOverrides(configurationId: string, hgncIds: string[]) {
    await this.ensureConfigurationExists(configurationId)
    await this.db.prisma.testConfigBiomarker.deleteMany({
      where: {
        configurationId,
        hgncId: { in: hgncIds },
      },
    })
    return this.getBiomarkerOverrides(configurationId)
  }

  async getMasterDefaults(versionId: string) {
    const version = await this.db.prisma.testCatalogVersion
      .findUnique({
        where: { id: versionId },
        select: {
          id: true,
          testId: true,
          turnAroundTime: true,
          specialNotes: true,
          patientResources: true,
          providerResources: true,
        },
      })
      .catch(() => null)

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    const [specimens, cptCodes, orderLoincs, resultLoincs, biomarkersRaw] = await Promise.all([
      this.testsService.getVersionSpecimensByVersion(versionId),
      this.testsService.getVersionCptCodesByVersion(versionId),
      this.testsService.getVersionLoincCodesByVersion(versionId, 'ORDER'),
      this.testsService.getVersionLoincCodesByVersion(versionId, 'RESULT'),
      this.testsService.getVersionBiomarkersByVersion(versionId),
    ])

    const biomarkers = biomarkersRaw.map((biomarker) => ({
      ...biomarker,
      biomarker: {
        hgncApprovedSymbol: (biomarker as any).symbol ?? null,
        hgncApprovedName: (biomarker as any).name ?? null,
      },
    }))

    const hasLogistics =
      version.specialNotes || version.patientResources || version.providerResources

    const logistics = hasLogistics
      ? {
          specialHandling: version.specialNotes ?? null,
          patientInstructions: version.patientResources ?? null,
          providerInstructions: version.providerResources ?? null,
        }
      : null

    return {
      specimens,
      cptCodes,
      orderLoincs,
      resultLoincs,
      biomarkers,
      turnaround: version.turnAroundTime ?? null,
      logistics,
    }
  }

  async getVariantDiff(versionId: string, configurationId?: string) {
    const version = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { id: true, testId: true },
    })

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    const master = await this.getMasterDefaults(versionId)

    let configuration: OperationalConfigurationPayload | null = null
    if (configurationId) {
      configuration = await this.db.prisma.testCatalogConfiguration.findUnique({
        where: { id: configurationId },
        include: this.operationalInclude,
      })

      if (!configuration || configuration.testId !== version.testId) {
        throw new BizException(ErrorCodeEnum.TestConfigurationNotFound)
      }
    }

    const variant = configuration ? this.mapOperationalVariant(configuration) : null

    const sectionsOverridden: string[] = []
    if (variant) {
      if (variant.specimenManifest.length > 0) {
        sectionsOverridden.push('specimenManifest')
      }
      if (variant.cptOverrides.length > 0) {
        sectionsOverridden.push('cpt')
      }
      if (variant.orderLoincOverrides.length > 0) {
        sectionsOverridden.push('orderLoinc')
      }
      if (variant.resultLoincOverrides.length > 0) {
        sectionsOverridden.push('resultLoinc')
      }
      if (variant.biomarkerOverrides.length > 0) {
        sectionsOverridden.push('biomarkers')
      }
    }

    const masterBiomarkers: MasterBiomarkerSnapshot[] = (master.biomarkers ?? []).map(
      (item: any) => ({
        hgncId: item.hgncId,
        symbol: item.symbol ?? item.biomarker?.hgncApprovedSymbol ?? item.biomarker?.symbol ?? null,
        name: item.name ?? item.biomarker?.hgncApprovedName ?? item.biomarker?.name ?? null,
        transcriptReference: item.transcriptReference ?? null,
      }),
    )

    const finalBiomarkers = this.buildFinalBiomarkers(
      masterBiomarkers,
      variant?.biomarkerOverrides ?? [],
    )

    return {
      variant,
      diff: {
        sectionsOverridden,
        finalBiomarkers,
      },
    }
  }

  async resolveVariant(input: ResolveVariantInputType) {
    const { testId, dimension, dimensionValue, orderDate, versionId } = input

    const version = await this.resolveVersionForTest(testId, versionId)
    const normalizedValue = dimensionValue.trim()
    const orderDateValue = this.parseOrderDate(orderDate)

    const where: Prisma.TestCatalogConfigurationWhereInput = {
      testId,
      type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
      dimension,
      isActive: true,
      AND: [
        {
          OR: [{ effectiveDate: null }, { effectiveDate: { lte: orderDateValue } }],
        },
        {
          OR: [{ expirationDate: null }, { expirationDate: { gte: orderDateValue } }],
        },
      ],
    }

    if (normalizedValue) {
      ;(where.dimensionValue as Prisma.StringFilter) = {
        equals: normalizedValue,
        mode: Prisma.QueryMode.insensitive,
      }
    }

    if (version.id) {
      where.OR = [{ versionId: version.id }, { versionId: null }]
    }

    const configurations = await this.db.prisma.testCatalogConfiguration.findMany({
      where,
      include: this.operationalInclude,
      orderBy: [{ versionNumber: 'desc' }, { effectiveDate: 'desc' }, { createdAt: 'desc' }],
    })

    const selectedConfiguration = this.pickBestConfiguration(configurations, version.id)
    const resolvedVariant = selectedConfiguration
      ? this.mapOperationalVariant(selectedConfiguration)
      : null

    const orderForm = await this.resolveOrderFormSections(
      testId,
      version.id,
      resolvedVariant?.id ?? null,
    )

    const fileUploads: FileUploadRequirement[] = []

    return {
      versionId: version.id,
      configurationId: resolvedVariant?.id ?? null,
      orderForm,
      fileUploads,
    }
  }

  private buildFinalBiomarkers(
    master: MasterBiomarkerSnapshot[],
    overrides: OperationalVariantBiomarkerOverride[],
  ): OperationalVariantFinalBiomarker[] {
    const finalMap = new Map<string, OperationalVariantFinalBiomarker>()

    for (const biomarker of master) {
      finalMap.set(biomarker.hgncId, {
        hgncId: biomarker.hgncId,
        symbol: biomarker.symbol,
        name: biomarker.name,
        transcriptReference: biomarker.transcriptReference,
        reportTier: null,
        isReportable: null,
        displayOrder: null,
        notes: null,
        source: 'MASTER',
      })
    }

    const sortedOverrides = overrides.slice().sort((a, b) => {
      const orderA = a.displayOrder ?? Number.MAX_SAFE_INTEGER
      const orderB = b.displayOrder ?? Number.MAX_SAFE_INTEGER
      if (orderA !== orderB) {
        return orderA - orderB
      }
      return a.hgncId.localeCompare(b.hgncId)
    })

    for (const override of sortedOverrides) {
      if (override.action === 'EXCLUDE') {
        finalMap.delete(override.hgncId)
        continue
      }

      const existing = finalMap.get(override.hgncId) ?? {
        hgncId: override.hgncId,
        symbol: null,
        name: null,
        transcriptReference: null,
        reportTier: null,
        isReportable: null,
        displayOrder: null,
        notes: null,
        source: 'MASTER' as const,
      }

      const symbol = override.symbol ?? existing.symbol
      const name = override.name ?? existing.name
      const transcriptReference = override.transcriptReference ?? existing.transcriptReference
      const reportTier = override.reportTier ?? existing.reportTier
      const isReportable =
        typeof override.isReportable === 'boolean' ? override.isReportable : existing.isReportable
      const displayOrder = override.displayOrder ?? existing.displayOrder
      const notes = override.notes ?? existing.notes

      if (override.action === 'INCLUDE') {
        finalMap.set(override.hgncId, {
          hgncId: override.hgncId,
          symbol,
          name,
          transcriptReference,
          reportTier,
          isReportable,
          displayOrder,
          notes,
          source: 'INCLUDE',
        })
        continue
      }

      finalMap.set(override.hgncId, {
        hgncId: override.hgncId,
        symbol,
        name,
        transcriptReference,
        reportTier,
        isReportable,
        displayOrder,
        notes,
        source: 'OVERRIDE',
      })
    }

    return Array.from(finalMap.values()).sort((a, b) => {
      const orderA = a.displayOrder ?? Number.MAX_SAFE_INTEGER
      const orderB = b.displayOrder ?? Number.MAX_SAFE_INTEGER
      if (orderA !== orderB) {
        return orderA - orderB
      }
      return a.hgncId.localeCompare(b.hgncId)
    })
  }

  private async resolveOrderFormSections(
    testId: string,
    versionId: string,
    configurationId: string | null,
  ): Promise<ResolvedOrderFormSection[]> {
    const baseAssignments = await this.orderFormsService.getAssignments(testId, versionId)
    const variantAssignments = configurationId
      ? await this.orderFormsService.getAssignments(testId, versionId, configurationId)
      : { items: [] }

    const merged = [...baseAssignments.items, ...variantAssignments.items]

    return merged.map((assignment) => {
      const template = assignment.template
      const section = template?.section

      return {
        assignmentId: assignment.id,
        sectionId: section?.id ?? template?.orderFormSectionId ?? assignment.orderFormTemplateId,
        sectionName: section?.name ?? template?.name ?? 'General',
        templateId: assignment.orderFormTemplateId,
        templateName: template?.name ?? 'Untitled',
        displayOrder: assignment.displayOrder,
        isRequired: assignment.isRequired,
        isVisible: assignment.isVisible,
        customTitle: assignment.customTitle ?? null,
        formSchema: template?.formSchema ?? null,
        layoutSchema: template?.layoutSchema ?? null,
      }
    })
  }

  private async resolveVersionForTest(testId: string, versionId?: string) {
    if (versionId) {
      const version = await this.db.prisma.testCatalogVersion.findUnique({
        where: { id: versionId },
        select: { id: true, testId: true, versionNumber: true },
      })

      if (!version || version.testId !== testId) {
        throw new BizException(ErrorCodeEnum.TestVersionNotFound)
      }

      return version
    }

    let version = await this.db.prisma.testCatalogVersion.findFirst({
      where: { testId, status: 'PUBLISHED' },
      orderBy: { versionNumber: 'desc' },
    })

    if (!version) {
      version = await this.db.prisma.testCatalogVersion.findFirst({
        where: { testId },
        orderBy: { versionNumber: 'desc' },
      })
    }

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    return version
  }

  private pickBestConfiguration(
    configurations: OperationalConfigurationPayload[],
    versionId: string,
  ): OperationalConfigurationPayload | null {
    if (configurations.length === 0) {
      return null
    }

    const exactMatch = configurations.find((configuration) => configuration.versionId === versionId)
    return exactMatch ?? configurations[0]
  }

  private parseOrderDate(value?: string | null) {
    if (!value) {
      return new Date()
    }

    const parsed = new Date(value)
    return Number.isNaN(parsed.valueOf()) ? new Date() : parsed
  }

  private async getBiomarkerOverrides(configurationId: string) {
    const overrides = await this.db.prisma.testConfigBiomarker.findMany({
      where: { configurationId },
      include: {
        biomarker: {
          select: {
            hgncApprovedSymbol: true,
            hgncApprovedName: true,
          },
        },
      },
      orderBy: { displayOrder: 'asc' },
    })

    return {
      overrides: overrides.map((override) => ({
        id: override.id,
        hgncId: override.hgncId,
        action: override.action,
        transcriptReference: override.transcriptReference ?? null,
        reportTier: override.reportTier ?? null,
        isReportable: override.isReportable ?? null,
        displayOrder: override.displayOrder ?? null,
        notes: override.notes ?? null,
        symbol: override.biomarker?.hgncApprovedSymbol ?? null,
        name: override.biomarker?.hgncApprovedName ?? null,
      })),
      finalBiomarkers: overrides.map((override) => ({
        hgncId: override.hgncId,
        symbol: override.biomarker?.hgncApprovedSymbol ?? null,
        name: override.biomarker?.hgncApprovedName ?? null,
        transcriptReference: override.transcriptReference ?? null,
        reportTier: override.reportTier ?? null,
        isReportable: override.isReportable ?? null,
        displayOrder: override.displayOrder ?? null,
        notes: override.notes ?? null,
        source: override.action === 'OVERRIDE' ? 'OVERRIDE' : 'INCLUDE',
      })),
    }
  }

  private mapOperationalVariant(config: OperationalConfigurationPayload) {
    return {
      id: config.id,
      testId: config.testId,
      versionId: config.versionId ?? null,
      configurationName: config.configurationName,
      versionNumber: config.version?.versionNumber ?? config.versionNumber,
      dimension: config.dimension,
      dimensionValue: config.dimensionValue,
      familyStructure: (config as any).familyStructure ?? null,
      operationalCode: config.operationalCode ?? null,
      status: config.status,
      isActive: config.isActive,
      effectiveDate: config.effectiveDate?.toISOString() ?? null,
      expirationDate: config.expirationDate?.toISOString() ?? null,
      createdAt: config.createdAt.toISOString(),
      updatedAt: config.updatedAt.toISOString(),
      cptOverrides: config.cptOverrides.map((cpt) => ({
        id: cpt.id,
        cptCode: cpt.cptCode,
        modifier: cpt.modifier ?? null,
        isPrimary: cpt.isPrimary ?? false,
      })),
      orderLoincOverrides: config.orderLoincOverrides.map((loinc) => ({
        id: loinc.id,
        loincCode: loinc.loincCode,
      })),
      resultLoincOverrides: config.resultLoincOverrides.map((loinc) => ({
        id: loinc.id,
        loincCode: loinc.loincCode,
        resultCode: loinc.resultCode ?? null,
        resultCodeName: loinc.resultCodeName ?? null,
        uom: loinc.uom ?? null,
      })),
      specimenManifest: config.specimenManifestEntries.map((entry) => ({
        id: entry.id,
        versionSpecimenId: entry.versionSpecimenId,
        specimenDisplayName: entry.specimenDisplayNameOverride ?? null,
        participantRole: entry.participantRole,
        isRequired: entry.isRequired ?? true,
        specimenTypeOverride: entry.specimenTypeOverride ?? null,
        specimenDisplayNameOverride: entry.specimenDisplayNameOverride ?? null,
        volumeOverride: entry.volumeOverride ?? null,
        minimumVolumeOverride: entry.minimumVolumeOverride ?? null,
        preferredVolumeOverride: entry.preferredVolumeOverride ?? null,
        alternateContainersOverride: entry.alternateContainersOverride ?? null,
        containerOverride: entry.containerOverride ?? null,
        specialInstructionsOverride: entry.specialInstructionsOverride ?? null,
        collectionMethodOverride: entry.collectionMethodOverride ?? null,
        specimenRequirementsOverride: entry.specimenRequirementsOverride ?? null,
        collectionOverride: entry.collectionOverride ?? null,
        stabilityRequirementsOverride: entry.stabilityRequirementsOverride ?? null,
        storageTransportationOverride: entry.storageTransportationOverride ?? null,
        patientPreparationOverride: entry.patientPreparationOverride ?? null,
        causesForRejectionOverride: entry.causesForRejectionOverride ?? null,
        processingNotesOverride: entry.processingNotesOverride ?? null,
        displayOrder: entry.displayOrder ?? null,
      })),
      biomarkerOverrides: config.biomarkerOverrides.map((override) => ({
        id: override.id,
        hgncId: override.hgncId,
        action: override.action,
        transcriptReference: override.transcriptReference ?? null,
        reportTier: override.reportTier ?? null,
        isReportable: override.isReportable ?? null,
        displayOrder: override.displayOrder ?? null,
        notes: override.notes ?? null,
        symbol: override.biomarker?.hgncApprovedSymbol ?? null,
        name: override.biomarker?.hgncApprovedName ?? null,
      })),
      finalBiomarkers: [],
    }
  }

  private mapCustomerVariant(config: CustomerConfigurationPayload) {
    return {
      id: config.id,
      testId: config.testId,
      versionId: config.versionId ?? null,
      configurationName: config.configurationName,
      versionNumber: config.version?.versionNumber ?? config.versionNumber,
      customerId: config.customerId ?? null,
      organizationId: config.organizationId ?? null,
      status: config.status,
      isActive: config.isActive,
      effectiveDate: config.effectiveDate?.toISOString() ?? null,
      expirationDate: config.expirationDate?.toISOString() ?? null,
      customTestName: config.customTestName ?? null,
      customDescription: config.customDescription ?? null,
      customTurnAroundTime: config.customTurnAroundTime ?? null,
      customPricing: config.customPricing ? Number(config.customPricing) : null,
      customInstructions: config.customInstructions ?? null,
      createdAt: config.createdAt.toISOString(),
      updatedAt: config.updatedAt.toISOString(),
    }
  }

  private buildOperationalConfigurationData(
    testId: string,
    input: CreateOperationalVariantInput | UpdateOperationalVariantInput,
  ): Prisma.TestCatalogConfigurationUncheckedCreateInput {
    return {
      testId,
      versionId: input.versionId,
      configurationName: input.configurationName,
      versionNumber: 1,
      type: $Enums.TestCatalogConfigurationType.OPERATIONAL,
      dimension: input.dimension,
      dimensionValue: input.dimensionValue,
      operationalCode: input.operationalCode ?? null,
      status: input.status,
      isActive: input.isActive ?? true,
      effectiveDate: input.effectiveDate ? new Date(input.effectiveDate) : null,
      expirationDate: input.expirationDate ? new Date(input.expirationDate) : null,
      createdBy: null,
    }
  }

  private buildCustomerConfigurationData(
    testId: string,
    input: UpsertCustomerVariantInput,
  ): Prisma.TestCatalogConfigurationUncheckedCreateInput {
    return {
      testId,
      versionId: input.versionId ?? null,
      configurationName: input.configurationName,
      versionNumber: 1,
      customerId: input.customerId ?? null,
      organizationId: input.organizationId ?? null,
      type: $Enums.TestCatalogConfigurationType.CUSTOMER,
      dimension: $Enums.VariantDimension.OPERATIONAL_MODE,
      dimensionValue: 'CUSTOMER',
      status: input.status,
      isActive: input.isActive ?? true,
      effectiveDate: input.effectiveDate ? new Date(input.effectiveDate) : null,
      expirationDate: input.expirationDate ? new Date(input.expirationDate) : null,
      customTestName: input.customTestName ?? null,
      customDescription: input.customDescription ?? null,
      customTurnAroundTime: input.customTurnAroundTime ?? null,
      customPricing:
        typeof input.customPricing === 'number' ? new Prisma.Decimal(input.customPricing) : null,
      customInstructions: input.customInstructions ?? null,
      createdBy: null,
    }
  }

  private async replaceOperationalOverrides(
    tx: Prisma.TransactionClient,
    configurationId: string,
    input: {
      cptOverrides?: Array<{ _delete?: boolean } & Record<string, any>>
      orderLoincOverrides?: Array<{ _delete?: boolean } & Record<string, any>>
      resultLoincOverrides?: Array<{ _delete?: boolean } & Record<string, any>>
      specimenManifest?: Array<{ _delete?: boolean } & Record<string, any>>
      biomarkerOverrides?: Array<{ _delete?: boolean } & Record<string, any>>
    },
  ) {
    if (input.cptOverrides) {
      await tx.testConfigCptCode.deleteMany({ where: { configurationId } })
      const data = input.cptOverrides
        .filter((item) => !item._delete)
        .map((item) => ({
          configurationId,
          cptCode: item.cptCode,
          modifier: item.modifier ?? null,
          isPrimary: item.isPrimary ?? false,
        }))
      if (data.length) {
        await tx.testConfigCptCode.createMany({ data })
      }
    }

    if (input.orderLoincOverrides) {
      await tx.testConfigOrderLoinc.deleteMany({ where: { configurationId } })
      const data = input.orderLoincOverrides
        .filter((item) => !item._delete)
        .map((item) => ({
          configurationId,
          loincCode: item.loincCode,
        }))
      if (data.length) {
        await tx.testConfigOrderLoinc.createMany({ data })
      }
    }

    if (input.resultLoincOverrides) {
      await tx.testConfigResultLoinc.deleteMany({ where: { configurationId } })
      const data = input.resultLoincOverrides
        .filter((item) => !item._delete)
        .map((item) => ({
          configurationId,
          loincCode: item.loincCode,
          resultCode: item.resultCode ?? null,
          resultCodeName: item.resultCodeName ?? null,
          uom: item.uom ?? null,
        }))
      if (data.length) {
        await tx.testConfigResultLoinc.createMany({ data })
      }
    }

    if (input.specimenManifest) {
      await tx.testConfigSpecimenManifest.deleteMany({ where: { configurationId } })
      const data = input.specimenManifest
        .filter((item) => !item._delete)
        .map((item) => ({
          configurationId,
          versionSpecimenId: item.versionSpecimenId,
          specimenDisplayName: item.specimenDisplayName ?? null,
          participantRole: item.participantRole,
          isRequired: item.isRequired ?? true,
          specimenTypeOverride: item.specimenTypeOverride ?? null,
          specimenDisplayNameOverride: item.specimenDisplayNameOverride ?? null,
          volumeOverride: item.volumeOverride ?? null,
          minimumVolumeOverride: item.minimumVolumeOverride ?? null,
          preferredVolumeOverride: item.preferredVolumeOverride ?? null,
          alternateContainersOverride: item.alternateContainersOverride ?? null,
          containerOverride: item.containerOverride ?? null,
          specialInstructionsOverride: item.specialInstructionsOverride ?? null,
          collectionMethodOverride: item.collectionMethodOverride ?? null,
          specimenRequirementsOverride: item.specimenRequirementsOverride ?? null,
          collectionOverride: item.collectionOverride ?? null,
          stabilityRequirementsOverride: item.stabilityRequirementsOverride ?? null,
          storageTransportationOverride: item.storageTransportationOverride ?? null,
          patientPreparationOverride: item.patientPreparationOverride ?? null,
          causesForRejectionOverride: item.causesForRejectionOverride ?? null,
          processingNotesOverride: item.processingNotesOverride ?? null,
          displayOrder: item.displayOrder ?? 0,
        }))
      if (data.length) {
        await tx.testConfigSpecimenManifest.createMany({ data })
      }
    }

    if (input.biomarkerOverrides) {
      await tx.testConfigBiomarker.deleteMany({ where: { configurationId } })
      for (const item of input.biomarkerOverrides) {
        if (item._delete) continue
        await tx.testConfigBiomarker.create({
          data: {
            configurationId,
            hgncId: item.hgncId,
            action: item.action,
            transcriptReference: item.transcriptReference ?? null,
            reportTier: item.reportTier ?? null,
            isReportable: item.isReportable ?? null,
            displayOrder: item.displayOrder ?? null,
            notes: item.notes ?? null,
          },
        })
      }
    }
  }

  private async ensureTestExists(testId: string) {
    await this.db.prisma.testCatalog
      .findUniqueOrThrow({
        where: { id: testId },
        select: { id: true },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))
  }

  private async ensureConfigurationExists(configurationId: string) {
    await this.db.prisma.testCatalogConfiguration
      .findUniqueOrThrow({
        where: { id: configurationId },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestConfigurationNotFound)))
  }

  private async ensureVersionMatchesTest(testId: string, versionId?: string, optional = false) {
    if (!versionId) {
      if (optional) return
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }
    const version = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { testId: true },
    })
    if (!version || version.testId !== testId) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }
  }

  private readonly operationalInclude = operationalVariantInclude
}

type OperationalConfigurationPayload = Prisma.TestCatalogConfigurationGetPayload<{
  include: typeof operationalVariantInclude
}>

type CustomerConfigurationPayload = Prisma.TestCatalogConfigurationGetPayload<{
  include: { version: { select: { versionNumber: true } } }
}>

type MasterBiomarkerSnapshot = {
  hgncId: string
  symbol: string | null
  name: string | null
  transcriptReference: string | null
}
