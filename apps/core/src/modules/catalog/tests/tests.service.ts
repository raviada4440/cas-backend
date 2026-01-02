import { Injectable } from '@nestjs/common'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Prisma, $Enums, TestCatalogVersion, TestCatalogAuditLog } from '@db/client'

import {
  CloneVersionInput,
  CreateDraftVersionInput,
  CreateTestInput,
  AuditLog,
  ListTestsQuery,
  LabTestLookupResponse,
  PublishVersionInput,
  RetireVersionInput,
  SetDefaultVersionInput,
  TestDetail,
  TestSearchQuery,
  TestListResponse,
  TestVersionDetail,
  UpdateTestInput,
  UpdateVersionBiomarkersDto,
  UpdateVersionCptCodesDto,
  UpdateVersionLoincCodesDto,
  UpdateVersionSpecimensDto,
  VersionUpdateInput,
} from './tests.dto'

const versionInclude = {
  specimens: {
    orderBy: { displayOrder: 'asc' },
    include: {
      variantManifests: {
        select: {
          id: true,
          configurationId: true,
          versionSpecimenId: true,
          participantRole: true,
          isRequired: true,
          specimenTypeOverride: true,
          specimenDisplayNameOverride: true,
          volumeOverride: true,
          minimumVolumeOverride: true,
          preferredVolumeOverride: true,
          alternateContainersOverride: true,
          containerOverride: true,
          specialInstructionsOverride: true,
          collectionMethodOverride: true,
          specimenRequirementsOverride: true,
          collectionOverride: true,
          stabilityRequirementsOverride: true,
          storageTransportationOverride: true,
          patientPreparationOverride: true,
          causesForRejectionOverride: true,
          processingNotesOverride: true,
          displayOrder: true,
          configuration: {
            select: {
              configurationName: true,
            },
          },
        },
      },
    },
  },
  cptCodes: true,
  orderLoincs: true,
  resultLoincs: true,
  biomarkers: true,
} as const

type VersionWithRelations = Prisma.TestCatalogVersionGetPayload<{ include: typeof versionInclude }>
type SpecimenWithManifests = VersionWithRelations['specimens'][number]
type AuditLogPerformer = { id: string; name: string | null; email: string | null }

@Injectable()
export class TestsService {
  constructor(private readonly db: DatabaseService) {}

  private readonly versionBaseFields: Array<keyof Prisma.TestCatalogVersionUncheckedCreateInput> = [
    'versionNumber',
    'status',
    'effectiveDate',
    'retiredDate',
    'changeReason',
    'changeNotes',
    'href',
    'testName',
    'alternativeName',
    'alternativeName1',
    'alternativeName2',
    'alternativeName3',
    'alternativeName4',
    'alternativeName5',
    'testIncludes',
    'methodology',
    'testDescription',
    'diseases',
    'probes',
    'clinicalSignificance',
    'diseaseIndications',
    'testUsage',
    'testLimitations',
    'isNewYorkApproved',
    'isFDAApproved',
    'levelOfService',
    'turnAroundTime',
    'referenceRanges',
    'setupSchedule',
    'testCategory',
    'testSubCategory',
    'specialNotes',
    'patientResources',
    'providerResources',
    'patientResourcesUrl',
    'providerResourcesUrl',
    'additionalNotes',
    'createdBy',
  ]

  private pickVersionFields(
    source: TestCatalogVersion,
  ): Partial<Prisma.TestCatalogVersionUncheckedCreateInput> {
    const data: Partial<Prisma.TestCatalogVersionUncheckedCreateInput> = {}
    for (const key of this.versionBaseFields) {
      if (key === 'versionNumber' || key === 'status') {
        continue
      }
      const value = (source as any)[key]
      if (typeof value !== 'undefined') {
        data[key] = value ?? null
      }
    }
    return data
  }

