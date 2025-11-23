import * as z from 'zod/v4'

import {
  FamilyStructure,
  ParticipantRole,
  SpecimenType,
  TestCatalogCollectionMethod,
  VariantDimension,
} from './catalog'
import { UtcDateTime, Uuid } from './common'

export const CatalogConfigurationStatus = z.enum(['DRAFT', 'ACTIVE', 'INACTIVE', 'ARCHIVED'])
export type CatalogConfigurationStatusType = z.infer<typeof CatalogConfigurationStatus>

export const CatalogConfigurationType = z.enum(['OPERATIONAL', 'CUSTOMER'])

export const OperationalVariantCptOverride = z.object({
  id: Uuid,
  cptCode: z.string().min(1),
  modifier: z.string().max(8).nullable(),
  isPrimary: z.boolean(),
})
export type OperationalVariantCptOverride = z.infer<typeof OperationalVariantCptOverride>

export const OperationalVariantCptOverrideInput = OperationalVariantCptOverride.extend({
  id: Uuid.optional(),
})
export type OperationalVariantCptOverrideInput = z.infer<typeof OperationalVariantCptOverrideInput>

export const OperationalVariantOrderLoincOverride = z.object({
  id: Uuid,
  loincCode: z.string().min(1),
})
export type OperationalVariantOrderLoincOverride = z.infer<typeof OperationalVariantOrderLoincOverride>

export const OperationalVariantOrderLoincOverrideInput = OperationalVariantOrderLoincOverride.extend({
  id: Uuid.optional(),
})
export type OperationalVariantOrderLoincOverrideInput = z.infer<
  typeof OperationalVariantOrderLoincOverrideInput
>

export const OperationalVariantResultLoincOverride = z.object({
  id: Uuid,
  loincCode: z.string().min(1),
  resultCode: z.string().nullable(),
  resultCodeName: z.string().nullable(),
  uom: z.string().nullable(),
})
export type OperationalVariantResultLoincOverride = z.infer<
  typeof OperationalVariantResultLoincOverride
>

export const OperationalVariantResultLoincOverrideInput =
  OperationalVariantResultLoincOverride.extend({
    id: Uuid.optional(),
  })
export type OperationalVariantResultLoincOverrideInput = z.infer<
  typeof OperationalVariantResultLoincOverrideInput
>

export const OperationalVariantSpecimenManifestEntry = z.object({
  id: Uuid,
  versionSpecimenId: Uuid,
  specimenDisplayName: z.string().nullable(),
  participantRole: ParticipantRole,
  isRequired: z.boolean(),
  specimenTypeOverride: SpecimenType.nullable(),
  specimenDisplayNameOverride: z.string().nullable(),
  volumeOverride: z.string().nullable(),
  minimumVolumeOverride: z.string().nullable(),
  preferredVolumeOverride: z.string().nullable(),
  alternateContainersOverride: z.string().nullable(),
  containerOverride: z.string().nullable(),
  specialInstructionsOverride: z.string().nullable(),
  collectionMethodOverride: TestCatalogCollectionMethod.nullable(),
  specimenRequirementsOverride: z.string().nullable(),
  collectionOverride: z.string().nullable(),
  stabilityRequirementsOverride: z.string().nullable(),
  storageTransportationOverride: z.string().nullable(),
  patientPreparationOverride: z.string().nullable(),
  causesForRejectionOverride: z.string().nullable(),
  processingNotesOverride: z.string().nullable(),
  displayOrder: z.number().int().nonnegative(),
})
export type OperationalVariantSpecimenManifestEntry = z.infer<
  typeof OperationalVariantSpecimenManifestEntry
>

