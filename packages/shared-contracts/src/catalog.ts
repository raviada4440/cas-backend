import * as z from 'zod/v4'

import { FileUploadRequirement, ResolvedOrderFormSection } from './order-forms'
import { Uuid, UtcDateTime } from './common'

export const CatalogStatus = z.enum(['DRAFT', 'REVIEW', 'APPROVED', 'PUBLISHED', 'ARCHIVED', 'RETIRED'])
export type CatalogStatusType = z.infer<typeof CatalogStatus>
export const VersionStatus = z.enum(['DRAFT', 'IN_REVIEW', 'APPROVED', 'PUBLISHED', 'ARCHIVED', 'RETIRED'])
export type VersionStatusType = z.infer<typeof VersionStatus>

export const SpecimenType = z.enum([
  'BLOOD_IN_EDTA_PURPLE_TOP',
  'EXTRACTED_DNA',
  'CULTURED_SKIN_FIBROBLAST',
  'BUCCAL_SWAB',
  'SALIVA',
  'FFPE_TISSUE',
  'FFPE_TISSUE_OR_PLASMA',
  'PERIPHERAL_BLOOD_OR_BONE_MARROW',
  'WHOLE_BLOOD',
  'WHOLE_BLOOD_OR_BONE_MARROW',
  'WHOLE_BLOOD_EDTA',
  'SERUM',
  'VARIES',
  'URINE',
  'SERUM_RED',
  'TISSUE',
  'AMNIOTIC_FLD',
  'TECHONLY',
  'WHOLE_BLOOD_ACD',
  'PLASMA_NA_CIT',
  'PLASMA_EDTA',
  'PLASMA',
  'CSF',
  'PERITONEAL',
  'BODY_FLUID',
  'PLEURAL_FLUID',
  'WHOLE_BLOOD_ACD_B',
  'FECAL',
  'SYNOVIAL_FLUID',
  'SPECIAL',
  'WASHED_RBC',
  'MECONIUM',
  'PANCREATIC_CYST_FLUID',
  'AMYLOID',
  'HAIR',
  'NAIL',
  'PLASMA_HEPARIN',
  'SERUM_SST',
  'LAVAGE',
  'WB_SODIUM_HEPARIN',
  'WHOLE_BLOOD_EDTA_METAL_FREE_ERB',
  'PLASMA_NA_HEPARIN',
  'FINE_NEEDLE_WASH',
  'SWAB',
  'PLASMA_EDTA_META',
  'GI_PLASMA',
  'BONE_MARROW',
  'TISSUE_PARAFFIN',
  'LIVER_TISSUE',
  'RBCS',
  'WHOLE_BLOOD_NAFL_KOX',
  'PLASMA_NAFL_KOX',
  'EM',
  'WHOLE_BLOOD_NA_CIT',
  'SEMEN',
  'BRONCHIAL_WASHING',
  'BREATH',
  'CONTROL',
  'WB_HEPARIN',
  'VAGINAL',
  'STONE',
  'METAL_FREE_EDTA_PLASMA',
  'WB_STRECK',
  'FIBROBLASTS',
  'SPUTUM',
  'FIXED_CELL_PELLET_BONE_MARROW',
  'DIALYSATE_FLUID',
  'Z_TUBE_PLASMA',
  'MMLDRY',
  'WHOLE_BLOOD_SLIDE',
  'KIDNEY_BIOPSY',
  'SUDC_STUDY_SPECIMEN',
  'PLASMA_LI_HEPARIN',
  'PERIPHERAL_BLOOD',
  'PERIPHERAL_WHOLE_BLOOD',
  'PLASMA_FROZEN',
  'WHOLE_BLOOD_OR_SALIVA',
])
export const SpecimenTypeValues = SpecimenType.options
export const TestCatalogCollectionMethod = z.enum(['KIT', 'PSC'])
export const VariantDimension = z.enum([
  'FAMILY_STRUCTURE',
  'SPECIMEN_RELATIONSHIP',
  'REFLEX_MODE',
  'PANEL_COMPOSITION',
  'SPECIMEN_TYPE',
  'METHOD_VARIANT',
  'TURNAROUND_VARIANT',
  'OPERATIONAL_MODE',
  'REPORTING_VARIANT',
])
export type VariantDimensionType = z.infer<typeof VariantDimension>
export const FamilyStructure = z.enum(['NONE', 'PROBAND', 'DUO', 'TRIO'])
export type FamilyStructureType = z.infer<typeof FamilyStructure>
export const ParticipantRole = z.enum(['PROBAND', 'MOTHER', 'FATHER', 'TUMOR', 'NORMAL'])

