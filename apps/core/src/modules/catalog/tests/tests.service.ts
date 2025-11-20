import { Injectable } from '@nestjs/common'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'
import { resourceNotFoundWrapper } from '@core/shared/utils/prisma.util'
import { Prisma } from '@db/client'

import {
  CreateTestInput,
  ListTestsQuery,
  TestDetail,
  TestListResponse,
  TestVersionDetail,
  UpdateTestInput,
} from './tests.dto'

@Injectable()
export class TestsService {
  constructor(private readonly db: DatabaseService) {}

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
            versionNumber: true,
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
        testName: test.testName ?? null,
        labName: test.lab?.labName ?? null,
        defaultVersion: test.defaultVersion?.versionNumber ?? null,
        status: test.status,
        casandraTestId: test.casandraTestId,
        versionsCount: test._count.versions,
      })),
      nextCursor: hasNext ? trimmed[trimmed.length - 1]?.id ?? null : null,
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
          status: true,
          defaultVersionId: true,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))

    const version = await this.findVersion(testId, versionId ?? test.defaultVersionId)

    return {
      testId: test.id,
      testName: test.testName ?? null,
      labId: test.labId ?? null,
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
        status: Prisma.$Enums.TestCatalogStatus.DRAFT,
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
          status: input.status as Prisma.$Enums.TestCatalogStatus | undefined,
          testCategory: input.category ?? undefined,
          testSubCategory: input.subCategory ?? undefined,
        },
      })
      .catch(resourceNotFoundWrapper(new BizException(ErrorCodeEnum.TestNotFound)))

    return this.get(testId)
  }

  private async findVersion(testId: string, versionId?: string | null): Promise<TestVersionDetail> {
    const version = await this.db.prisma.testCatalogVersion.findFirst({
      where: versionId
        ? { id: versionId, testId }
        : { testId },
      orderBy: versionId ? undefined : { versionNumber: 'desc' },
      include: this.versionInclude,
    })

    if (!version) {
      throw new BizException(ErrorCodeEnum.TestVersionNotFound)
    }

    return this.mapVersion(version)
  }

  private mapVersion(version: Prisma.TestCatalogVersionGetPayload<{ include: typeof this.versionInclude }>): TestVersionDetail {
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
      specimens: version.specimens.map((specimen) => ({
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
        storageTransportation: specimen.storageTransportation ?? null,
        patientPreparation: specimen.patientPreparation ?? null,
        causesForRejection: specimen.causesForRejection ?? null,
        processingNotes: specimen.processingNotes ?? null,
        isRequired: specimen.isRequired ?? undefined,
        displayOrder: specimen.displayOrder,
      })),
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

  private readonly versionInclude = {
    specimens: {
      orderBy: { displayOrder: 'asc' },
    },
    cptCodes: true,
    orderLoincs: true,
    resultLoincs: true,
    biomarkers: true,
  } as const
}

