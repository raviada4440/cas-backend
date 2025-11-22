import { z } from 'zod';
import { SpecimenTypeSchema } from '../inputTypeSchemas/SpecimenTypeSchema'
import { TestCatalogCollectionMethodSchema } from '../inputTypeSchemas/TestCatalogCollectionMethodSchema'
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestConfigSpecimenManifestWithRelationsSchema, TestConfigSpecimenManifestPartialWithRelationsSchema } from './TestConfigSpecimenManifestSchema'
import type { TestConfigSpecimenManifestWithRelations, TestConfigSpecimenManifestPartialWithRelations } from './TestConfigSpecimenManifestSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION SPECIMEN SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionSpecimenSchema = z.object({
  specimenType: SpecimenTypeSchema.nullable(),
  collectionMethod: TestCatalogCollectionMethodSchema.nullable(),
  id: z.string(),
  versionId: z.string(),
  displayName: z.string().nullable(),
  isPrimary: z.boolean(),
  isRequired: z.boolean(),
  specimenRequirements: z.string().nullable(),
  volume: z.string().nullable(),
  minimumVolume: z.string().nullable(),
  container: z.string().nullable(),
  specialInstructions: z.string().nullable(),
  alternateContainers: z.string().nullable(),
  preferredVolume: z.string().nullable(),
  collection: z.string().nullable(),
  stabilityRequirements: z.string().nullable(),
  storageTransportation: z.string().nullable(),
  patientPreparation: z.string().nullable(),
  causesForRejection: z.string().nullable(),
  processingNotes: z.string().nullable(),
  displayOrder: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionSpecimen = z.infer<typeof TestCatalogVersionSpecimenSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION SPECIMEN PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionSpecimenPartialSchema = TestCatalogVersionSpecimenSchema.partial()

export type TestCatalogVersionSpecimenPartial = z.infer<typeof TestCatalogVersionSpecimenPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION SPECIMEN RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionSpecimenRelations = {
  version: TestCatalogVersionWithRelations;
  variantManifests: TestConfigSpecimenManifestWithRelations[];
};

export type TestCatalogVersionSpecimenWithRelations = z.infer<typeof TestCatalogVersionSpecimenSchema> & TestCatalogVersionSpecimenRelations

export const TestCatalogVersionSpecimenWithRelationsSchema: z.ZodType<TestCatalogVersionSpecimenWithRelations> = TestCatalogVersionSpecimenSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  variantManifests: z.lazy(() => TestConfigSpecimenManifestWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION SPECIMEN PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionSpecimenPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  variantManifests?: TestConfigSpecimenManifestPartialWithRelations[];
};

export type TestCatalogVersionSpecimenPartialWithRelations = z.infer<typeof TestCatalogVersionSpecimenPartialSchema> & TestCatalogVersionSpecimenPartialRelations

export const TestCatalogVersionSpecimenPartialWithRelationsSchema: z.ZodType<TestCatalogVersionSpecimenPartialWithRelations> = TestCatalogVersionSpecimenPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  variantManifests: z.lazy(() => TestConfigSpecimenManifestPartialWithRelationsSchema).array(),
})).partial()

export type TestCatalogVersionSpecimenWithPartialRelations = z.infer<typeof TestCatalogVersionSpecimenSchema> & TestCatalogVersionSpecimenPartialRelations

export const TestCatalogVersionSpecimenWithPartialRelationsSchema: z.ZodType<TestCatalogVersionSpecimenWithPartialRelations> = TestCatalogVersionSpecimenSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  variantManifests: z.lazy(() => TestConfigSpecimenManifestPartialWithRelationsSchema).array(),
}).partial())

export default TestCatalogVersionSpecimenSchema;