  async list(query: ListTestsQuery): Promise<TestListResponse> {
    const { cursor, limit = 20, q, labId } = query
    const take = Math.min(Math.max(limit, 1), 100)

    const where: Prisma.TestCatalogWhereInput = {}
    if (labId) {
      where.labId = labId
    }

    if (q && q.trim().length > 0) {
      where.OR = [
        { testName: { contains: q, mode: Prisma.QueryMode.insensitive } },
        { casandraTestId: { contains: q, mode: Prisma.QueryMode.insensitive } },
        { testCategory: { contains: q, mode: Prisma.QueryMode.insensitive } },
        { testSubCategory: { contains: q, mode: Prisma.QueryMode.insensitive } },
      ]
    }

    const tests = await this.db.prisma.testCatalog.findMany({
      where,
      take: take + 1,
      orderBy: {
        updatedAt: 'desc',
      },
      select: {
        id: true,
        testName: true,
        status: true,
        casandraTestId: true,
        defaultVersion: {
          select: {
            id: true,
            versionNumber: true,
            status: true,
            effectiveDate: true,
            retiredDate: true,
            turnAroundTime: true,
            createdAt: true,
            updatedAt: true,
            href: true,
          },
        },
        lab: {
          select: {
            labName: true,
          },
        },
        _count: {
          select: {
            versions: true,
          },
        },
      },
      ...(cursor
        ? {
            cursor: { id: cursor },
            skip: 1,
          }
        : {}),
    })

    const hasNext = tests.length > take
    const trimmed = hasNext ? tests.slice(0, take) : tests

    return {
      items: trimmed.map((test) => ({
        testId: test.id,
        testName: test.testName ?? '',
        labName: test.lab?.labName ?? null,
        defaultVersion: test.defaultVersion?.versionNumber ?? null,
        version: test.defaultVersion
          ? {
              id: test.defaultVersion.id,
              versionNumber: test.defaultVersion.versionNumber,
              status: test.defaultVersion.status,
              effectiveDate: test.defaultVersion.effectiveDate,
              retiredDate: test.defaultVersion.retiredDate,
              turnAroundTime: test.defaultVersion.turnAroundTime,
              createdAt: test.defaultVersion.createdAt ?? undefined,
              updatedAt: test.defaultVersion.updatedAt ?? undefined,
              href: test.defaultVersion.href ?? undefined,
            }
          : null,
        status: test.status,
        casandraTestId: test.casandraTestId ?? null,
        versionsCount: test._count.versions,
      })),
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.id ?? null : null,
    }
  }