export const OperationalVariantSpecimenManifestInput =
  OperationalVariantSpecimenManifestEntry.extend({
    id: Uuid.optional(),
    specimenTypeOverride: SpecimenType.nullable().optional(),
    specimenDisplayNameOverride: z.string().nullable().optional(),
    volumeOverride: z.string().nullable().optional(),
    minimumVolumeOverride: z.string().nullable().optional(),
    preferredVolumeOverride: z.string().nullable().optional(),
    alternateContainersOverride: z.string().nullable().optional(),
    containerOverride: z.string().nullable().optional(),
    specialInstructionsOverride: z.string().nullable().optional(),
    collectionMethodOverride: TestCatalogCollectionMethod.nullable().optional(),
    specimenRequirementsOverride: z.string().nullable().optional(),
    collectionOverride: z.string().nullable().optional(),
    stabilityRequirementsOverride: z.string().nullable().optional(),
    storageTransportationOverride: z.string().nullable().optional(),
    patientPreparationOverride: z.string().nullable().optional(),
    causesForRejectionOverride: z.string().nullable().optional(),
    processingNotesOverride: z.string().nullable().optional(),
  })
export type OperationalVariantSpecimenManifestInput = z.infer<
  typeof OperationalVariantSpecimenManifestInput
>

export const BiomarkerOverrideAction = z.enum(['INCLUDE', 'EXCLUDE', 'OVERRIDE'])
export type BiomarkerOverrideAction = z.infer<typeof BiomarkerOverrideAction>

export const OperationalVariantBiomarkerOverride = z.object({
  id: Uuid,
  hgncId: z.string().min(1),
  action: BiomarkerOverrideAction,
  transcriptReference: z.string().nullable(),
  reportTier: z.string().nullable(),
  isReportable: z.boolean().nullable(),
  displayOrder: z.number().int().nullable(),
  notes: z.string().nullable(),
  symbol: z.string().nullable(),
  name: z.string().nullable(),
})
export type OperationalVariantBiomarkerOverride = z.infer<
  typeof OperationalVariantBiomarkerOverride
>

export const OperationalVariantBiomarkerOverrideInput =
  OperationalVariantBiomarkerOverride.extend({
    id: Uuid.optional(),
  })
export type OperationalVariantBiomarkerOverrideInput = z.infer<
  typeof OperationalVariantBiomarkerOverrideInput
>

export const OperationalVariantFinalBiomarker = z.object({
  hgncId: z.string().min(1),
  symbol: z.string().nullable(),
  name: z.string().nullable(),
  transcriptReference: z.string().nullable(),
  reportTier: z.string().nullable(),
  isReportable: z.boolean().nullable(),
  displayOrder: z.number().int().nullable(),
  notes: z.string().nullable(),
  source: z.enum(['MASTER', 'INCLUDE', 'OVERRIDE']),
})
export type OperationalVariantFinalBiomarker = z.infer<typeof OperationalVariantFinalBiomarker>

export const OperationalVariantDetail = z.object({
  id: Uuid,
  testId: Uuid,
  versionId: Uuid,
  configurationName: z.string(),
  versionNumber: z.number().int().nonnegative(),
  dimension: VariantDimension,
  dimensionValue: z.string(),
  familyStructure: FamilyStructure.nullable().optional(),
  operationalCode: z.string().nullable(),
  status: CatalogConfigurationStatus,
  isActive: z.boolean(),
  effectiveDate: UtcDateTime.nullable(),
  expirationDate: UtcDateTime.nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
  cptOverrides: z.array(OperationalVariantCptOverride),
  orderLoincOverrides: z.array(OperationalVariantOrderLoincOverride),
  resultLoincOverrides: z.array(OperationalVariantResultLoincOverride),
  specimenManifest: z.array(OperationalVariantSpecimenManifestEntry),
  biomarkerOverrides: z.array(OperationalVariantBiomarkerOverride).default([]),
  finalBiomarkers: z.array(OperationalVariantFinalBiomarker).optional(),
})
export type OperationalVariantDetail = z.infer<typeof OperationalVariantDetail>

export const OperationalVariantListResponse = z.object({
  items: z.array(OperationalVariantDetail),
})
export type OperationalVariantListResponse = z.infer<typeof OperationalVariantListResponse>

