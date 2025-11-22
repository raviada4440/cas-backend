import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { BiomarkerWithRelationsSchema, BiomarkerPartialWithRelationsSchema } from './BiomarkerSchema'
import type { BiomarkerWithRelations, BiomarkerPartialWithRelations } from './BiomarkerSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION BIOMARKER SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionBiomarkerSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  hgncId: z.string(),
  transcriptReference: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionBiomarker = z.infer<typeof TestCatalogVersionBiomarkerSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION BIOMARKER PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionBiomarkerPartialSchema = TestCatalogVersionBiomarkerSchema.partial()

export type TestCatalogVersionBiomarkerPartial = z.infer<typeof TestCatalogVersionBiomarkerPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION BIOMARKER RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionBiomarkerRelations = {
  version: TestCatalogVersionWithRelations;
  biomarker: BiomarkerWithRelations;
};

export type TestCatalogVersionBiomarkerWithRelations = z.infer<typeof TestCatalogVersionBiomarkerSchema> & TestCatalogVersionBiomarkerRelations

export const TestCatalogVersionBiomarkerWithRelationsSchema: z.ZodType<TestCatalogVersionBiomarkerWithRelations> = TestCatalogVersionBiomarkerSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  biomarker: z.lazy(() => BiomarkerWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION BIOMARKER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionBiomarkerPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  biomarker?: BiomarkerPartialWithRelations;
};

export type TestCatalogVersionBiomarkerPartialWithRelations = z.infer<typeof TestCatalogVersionBiomarkerPartialSchema> & TestCatalogVersionBiomarkerPartialRelations

export const TestCatalogVersionBiomarkerPartialWithRelationsSchema: z.ZodType<TestCatalogVersionBiomarkerPartialWithRelations> = TestCatalogVersionBiomarkerPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  biomarker: z.lazy(() => BiomarkerPartialWithRelationsSchema),
})).partial()

export type TestCatalogVersionBiomarkerWithPartialRelations = z.infer<typeof TestCatalogVersionBiomarkerSchema> & TestCatalogVersionBiomarkerPartialRelations

export const TestCatalogVersionBiomarkerWithPartialRelationsSchema: z.ZodType<TestCatalogVersionBiomarkerWithPartialRelations> = TestCatalogVersionBiomarkerSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  biomarker: z.lazy(() => BiomarkerPartialWithRelationsSchema),
}).partial())

export default TestCatalogVersionBiomarkerSchema;
