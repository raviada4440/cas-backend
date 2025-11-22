import { z } from 'zod';
import { ParticipantRoleSchema } from '../inputTypeSchemas/ParticipantRoleSchema'
import { SpecimenTypeSchema } from '../inputTypeSchemas/SpecimenTypeSchema'
import { TestCatalogCollectionMethodSchema } from '../inputTypeSchemas/TestCatalogCollectionMethodSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { TestCatalogVersionSpecimenWithRelationsSchema, TestCatalogVersionSpecimenPartialWithRelationsSchema } from './TestCatalogVersionSpecimenSchema'
import type { TestCatalogVersionSpecimenWithRelations, TestCatalogVersionSpecimenPartialWithRelations } from './TestCatalogVersionSpecimenSchema'

/////////////////////////////////////////
// TEST CONFIG SPECIMEN MANIFEST SCHEMA
/////////////////////////////////////////

export const TestConfigSpecimenManifestSchema = z.object({
  participantRole: ParticipantRoleSchema,
  specimenTypeOverride: SpecimenTypeSchema.nullable(),
  collectionMethodOverride: TestCatalogCollectionMethodSchema.nullable(),
  id: z.string(),
  configurationId: z.string(),
  versionSpecimenId: z.string(),
  isRequired: z.boolean(),
  specimenDisplayNameOverride: z.string().nullable(),
  volumeOverride: z.string().nullable(),
  minimumVolumeOverride: z.string().nullable(),
  preferredVolumeOverride: z.string().nullable(),
  alternateContainersOverride: z.string().nullable(),
  containerOverride: z.string().nullable(),
  specialInstructionsOverride: z.string().nullable(),
  specimenRequirementsOverride: z.string().nullable(),
  collectionOverride: z.string().nullable(),
  stabilityRequirementsOverride: z.string().nullable(),
  storageTransportationOverride: z.string().nullable(),
  patientPreparationOverride: z.string().nullable(),
  causesForRejectionOverride: z.string().nullable(),
  processingNotesOverride: z.string().nullable(),
  displayOrder: z.number().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestConfigSpecimenManifest = z.infer<typeof TestConfigSpecimenManifestSchema>

/////////////////////////////////////////
// TEST CONFIG SPECIMEN MANIFEST PARTIAL SCHEMA
/////////////////////////////////////////

export const TestConfigSpecimenManifestPartialSchema = TestConfigSpecimenManifestSchema.partial()

export type TestConfigSpecimenManifestPartial = z.infer<typeof TestConfigSpecimenManifestPartialSchema>

/////////////////////////////////////////
// TEST CONFIG SPECIMEN MANIFEST RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigSpecimenManifestRelations = {
  configuration: TestCatalogConfigurationWithRelations;
  versionSpecimen: TestCatalogVersionSpecimenWithRelations;
};

export type TestConfigSpecimenManifestWithRelations = z.infer<typeof TestConfigSpecimenManifestSchema> & TestConfigSpecimenManifestRelations

export const TestConfigSpecimenManifestWithRelationsSchema: z.ZodType<TestConfigSpecimenManifestWithRelations> = TestConfigSpecimenManifestSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema),
  versionSpecimen: z.lazy(() => TestCatalogVersionSpecimenWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CONFIG SPECIMEN MANIFEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigSpecimenManifestPartialRelations = {
  configuration?: TestCatalogConfigurationPartialWithRelations;
  versionSpecimen?: TestCatalogVersionSpecimenPartialWithRelations;
};

export type TestConfigSpecimenManifestPartialWithRelations = z.infer<typeof TestConfigSpecimenManifestPartialSchema> & TestConfigSpecimenManifestPartialRelations

export const TestConfigSpecimenManifestPartialWithRelationsSchema: z.ZodType<TestConfigSpecimenManifestPartialWithRelations> = TestConfigSpecimenManifestPartialSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  versionSpecimen: z.lazy(() => TestCatalogVersionSpecimenPartialWithRelationsSchema),
})).partial()

export type TestConfigSpecimenManifestWithPartialRelations = z.infer<typeof TestConfigSpecimenManifestSchema> & TestConfigSpecimenManifestPartialRelations

export const TestConfigSpecimenManifestWithPartialRelationsSchema: z.ZodType<TestConfigSpecimenManifestWithPartialRelations> = TestConfigSpecimenManifestSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  versionSpecimen: z.lazy(() => TestCatalogVersionSpecimenPartialWithRelationsSchema),
}).partial())

export default TestConfigSpecimenManifestSchema;
