import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

const searchQuerySchema = z.object({
  cursor: z.string().uuid().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  q: z.string().optional(),
  labId: z.string().uuid().optional(),
})

const createTestSchema = z.object({
  testName: z.string().min(1),
  labId: z.string().uuid().optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
})

const updateTestSchema = z.object({
  testName: z.string().min(1).optional(),
  labId: z.string().uuid().optional(),
  status: z.string().optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
})

export class ListTestsQueryDto extends createZodDto(searchQuerySchema) {}
export type ListTestsQuery = z.infer<typeof searchQuerySchema>

export class CreateTestDto extends createZodDto(createTestSchema) {}
export type CreateTestInput = z.infer<typeof createTestSchema>

export class UpdateTestDto extends createZodDto(updateTestSchema) {}
export type UpdateTestInput = z.infer<typeof updateTestSchema>

export class TestIdParamDto extends createZodDto(
  z.object({
    testId: z.string().uuid(),
  }),
) {}

export class TestVersionQueryDto extends createZodDto(
  z.object({
    versionId: z.string().uuid().optional(),
  }),
) {}

export type TestSummary = {
  testId: string
  testName: string | null
  labName: string | null
  defaultVersion: number | null
  status: string
  casandraTestId?: string | null
  versionsCount?: number
}

export type TestListResponse = {
  items: TestSummary[]
  nextCursor: string | null
}

export type TestVersionDetail = {
  id: string
  versionNumber: number
  status: string
  effectiveDate: string | null
  retiredDate: string | null
  changeReason: string | null
  changeNotes: string | null
  href: string | null
  testName: string | null
  alternativeName: string | null
  alternativeName1: string | null
  alternativeName2: string | null
  alternativeName3: string | null
  alternativeName4: string | null
  alternativeName5: string | null
  testIncludes: string | null
  methodology: string | null
  testDescription: string | null
  diseases: string | null
  probes: string | null
  clinicalSignificance: string | null
  diseaseIndications: string | null
  testUsage: string | null
  testLimitations: string | null
  isNewYorkApproved: boolean | null
  isFDAApproved: boolean | null
  levelOfService: string | null
  turnAroundTime: string | null
  referenceRanges: string | null
  setupSchedule: string | null
  testCategory: string | null
  testSubCategory: string | null
  specialNotes: string | null
  patientResources: string | null
  providerResources: string | null
  patientResourcesUrl: string | null
  providerResourcesUrl: string | null
  additionalNotes: string | null
  createdBy: string | null
  createdAt: string
  updatedAt: string
  specimens: Array<{
    id: string
    displayName: string | null
    isPrimary: boolean
    specimenType: string | null
    specimenRequirements: string | null
    volume: string | null
    minimumVolume: string | null
    container: string | null
    specialInstructions: string | null
    alternateContainers: string | null
    preferredVolume: string | null
    collectionMethod: string | null
    collection: string | null
    stabilityRequirements: string | null
    storageTransportation: string | null
    patientPreparation: string | null
    causesForRejection: string | null
    processingNotes: string | null
    isRequired?: boolean
    displayOrder: number
  }>
  cptCodes: Array<{ code: string; modifier: string | null }>
  orderLoincs: Array<{ loincCode: string }>
  resultLoincs: Array<{ loincCode: string }>
  biomarkers: Array<{ id: string; hgncId: string; transcriptReference: string | null }>
}

export type TestDetail = {
  testId: string
  testName: string | null
  labId: string | null
  status: string
  version: TestVersionDetail
}