export const TestSummary = z.object({
  testId: Uuid,
  testName: z.string(),
  labName: z.string().nullable(),
  defaultVersion: z.number().nullable(),
  status: CatalogStatus,
  casandraTestId: z.string().nullable().optional(),
  versionsCount: z.number().int().optional(),
  methodology: z.string().nullable().optional(),
  version: z.lazy(() => VersionSummary.nullable().optional()),
})
export type TestSummary = z.infer<typeof TestSummary>

export const TestDetail = z.object({
  testId: Uuid,
  testName: z.string(),
  labId: Uuid.nullable(),
  labName: z.string().nullable().optional(),
  labTestId: z.string().nullable().optional(),
  casandraTestId: z.string().nullable().optional(),
  status: CatalogStatus,
  version: z.object({
    id: Uuid,
    versionNumber: z.number(),
    status: VersionStatus,
    effectiveDate: UtcDateTime.nullable(),
    retiredDate: UtcDateTime.nullable(),
    changeReason: z.string().nullable(),
    changeNotes: z.string().nullable(),
    href: z.string().nullable(),
    testName: z.string().nullable(),
    alternativeName: z.string().nullable(),
    alternativeName1: z.string().nullable(),
    alternativeName2: z.string().nullable(),
    alternativeName3: z.string().nullable(),
    alternativeName4: z.string().nullable(),
    alternativeName5: z.string().nullable(),
    testIncludes: z.string().nullable(),
    methodology: z.string().nullable(),
    testDescription: z.string().nullable(),
    diseases: z.string().nullable(),
    probes: z.string().nullable(),
    clinicalSignificance: z.string().nullable(),
    diseaseIndications: z.string().nullable(),
    testUsage: z.string().nullable(),
    testLimitations: z.string().nullable(),
    isNewYorkApproved: z.boolean().nullable(),
    isFDAApproved: z.boolean().nullable(),
    levelOfService: z.string().nullable(),
    turnAroundTime: z.string().nullable(),
    referenceRanges: z.string().nullable(),
    setupSchedule: z.string().nullable(),
    testCategory: z.string().nullable(),
    testSubCategory: z.string().nullable(),
    specialNotes: z.string().nullable(),
    patientResources: z.string().nullable(),
    providerResources: z.string().nullable(),
    patientResourcesUrl: z.string().nullable(),
    providerResourcesUrl: z.string().nullable(),
    additionalNotes: z.string().nullable(),
    createdBy: Uuid.nullable(),
    createdAt: UtcDateTime,
    updatedAt: UtcDateTime,
    specimens: z.array(
      z.object({
        id: Uuid,
        displayName: z.string().nullable(),
        isPrimary: z.boolean(),
        specimenType: SpecimenType.nullable(),
        specimenRequirements: z.string().nullable(),
        volume: z.string().nullable(),
        minimumVolume: z.string().nullable(),
        container: z.string().nullable(),
        specialInstructions: z.string().nullable(),
        alternateContainers: z.string().nullable(),
        preferredVolume: z.string().nullable(),
        collectionMethod: TestCatalogCollectionMethod.nullable().optional(),
        collection: z.string().nullable(),
        stabilityRequirements: z.string().nullable(),
        storageTransportation: z.string().nullable(),
        patientPreparation: z.string().nullable(),
        causesForRejection: z.string().nullable(),
        processingNotes: z.string().nullable(),
        isRequired: z.boolean().optional(),
        displayOrder: z.number(),
      }),
    ),
    cptCodes: z.array(
      z.object({
        id: Uuid.optional(),
        code: z.string(),
        modifier: z.string().nullable(),
        isPrimary: z.boolean().optional(),
      }),
    ),
    orderLoincs: z.array(
      z.object({
        id: Uuid.optional(),
        loincCode: z.string(),
        description: z.string().nullable().optional(),
      }),
    ),
    resultLoincs: z.array(
      z.object({
        id: Uuid.optional(),
        loincCode: z.string(),
        description: z.string().nullable().optional(),
      }),
    ),
    biomarkers: z.array(
      z.object({
        id: z.string().uuid(),
        hgncId: z.string(),
        hgncApprovedSymbol: z.string().nullable().optional(),
        hgncApprovedName: z.string().nullable().optional(),
        transcriptReference: z.string().nullable(),
      }),
    ),
  }),
})
export type TestDetail = z.infer<typeof TestDetail>