export const CreateOperationalVariantInput = z.object({
  testId: Uuid,
  versionId: Uuid,
  configurationName: z.string().min(1),
  dimension: VariantDimension,
  dimensionValue: z.string().min(1),
  familyStructure: FamilyStructure.nullable().optional(),
  operationalCode: z.string().max(64).nullable().optional(),
  status: CatalogConfigurationStatus,
  isActive: z.boolean().default(true),
  effectiveDate: UtcDateTime.nullable().optional(),
  expirationDate: UtcDateTime.nullable().optional(),
  cptOverrides: z.array(OperationalVariantCptOverrideInput).default([]),
  orderLoincOverrides: z.array(OperationalVariantOrderLoincOverrideInput).default([]),
  resultLoincOverrides: z.array(OperationalVariantResultLoincOverrideInput).default([]),
  specimenManifest: z.array(OperationalVariantSpecimenManifestInput).default([]),
  biomarkerOverrides: z.array(OperationalVariantBiomarkerOverrideInput).default([]),
})
export type CreateOperationalVariantInput = z.infer<typeof CreateOperationalVariantInput>

export const UpdateOperationalVariantInput = CreateOperationalVariantInput.extend({
  configurationId: Uuid,
  createNewVersion: z.boolean().optional(),
})
export type UpdateOperationalVariantInput = z.infer<typeof UpdateOperationalVariantInput>

export const BiomarkerOverridesBulkUpsertInput = z.object({
  configurationId: Uuid,
  overrides: z.array(OperationalVariantBiomarkerOverrideInput),
})
export type BiomarkerOverridesBulkUpsertInput = z.infer<typeof BiomarkerOverridesBulkUpsertInput>

export const BiomarkerOverridesDeleteInput = z.object({
  configurationId: Uuid,
  hgncIds: z.array(z.string().min(1)),
})
export type BiomarkerOverridesDeleteInput = z.infer<typeof BiomarkerOverridesDeleteInput>

export const CustomerVariantDetail = z.object({
  id: Uuid,
  testId: Uuid,
  versionId: Uuid.nullable(),
  configurationName: z.string(),
  versionNumber: z.number().int().nonnegative(),
  customerId: Uuid.nullable(),
  organizationId: Uuid.nullable(),
  status: CatalogConfigurationStatus,
  isActive: z.boolean(),
  effectiveDate: UtcDateTime.nullable(),
  expirationDate: UtcDateTime.nullable(),
  customTestName: z.string().nullable(),
  customDescription: z.string().nullable(),
  customTurnAroundTime: z.string().nullable(),
  customPricing: z.number().nullable(),
  customInstructions: z.string().nullable(),
  createdAt: UtcDateTime,
  updatedAt: UtcDateTime,
})
export type CustomerVariantDetail = z.infer<typeof CustomerVariantDetail>

export const CustomerVariantListResponse = z.object({
  items: z.array(CustomerVariantDetail),
})
export type CustomerVariantListResponse = z.infer<typeof CustomerVariantListResponse>

export const UpsertCustomerVariantInput = z.object({
  configurationId: Uuid.optional(),
  testId: Uuid,
  versionId: Uuid.nullable().optional(),
  configurationName: z.string().min(1),
  customerId: Uuid.nullable().optional(),
  organizationId: Uuid.nullable().optional(),
  status: CatalogConfigurationStatus,
  isActive: z.boolean().default(true),
  effectiveDate: UtcDateTime.nullable().optional(),
  expirationDate: UtcDateTime.nullable().optional(),
  customTestName: z.string().nullable().optional(),
  customDescription: z.string().nullable().optional(),
  customTurnAroundTime: z.string().nullable().optional(),
  customPricing: z.number().nullable().optional(),
  customInstructions: z.string().nullable().optional(),
})
export type UpsertCustomerVariantInput = z.infer<typeof UpsertCustomerVariantInput>