  async search(query: TestSearchQuery): Promise<LabTestLookupResponse> {
    const take = Math.min(query.limit ?? 20, 100)
    const where: Prisma.TestCatalogWhereInput = {
      labId: query.labId,
    }

    const searchTerm = query.q?.trim()
    if (searchTerm) {
      where.OR = [
        { testName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        { casandraTestId: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        { labTestId: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
      ]
    }

    const tests = await this.db.prisma.testCatalog.findMany({
      where,
      orderBy: [{ testName: 'asc' }, { createdAt: 'desc' }],
      take,
      include: {
        lab: {
          select: {
            labName: true,
          },
        },
        defaultVersion: {
          select: {
            versionNumber: true,
            testName: true,
          },
        },
        versions: {
          orderBy: { versionNumber: 'desc' },
          take: 1,
          select: {
            versionNumber: true,
          },
        },
      },
    })

    return {
      items: tests.map((test) => ({
        id: test.id,
        testName: test.testName ?? test.defaultVersion?.testName ?? '',
        casandraTestId: test.casandraTestId ?? null,
        versionNumber:
          test.defaultVersion?.versionNumber ?? test.versions[0]?.versionNumber ?? null,
        labName: test.lab?.labName ?? null,
      })),
    }
  }

  async get(testId: string, versionId?: string): Promise<TestDetail> {
    const test = await this.db.prisma.testCatalog
      .findUniqueOrThrow({
        where: { id: testId },
        select: {
          id: true,
          testName: true,
          labId: true,
          labTestId: true,
          lab: { select: { labName: true } },
          status: true,
          defaultVersionId: true,
          casandraTestId: true,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))

    const version = await this.findVersion(testId, versionId ?? test.defaultVersionId)

    return {
      testId: test.id,
      testName: test.testName ?? '',
      labId: test.labId ?? null,
      labName: test.lab?.labName ?? null,
      labTestId: test.labTestId ?? null,
      casandraTestId: test.casandraTestId ?? null,
      status: test.status,
      version,
    }
  }

  async create(input: CreateTestInput): Promise<TestDetail> {
    const test = await this.db.prisma.testCatalog.create({
      data: {
        testName: input.testName,
        labId: input.labId ?? null,
        testCategory: input.category ?? null,
        testSubCategory: input.subCategory ?? null,
        status: $Enums.TestCatalogStatus.DRAFT,
      },
    })

    return this.get(test.id)
  }

  async update(testId: string, input: UpdateTestInput): Promise<TestDetail> {
    await this.db.prisma.testCatalog
      .update({
        where: { id: testId },
        data: {
          testName: input.testName ?? undefined,
          labId: input.labId ?? undefined,
          status: input.status as $Enums.TestCatalogStatus | undefined,
          testCategory: input.category ?? undefined,
          testSubCategory: input.subCategory ?? undefined,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))

    return this.get(testId)
  }

  async listVersions(testId: string) {
    const versions = await this.db.prisma.testCatalogVersion.findMany({
      where: { testId },
      orderBy: { versionNumber: 'desc' },
      select: {
        id: true,
        versionNumber: true,
        status: true,
        effectiveDate: true,
        retiredDate: true,
        methodology: true,
        turnAroundTime: true,
        createdAt: true,
        test: {
          select: {
            defaultVersionId: true,
          },
        },
      },
    })

    return versions.map((version) => ({
      id: version.id,
      versionNumber: version.versionNumber,
      status: version.status,
      isDefault: version.test?.defaultVersionId === version.id,
      effectiveDate: version.effectiveDate?.toISOString() ?? null,
      retiredDate: version.retiredDate?.toISOString() ?? null,
      methodology: version.methodology ?? null,
      turnAroundTime: version.turnAroundTime ?? null,
      createdAt: version.createdAt.toISOString(),
    }))
  }

  async createDraftVersion(testId: string, input: CreateDraftVersionInput) {
    const test = await this.ensureTestExists(testId)

    const latestVersion = await this.db.prisma.testCatalogVersion.findFirst({
      where: { testId },
      orderBy: { versionNumber: 'desc' },
    })

    const source = input.sourceVersionId ?? latestVersion?.id ?? test.defaultVersionId ?? null

    let baseData: Partial<Prisma.TestCatalogVersionUncheckedCreateInput> = {}
    if (source) {
      const sourceVersion = await this.db.prisma.testCatalogVersion.findUnique({
        where: { id: source },
      })
      if (!sourceVersion) {
        throw new BizException(ErrorCodeEnum.TestVersionNotFound)
      }
      baseData = this.pickVersionFields(sourceVersion)
    } else {
      baseData = {
        testName: test.testName,
        status: $Enums.TestCatalogVersionStatus.DRAFT,
      }
    }

    const nextVersionNumber = (latestVersion?.versionNumber ?? 0) + 1

    const created = await this.db.prisma.testCatalogVersion.create({
      data: {
        ...baseData,
        testId,
        versionNumber: nextVersionNumber,
        status: $Enums.TestCatalogVersionStatus.DRAFT,
        changeReason: input.changeReason ?? null,
        changeNotes: input.changeNotes ?? null,
        createdBy: input.requestedBy ?? baseData.createdBy ?? null,
      },
    })

    return this.mapVersion(
      await this.db.prisma.testCatalogVersion.findUniqueOrThrow({
        where: { id: created.id },
        include: versionInclude,
      }),
    )
  }

  async cloneVersion(testId: string, versionId: string, input: CloneVersionInput) {
    const source = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
    })
    if (!source || source.testId !== testId) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }
    const latest = await this.db.prisma.testCatalogVersion.findFirst({
      where: { testId },
      orderBy: { versionNumber: 'desc' },
    })

    const created = await this.db.prisma.testCatalogVersion.create({
      data: {
        ...this.pickVersionFields(source),
        testId,
        versionNumber: (latest?.versionNumber ?? 0) + 1,
        status: $Enums.TestCatalogVersionStatus.DRAFT,
        changeReason: input.changeReason ?? null,
        changeNotes: input.changeNotes ?? null,
        createdBy: input.requestedBy ?? source.createdBy ?? null,
      },
    })

    return this.mapVersion(
      await this.db.prisma.testCatalogVersion.findUniqueOrThrow({
        where: { id: created.id },
        include: versionInclude,
      }),
    )
  }

  async setDefaultVersion(testId: string, input: SetDefaultVersionInput) {
    await this.ensureTestExists(testId)
    await this.db.prisma.testCatalogVersion
      .findUniqueOrThrow({ where: { id: input.versionId } })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestVersionNotFound)))