export const VersionSummary = z.object({
  id: Uuid,
  versionNumber: z.number(),
  status: VersionStatus,
  isDefault: z.boolean().optional(),
  effectiveDate: UtcDateTime.nullable().optional(),
  retiredDate: UtcDateTime.nullable().optional(),
  methodology: z.string().nullable().optional(),
  turnAroundTime: z.string().nullable().optional(),
  createdAt: UtcDateTime.optional(),
  updatedAt: UtcDateTime.optional(),
  href: z.string().nullable().optional(),
})
export type VersionSummary = z.infer<typeof VersionSummary>

export const ListTestsQuery = z.object({
  cursor: z.string().uuid().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  q: z.string().optional(),
  labId: z.string().uuid().optional(),
})
export type ListTestsQuery = z.infer<typeof ListTestsQuery>

export const PagedTestSummary = z.object({
  items: z.array(TestSummary),
  nextCursor: z.string().uuid().nullable(),
})
export type PagedTestSummary = z.infer<typeof PagedTestSummary>

export const CreateTestInput = z.object({
  testName: z.string().min(1),
  labId: z.string().uuid().optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
})
export type CreateTestInput = z.infer<typeof CreateTestInput>

export const UpsertSpecimensInput = z.object({
  versionId: z.string().uuid(),
  specimens: z.array(
    z.object({
      id: z.string().uuid().optional(),
      displayName: z.string(),
      isPrimary: z.boolean().default(false),
      specimenType: SpecimenType.nullable().optional(),
      specimenRequirements: z.string().nullable().optional(),
      volume: z.string().nullable().optional(),
      minimumVolume: z.string().nullable().optional(),
      container: z.string().nullable().optional(),
      alternateContainers: z.string().nullable().optional(),
      preferredVolume: z.string().nullable().optional(),
      minVolume: z.string().nullable().optional(),
      collection: z.string().nullable().optional(),
      stabilityRequirements: z.string().nullable().optional(),
      stability: z.string().nullable().optional(),
      storageTransportation: z.string().nullable().optional(),
      transport: z.string().nullable().optional(),
      patientPreparation: z.string().nullable().optional(),
      causesForRejection: z.string().nullable().optional(),
      processingNotes: z.string().nullable().optional(),
      required: z.boolean().default(true),
      displayOrder: z.number().int().default(0),
      collectionMethod: TestCatalogCollectionMethod.nullable().optional(),
      specialInstructions: z.string().nullable().optional(),
      _delete: z.boolean().optional(),
    }),
  ),
  updatedBy: z.string().uuid().optional(),
})
export type UpsertSpecimensInput = z.infer<typeof UpsertSpecimensInput>

export const UpsertBiomarkersInput = z.object({
  versionId: z.string().uuid(),
  biomarkers: z.array(
    z.object({
      id: z.string().uuid().optional(),
      hgncId: z.string().min(1),
      transcriptReference: z.string().nullable().optional(),
      _delete: z.boolean().optional(),
    }),
  ),
  updatedBy: z.string().uuid().optional(),
})
export type UpsertBiomarkersInput = z.infer<typeof UpsertBiomarkersInput>

export const ResolveVariantInput = z.object({
  testId: Uuid,
  dimension: VariantDimension,
  dimensionValue: z.string().min(1),
  orderDate: UtcDateTime,
  versionId: Uuid.optional(),
})
export type ResolveVariantInput = z.infer<typeof ResolveVariantInput>

export const ResolveVariantResponse = z.object({
  versionId: Uuid,
  configurationId: Uuid.nullable(),
  orderForm: z.array(ResolvedOrderFormSection),
  fileUploads: z.array(FileUploadRequirement),
})
export type ResolveVariantResponse = z.infer<typeof ResolveVariantResponse>

export const RequestReviewInput = z.object({
  message: z.string().min(1),
  reviewerId: z.string().uuid(),
  reviewDueDate: z.string().datetime().optional(),
})
export type RequestReviewInput = z.infer<typeof RequestReviewInput>

export const ApproveInput = z.object({
  comments: z.string().optional(),
})
export type ApproveInput = z.infer<typeof ApproveInput>

export const PublishInput = z.object({
  effectiveDate: z.string().datetime(),
})
export type PublishInput = z.infer<typeof PublishInput>

export const UpdateTestInput = z.object({
  testName: z.string().min(1).optional(),
  labId: z.string().uuid().optional(),
  status: CatalogStatus.optional(),
  category: z.string().optional(),
  subCategory: z.string().optional(),
})
export type UpdateTestInput = z.infer<typeof UpdateTestInput>

export const CreateDraftInput = z.object({
  sourceVersionId: z.string().uuid().optional(),
  changeReason: z.string().nullable().optional(),
  changeNotes: z.string().nullable().optional(),
  requestedBy: z.string().uuid().optional(),
  customerId: z.string().uuid().optional(),
})
export type CreateDraftInput = z.infer<typeof CreateDraftInput>

export const CloneVersionInput = z.object({
  changeReason: z.string().nullable().optional(),
  changeNotes: z.string().nullable().optional(),
  requestedBy: z.string().uuid().optional(),
})
export type CloneVersionInput = z.infer<typeof CloneVersionInput>

export const SetDefaultVersionInput = z.object({
  versionId: z.string().uuid(),
  effectiveDate: z.string().datetime().nullable().optional(),
})
export type SetDefaultVersionInput = z.infer<typeof SetDefaultVersionInput>

export const PublishVersionInput = z.object({
  effectiveDate: z.string().datetime(),
  changeReason: z.string().nullable().optional(),
  changeNotes: z.string().nullable().optional(),
})
export type PublishVersionInput = z.infer<typeof PublishVersionInput>

export const RetireVersionInput = z.object({
  reason: z.string().min(1),
  effectiveDate: z.string().datetime().nullable().optional(),
  changeNotes: z.string().nullable().optional(),
})
export type RetireVersionInput = z.infer<typeof RetireVersionInput>

export const VersionDiffQuery = z.object({
  compareVersionId: z.string().uuid().optional(),
})
export type VersionDiffQuery = z.infer<typeof VersionDiffQuery>

export const VersionTypeQuery = z.object({
  type: z.enum(['ORDER', 'RESULT']).optional(),
})
export type VersionTypeQuery = z.infer<typeof VersionTypeQuery>

const versionEditableStringFields = [
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
  'changeReason',
  'changeNotes',
] as const

type VersionEditableStringField = (typeof versionEditableStringFields)[number]

const versionUpdateShape: Record<VersionEditableStringField, z.ZodTypeAny> = {} as Record<
  VersionEditableStringField,
  z.ZodTypeAny
>

for (const field of versionEditableStringFields) {
  versionUpdateShape[field] = z.string().nullable().optional()
}

export const VersionUpdateInput = z.object(versionUpdateShape).extend({
  isNewYorkApproved: z.boolean().optional(),
  isFDAApproved: z.boolean().optional(),
})
export type VersionUpdateInput = z.infer<typeof VersionUpdateInput>

export const VersionCptCodeInput = z.object({
  id: z.string().uuid().optional(),
  code: z.string().min(1),
  modifier: z.string().nullable().optional(),
  isPrimary: z.boolean().optional(),
  _delete: z.boolean().optional(),
})
export type VersionCptCodeInput = z.infer<typeof VersionCptCodeInput>

export const UpdateVersionCptCodesInput = z.object({
  codes: z.array(VersionCptCodeInput),
})
export type UpdateVersionCptCodesInput = z.infer<typeof UpdateVersionCptCodesInput>

export const VersionLoincType = z.enum(['ORDER', 'RESULT'])
export type VersionLoincType = z.infer<typeof VersionLoincType>

export const VersionLoincCodeInput = z.object({
  id: z.string().uuid().optional(),
  loincCode: z.string().min(1),
  resultCode: z.string().nullable().optional(),
  resultCodeName: z.string().nullable().optional(),
  uom: z.string().nullable().optional(),
  _delete: z.boolean().optional(),
})
export type VersionLoincCodeInput = z.infer<typeof VersionLoincCodeInput>

export const UpdateVersionLoincCodesInput = z.object({
  type: VersionLoincType,
  codes: z.array(VersionLoincCodeInput),
})
export type UpdateVersionLoincCodesInput = z.infer<typeof UpdateVersionLoincCodesInput>