    await this.db.prisma.testCatalog.update({
      where: { id: testId },
      data: {
        defaultVersionId: input.versionId,
      },
    })

    return this.get(testId, input.versionId)
  }

  async publishVersion(testId: string, versionId: string, input: PublishVersionInput) {
    await this.ensureTestExists(testId)
    await this.db.prisma.testCatalogVersion
      .update({
        where: { id: versionId },
        data: {
          status: $Enums.TestCatalogVersionStatus.PUBLISHED,
          effectiveDate: new Date(input.effectiveDate),
          changeReason: input.changeReason ?? undefined,
          changeNotes: input.changeNotes ?? undefined,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestVersionNotFound)))

    return this.get(testId, versionId)
  }

  async retireVersion(testId: string, versionId: string, input: RetireVersionInput) {
    await this.ensureTestExists(testId)
    await this.db.prisma.testCatalogVersion
      .update({
        where: { id: versionId },
        data: {
          status: $Enums.TestCatalogVersionStatus.RETIRED,
          retiredDate: input.effectiveDate ? new Date(input.effectiveDate) : new Date(),
          changeReason: input.reason,
          changeNotes: input.changeNotes ?? undefined,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestVersionNotFound)))

    return this.get(testId, versionId)
  }

  async updateVersion(versionId: string, input: VersionUpdateInput) {
    await this.db.prisma.testCatalogVersion
      .update({
        where: { id: versionId },
        data: {
          ...input,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestVersionNotFound)))

    return this.db.prisma.testCatalogVersion
      .findUnique({
        where: { id: versionId },
        include: versionInclude,
      })
      .then((version) => {
        if (!version) {
          throw new BizException(ErrorCodeEnum.TestVersionNotFound)
        }
        return this.mapVersion(version)
      })
  }

  async updateVersionForTest(testId: string, versionId: string, input: VersionUpdateInput) {
    await this.ensureVersionMatchesTest(testId, versionId)
    return this.updateVersion(versionId, input)
  }

  async getVersionCptCodesByVersion(versionId: string) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.getVersionCptCodes(testId, versionId)
  }

  async updateVersionCptCodesByVersion(versionId: string, dto: UpdateVersionCptCodesDto) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.updateVersionCptCodes(testId, versionId, dto)
  }

  async getVersionLoincCodesByVersion(versionId: string, type: 'ORDER' | 'RESULT') {
    const testId = await this.resolveVersionTestId(versionId)
    return this.getVersionLoincCodes(testId, versionId, type)
  }

  async updateVersionLoincCodesByVersion(versionId: string, dto: UpdateVersionLoincCodesDto) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.updateVersionLoincCodes(testId, versionId, dto)
  }

  async getVersionBiomarkersByVersion(versionId: string) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.getVersionBiomarkers(testId, versionId)
  }

  async updateVersionBiomarkersByVersion(versionId: string, dto: UpdateVersionBiomarkersDto) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.updateVersionBiomarkers(testId, versionId, dto)
  }

  async getVersionSpecimensByVersion(versionId: string) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.getVersionSpecimens(testId, versionId)
  }

  async updateVersionSpecimensByVersion(versionId: string, dto: UpdateVersionSpecimensDto) {
    const testId = await this.resolveVersionTestId(versionId)
    return this.updateVersionSpecimens(testId, versionId, dto)
  }

  async getVersionCptCodes(testId: string, versionId: string) {
    await this.ensureVersionMatchesTest(testId, versionId)
    const codes = await this.db.prisma.testCatalogVersionCptCode.findMany({
      where: { versionId },
      orderBy: [{ isPrimary: 'desc' }, { cptCode: 'asc' }],
    })

    return codes.map((code) => ({
      id: code.id,
      code: code.cptCode,
      modifier: code.modifier ?? null,
      isPrimary: code.isPrimary,
    }))
  }

  async updateVersionCptCodes(testId: string, versionId: string, dto: UpdateVersionCptCodesDto) {
    await this.ensureVersionMatchesTest(testId, versionId)

    await this.db.prisma.$transaction(async (tx) => {
      await tx.testCatalogVersionCptCode.deleteMany({ where: { versionId } })

      const data = dto.codes
        .filter((code) => !code._delete)
        .map((code) => ({
          id: code.id,
          versionId,
          cptCode: code.code,
          modifier: code.modifier ?? null,
          isPrimary: code.isPrimary ?? false,
        }))

      if (data.length > 0) {
        await tx.testCatalogVersionCptCode.createMany({ data })
      }
    })

    return this.getVersionCptCodes(testId, versionId)
  }

  async getVersionLoincCodes(testId: string, versionId: string, type: 'ORDER' | 'RESULT') {
    await this.ensureVersionMatchesTest(testId, versionId)

    if (type === 'ORDER') {
      const codes = await this.db.prisma.testCatalogVersionOrderLoinc.findMany({
        where: { versionId },
        orderBy: { loincCode: 'asc' },
      })
      return codes.map((code) => ({
        id: code.id,
        loincCode: code.loincCode,
      }))
    }

    const resultCodes = await this.db.prisma.testCatalogVersionResultLoinc.findMany({
      where: { versionId },
      orderBy: { loincCode: 'asc' },
    })
    return resultCodes.map((code) => ({
      id: code.id,
      loincCode: code.loincCode,
      resultCode: code.resultCode ?? null,
      resultCodeName: code.resultCodeName ?? null,
      uom: code.uom ?? null,
    }))
  }

  async updateVersionLoincCodes(
    testId: string,
    versionId: string,
    dto: UpdateVersionLoincCodesDto,
  ) {
    await this.ensureVersionMatchesTest(testId, versionId)

    await this.db.prisma.$transaction(async (tx) => {
      if (dto.type === 'ORDER') {
        await tx.testCatalogVersionOrderLoinc.deleteMany({ where: { versionId } })
        const data = dto.codes
          .filter((code) => !code._delete)
          .map((code) => ({
            versionId,
            loincCode: code.loincCode,
          }))
        if (data.length > 0) {
          await tx.testCatalogVersionOrderLoinc.createMany({ data })
        }
      } else {
        await tx.testCatalogVersionResultLoinc.deleteMany({ where: { versionId } })
        const data = dto.codes
          .filter((code) => !code._delete)
          .map((code) => ({
            versionId,
            loincCode: code.loincCode,
            resultCode: code.resultCode ?? null,
            resultCodeName: code.resultCodeName ?? null,
            uom: code.uom ?? null,
          }))
        if (data.length > 0) {
          await tx.testCatalogVersionResultLoinc.createMany({ data })
        }
      }
    })

    return this.getVersionLoincCodes(testId, versionId, dto.type)
  }

  async getVersionBiomarkers(testId: string, versionId: string) {
    await this.ensureVersionMatchesTest(testId, versionId)
    const biomarkers = await this.db.prisma.testCatalogVersionBiomarker.findMany({
      where: { versionId },
      include: {
        biomarker: {
          select: {
            hgncApprovedSymbol: true,
            hgncApprovedName: true,
          },
        },
      },
      orderBy: { hgncId: 'asc' },
    })

    return biomarkers.map((biomarker) => ({
      id: biomarker.id,
      hgncId: biomarker.hgncId,
      transcriptReference: biomarker.transcriptReference ?? null,
      symbol: biomarker.biomarker?.hgncApprovedSymbol ?? null,
      name: biomarker.biomarker?.hgncApprovedName ?? null,
    }))
  }

  async updateVersionBiomarkers(
    testId: string,
    versionId: string,
    dto: UpdateVersionBiomarkersDto,
  ) {
    await this.ensureVersionMatchesTest(testId, versionId)

    await this.db.prisma.$transaction(async (tx) => {
      const idsToDelete = dto.biomarkers
        .filter((item) => item._delete && item.id)
        .map((item) => item.id!) // annoying but safe due to filter

      if (idsToDelete.length > 0) {
        await tx.testCatalogVersionBiomarker.deleteMany({
          where: { versionId, id: { in: idsToDelete } },
        })
      }

      for (const biomarker of dto.biomarkers.filter((item) => !item._delete)) {
        if (biomarker.id) {
          await tx.testCatalogVersionBiomarker.update({
            where: { id: biomarker.id },
            data: {
              hgncId: biomarker.hgncId,
              transcriptReference: biomarker.transcriptReference ?? null,
            },
          })
        } else {
          await tx.testCatalogVersionBiomarker.create({
            data: {
              versionId,
              hgncId: biomarker.hgncId,
              transcriptReference: biomarker.transcriptReference ?? null,
            },
          })
        }
      }
    })

    return this.getVersionBiomarkers(testId, versionId)
  }

  async getVersionSpecimens(testId: string, versionId: string) {
    await this.ensureVersionMatchesTest(testId, versionId)
    const specimens = await this.db.prisma.testCatalogVersionSpecimen.findMany({
      where: { versionId },
      orderBy: { displayOrder: 'asc' },
      include: {
        variantManifests: {
          include: {
            configuration: {
              select: { configurationName: true },
            },
          },
        },
      },
    })
    return specimens.map((specimen) => this.mapSpecimen(specimen))
  }

  async updateVersionSpecimens(testId: string, versionId: string, dto: UpdateVersionSpecimensDto) {
    await this.ensureVersionMatchesTest(testId, versionId)

    await this.db.prisma.$transaction(async (tx) => {
      const deleteIds = dto.specimens
        .filter((specimen) => specimen._delete && specimen.id)
        .map((specimen) => specimen.id!)
      if (deleteIds.length > 0) {
        await tx.testCatalogVersionSpecimen.deleteMany({
          where: { versionId, id: { in: deleteIds } },
        })
      }

      for (const specimen of dto.specimens.filter((item) => !item._delete)) {
        const data = {
          displayName: specimen.displayName ?? null,
          isPrimary: specimen.isPrimary ?? false,
          specimenType: specimen.specimenType ?? null,
          specimenRequirements: specimen.specimenRequirements ?? null,
          volume: specimen.volume ?? null,
          minimumVolume: specimen.minimumVolume ?? specimen.minVolume ?? null,
          container: specimen.container ?? null,
          specialInstructions: specimen.specialInstructions ?? null,
          alternateContainers: specimen.alternateContainers ?? null,
          preferredVolume: specimen.preferredVolume ?? null,
          collectionMethod: specimen.collectionMethod ?? null,
          collection: specimen.collection ?? null,
          stabilityRequirements: specimen.stabilityRequirements ?? specimen.stability ?? null,
          storageTransportation: specimen.storageTransportation ?? specimen.transport ?? null,
          patientPreparation: specimen.patientPreparation ?? null,
          causesForRejection: specimen.causesForRejection ?? null,
          processingNotes: specimen.processingNotes ?? null,
          isRequired: specimen.isRequired ?? specimen.required ?? true,
          displayOrder: specimen.displayOrder ?? 0,
        }

        if (specimen.id) {
          await tx.testCatalogVersionSpecimen.update({
            where: { id: specimen.id },
            data,
          })
        } else {
          await tx.testCatalogVersionSpecimen.create({
            data: {
              versionId,
              ...data,
            },
          })
        }
      }
    })

    return this.getVersionSpecimens(testId, versionId)
  }

  async getVersionDiff(testId: string, versionId: string, compareVersionId?: string) {
    const target = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
    })
    if (!target || target.testId !== testId) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    const compare =
      compareVersionId && compareVersionId !== versionId
        ? await this.db.prisma.testCatalogVersion.findUnique({
            where: { id: compareVersionId },
          })
        : await this.db.prisma.testCatalogVersion.findFirst({
            where: { testId, versionNumber: { lt: target.versionNumber } },
            orderBy: { versionNumber: 'desc' },
          })

    const compareSnapshot = compare ? this.pickVersionFields(compare) : {}
    const targetSnapshot = this.pickVersionFields(target)

    const changed: Record<string, { previous: unknown; current: unknown }> = {}
    for (const key of Object.keys(targetSnapshot)) {
      const prev = (compareSnapshot as any)[key]
      const curr = (targetSnapshot as any)[key]
      if (prev instanceof Date && curr instanceof Date) {
        if (prev.getTime() !== curr.getTime()) {
          changed[key] = { previous: prev.toISOString(), current: curr.toISOString() }
        }
      } else if (prev !== curr) {
        changed[key] = {
          previous: prev ?? null,
          current: curr ?? null,
        }
      }
    }

    return {
      baseVersionId: compare?.id ?? null,
      targetVersionId: target.id,
      changed,
    }
  }

  async getActivity(testId: string) {
    await this.ensureTestExists(testId)

    const logs = await this.db.prisma.testCatalogAuditLog.findMany({
      where: { testId },
      orderBy: [{ performedAt: 'desc' }, { id: 'desc' }],
      take: 200,
    })

    return this.mapAuditLogs(logs)
  }

  private async resolveVersionTestId(versionId: string): Promise<string> {
    const version = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { testId: true },
    })

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    return version.testId
  }

  private async ensureTestExists(testId: string) {
    return this.db.prisma.testCatalog
      .findUniqueOrThrow({
        where: { id: testId },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))
  }

  private async ensureVersionMatchesTest(testId: string, versionId: string) {
    const version = await this.db.prisma.testCatalogVersion.findUnique({
      where: { id: versionId },
      select: { testId: true },
    })

    if (!version || version.testId !== testId) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }
  }

  private async findVersion(testId: string, versionId?: string | null): Promise<TestVersionDetail> {
    const version = await this.db.prisma.testCatalogVersion.findFirst({
      where: versionId ? { id: versionId, testId } : { testId },
      orderBy: versionId ? undefined : { versionNumber: 'desc' },
      include: versionInclude,
    })

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    return this.mapVersion(version)
  }

  private mapVersion(version: VersionWithRelations): TestVersionDetail {
    return {
      id: version.id,
      versionNumber: version.versionNumber,
      status: version.status,
      effectiveDate: version.effectiveDate?.toISOString() ?? null,
      retiredDate: version.retiredDate?.toISOString() ?? null,
      changeReason: version.changeReason ?? null,
      changeNotes: version.changeNotes ?? null,
      href: version.href ?? null,
      testName: version.testName ?? null,
      alternativeName: version.alternativeName ?? null,
      alternativeName1: version.alternativeName1 ?? null,
      alternativeName2: version.alternativeName2 ?? null,
      alternativeName3: version.alternativeName3 ?? null,
      alternativeName4: version.alternativeName4 ?? null,
      alternativeName5: version.alternativeName5 ?? null,
      testIncludes: version.testIncludes ?? null,
      methodology: version.methodology ?? null,
      testDescription: version.testDescription ?? null,
      diseases: version.diseases ?? null,
      probes: version.probes ?? null,
      clinicalSignificance: version.clinicalSignificance ?? null,
      diseaseIndications: version.diseaseIndications ?? null,
      testUsage: version.testUsage ?? null,
      testLimitations: version.testLimitations ?? null,
      isNewYorkApproved: version.isNewYorkApproved ?? null,
      isFDAApproved: version.isFDAApproved ?? null,
      levelOfService: version.levelOfService ?? null,
      turnAroundTime: version.turnAroundTime ?? null,
      referenceRanges: version.referenceRanges ?? null,
      setupSchedule: version.setupSchedule ?? null,
      testCategory: version.testCategory ?? null,
      testSubCategory: version.testSubCategory ?? null,
      specialNotes: version.specialNotes ?? null,
      patientResources: version.patientResources ?? null,
      providerResources: version.providerResources ?? null,
      patientResourcesUrl: version.patientResourcesUrl ?? null,
      providerResourcesUrl: version.providerResourcesUrl ?? null,
      additionalNotes: version.additionalNotes ?? null,
      createdBy: version.createdBy ?? null,
      createdAt: version.createdAt.toISOString(),
      updatedAt: version.updatedAt.toISOString(),
      specimens: version.specimens.map((specimen) => this.mapSpecimen(specimen)),
      cptCodes: version.cptCodes.map((cpt) => ({
        code: cpt.cptCode,
        modifier: cpt.modifier ?? null,
      })),
      orderLoincs: version.orderLoincs.map((loinc) => ({
        loincCode: loinc.loincCode,
      })),
      resultLoincs: version.resultLoincs.map((loinc) => ({
        loincCode: loinc.loincCode,
      })),
      biomarkers: version.biomarkers.map((biomarker) => ({
        id: biomarker.id,
        hgncId: biomarker.hgncId,
        transcriptReference: biomarker.transcriptReference ?? null,
      })),
    }
  }

  private mapSpecimen(specimen: SpecimenWithManifests) {
    return {
      id: specimen.id,
      displayName: specimen.displayName ?? null,
      isPrimary: specimen.isPrimary,
      specimenType: specimen.specimenType ?? null,
      specimenRequirements: specimen.specimenRequirements ?? null,
      volume: specimen.volume ?? null,
      minimumVolume: specimen.minimumVolume ?? null,
      container: specimen.container ?? null,
      specialInstructions: specimen.specialInstructions ?? null,
      alternateContainers: specimen.alternateContainers ?? null,
      preferredVolume: specimen.preferredVolume ?? null,
      collectionMethod: specimen.collectionMethod ?? null,
      collection: specimen.collection ?? null,
      stabilityRequirements: specimen.stabilityRequirements ?? null,
      stability: specimen.stabilityRequirements ?? null,
      storageTransportation: specimen.storageTransportation ?? null,
      transport: specimen.storageTransportation ?? null,
      patientPreparation: specimen.patientPreparation ?? null,
      causesForRejection: specimen.causesForRejection ?? null,
      processingNotes: specimen.processingNotes ?? null,
      isRequired: specimen.isRequired ?? undefined,
      required: specimen.isRequired,
      minVolume: specimen.minimumVolume ?? null,
      displayOrder: specimen.displayOrder,
      manifests:
        specimen.variantManifests?.map((manifest) => ({
          id: manifest.id,
          configurationId: manifest.configurationId,
          configurationName: manifest.configuration?.configurationName ?? null,
          participantRole: manifest.participantRole,
          isRequired: manifest.isRequired ?? true,
          specimenTypeOverride: manifest.specimenTypeOverride ?? null,
          specimenDisplayNameOverride: manifest.specimenDisplayNameOverride ?? null,
          volumeOverride: manifest.volumeOverride ?? null,
          minimumVolumeOverride: manifest.minimumVolumeOverride ?? null,
          preferredVolumeOverride: manifest.preferredVolumeOverride ?? null,
          alternateContainersOverride: manifest.alternateContainersOverride ?? null,
          containerOverride: manifest.containerOverride ?? null,
          specialInstructionsOverride: manifest.specialInstructionsOverride ?? null,
          collectionMethodOverride: manifest.collectionMethodOverride ?? null,
          specimenRequirementsOverride: manifest.specimenRequirementsOverride ?? null,
          collectionOverride: manifest.collectionOverride ?? null,
          stabilityRequirementsOverride: manifest.stabilityRequirementsOverride ?? null,
          storageTransportationOverride: manifest.storageTransportationOverride ?? null,
          patientPreparationOverride: manifest.patientPreparationOverride ?? null,
          causesForRejectionOverride: manifest.causesForRejectionOverride ?? null,
          processingNotesOverride: manifest.processingNotesOverride ?? null,
          displayOrder: manifest.displayOrder ?? null,
        })) ?? [],
    }
  }

  private async mapAuditLogs(logs: Array<TestCatalogAuditLog>): Promise<AuditLog[]> {
    if (logs.length === 0) {
      return []
    }

    const performerIds = Array.from(
      new Set(logs.map((log) => log.performedBy).filter((id): id is string => Boolean(id))),
    )

    const performers: AuditLogPerformer[] = performerIds.length
      ? await this.db.prisma.user.findMany({
          where: { id: { in: performerIds } },
          select: {
            id: true,
            name: true,
            email: true,
          },
        })
      : []

    const performerMap = new Map<string, AuditLogPerformer>(
      performers.map((user) => [user.id, user]),
    )

    return logs.map((log) => {
      const performer = log.performedBy ? performerMap.get(log.performedBy) : undefined
      return {
        id: log.id,
        action: log.action,
        fieldName: log.fieldName ?? null,
        oldValue: log.oldValue ?? null,
        newValue: log.newValue ?? null,
        changeReason: log.changeReason ?? null,
        versionNumber: log.versionNumber ?? null,
        configurationId: log.configurationId ?? null,
        performedBy: log.performedBy ?? null,
        performer: performer
          ? {
              id: performer.id,
              name: performer.name ?? null,
              email: performer.email ?? null,
            }
          : null,
        performedAt: log.performedAt.toISOString(),
        ipAddress: log.ipAddress ?? null,
        userAgent: log.userAgent ?? null,
        createdAt: log.createdAt.toISOString(),
        updatedAt: log.updatedAt.toISOString(),
      }
    })
  }
}