export const VersionBiomarkerInput = z.object({
  id: z.string().uuid().optional(),
  hgncId: z.string().min(1),
  transcriptReference: z.string().nullable().optional(),
  _delete: z.boolean().optional(),
})
export type VersionBiomarkerInput = z.infer<typeof VersionBiomarkerInput>

export const UpdateVersionBiomarkersInput = z.object({
  biomarkers: z.array(VersionBiomarkerInput),
})
export type UpdateVersionBiomarkersInput = z.infer<typeof UpdateVersionBiomarkersInput>

export const VersionSpecimenInput = z.object({
  id: z.string().uuid().optional(),
  displayName: z.string().optional(),
  specimenType: z.string().nullable().optional(),
  specimenRequirements: z.string().nullable().optional(),
  volume: z.string().nullable().optional(),
  minimumVolume: z.string().nullable().optional(),
  minVolume: z.string().nullable().optional(),
  container: z.string().nullable().optional(),
  specialInstructions: z.string().nullable().optional(),
  alternateContainers: z.string().nullable().optional(),
  preferredVolume: z.string().nullable().optional(),
  collectionMethod: z.string().nullable().optional(),
  collection: z.string().nullable().optional(),
  stabilityRequirements: z.string().nullable().optional(),
  stability: z.string().nullable().optional(),
  storageTransportation: z.string().nullable().optional(),
  transport: z.string().nullable().optional(),
  patientPreparation: z.string().nullable().optional(),
  causesForRejection: z.string().nullable().optional(),
  processingNotes: z.string().nullable().optional(),
  isPrimary: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  required: z.boolean().optional(),
  displayOrder: z.number().int().optional(),
  _delete: z.boolean().optional(),
})
export type VersionSpecimenInput = z.infer<typeof VersionSpecimenInput>

export const UpdateVersionSpecimensInput = z.object({
  specimens: z.array(VersionSpecimenInput),
})
export type UpdateVersionSpecimensInput = z.infer<typeof UpdateVersionSpecimensInput>

export const TestSearchQuery = z.object({
  labId: z.string().uuid(),
  q: z.string().trim().min(1).optional(),
  limit: z.number().int().min(1).max(100).default(20),
})
export type TestSearchQuery = z.infer<typeof TestSearchQuery>

export const AuditAction = z.enum([
  'CREATE',
  'UPDATE',
  'DELETE',
  'PUBLISH',
  'ARCHIVE',
  'RETIRE',
  'RESTORE',
  'APPROVE',
  'REJECT',
  'VERSION_CREATE',
  'REVIEWER_ASSIGNED',
  'STATUS_CHANGE',
  'VERSION_CHANGE',
  'CONFIGURATION_CREATE',
  'CONFIGURATION_UPDATE',
  'CONFIGURATION_DELETE',
])
export type AuditAction = z.infer<typeof AuditAction>

export const AuditPerformer = z
  .object({
    id: z.string().uuid(),
    name: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
  })
  .nullable()
export type AuditPerformer = z.infer<typeof AuditPerformer>

export const AuditLog = z.object({
  id: z.string().uuid(),
  action: AuditAction,
  fieldName: z.string().nullable().optional(),
  oldValue: z.string().nullable().optional(),
  newValue: z.string().nullable().optional(),
  changeReason: z.string().nullable().optional(),
  versionNumber: z.number().int().nullable().optional(),
  configurationId: z.string().uuid().nullable().optional(),
  performedBy: z.string().uuid().nullable().optional(),
  performer: AuditPerformer.optional(),
  performedAt: z.string().datetime(),
  ipAddress: z.string().nullable().optional(),
  userAgent: z.string().nullable().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})
export type AuditLog = z.infer<typeof AuditLog>

export const AuditLogList = z.object({
  items: z.array(AuditLog),
  nextCursor: z.string().uuid().nullable(),
})
export type AuditLogList = z.infer<typeof AuditLogList>

export const TestAuditQuery = z.object({
  cursor: z.string().uuid().optional(),
  limit: z.number().int().min(1).max(200).default(100),
  versionNumber: z.number().int().optional(),
  configurationId: z.string().uuid().optional(),
  action: AuditAction.optional(),
  performedBy: z.string().uuid().optional(),
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
})
export type TestAuditQuery = z.infer<typeof TestAuditQuery>

