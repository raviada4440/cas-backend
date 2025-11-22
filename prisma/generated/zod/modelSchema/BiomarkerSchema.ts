import { z } from 'zod';
import { TestCatalogVersionBiomarkerWithRelationsSchema, TestCatalogVersionBiomarkerPartialWithRelationsSchema } from './TestCatalogVersionBiomarkerSchema'
import type { TestCatalogVersionBiomarkerWithRelations, TestCatalogVersionBiomarkerPartialWithRelations } from './TestCatalogVersionBiomarkerSchema'
import { TestConfigBiomarkerWithRelationsSchema, TestConfigBiomarkerPartialWithRelationsSchema } from './TestConfigBiomarkerSchema'
import type { TestConfigBiomarkerWithRelations, TestConfigBiomarkerPartialWithRelations } from './TestConfigBiomarkerSchema'

/////////////////////////////////////////
// BIOMARKER SCHEMA
/////////////////////////////////////////

export const BiomarkerSchema = z.object({
  hgncId: z.string(),
  hgncStatus: z.string().nullable(),
  hgncApprovedSymbol: z.string().nullable(),
  hgncApprovedName: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Biomarker = z.infer<typeof BiomarkerSchema>

/////////////////////////////////////////
// BIOMARKER PARTIAL SCHEMA
/////////////////////////////////////////

export const BiomarkerPartialSchema = BiomarkerSchema.partial()

export type BiomarkerPartial = z.infer<typeof BiomarkerPartialSchema>

/////////////////////////////////////////
// BIOMARKER RELATION SCHEMA
/////////////////////////////////////////

export type BiomarkerRelations = {
  testBiomarkers: TestCatalogVersionBiomarkerWithRelations[];
  configOverrides: TestConfigBiomarkerWithRelations[];
};

export type BiomarkerWithRelations = z.infer<typeof BiomarkerSchema> & BiomarkerRelations

export const BiomarkerWithRelationsSchema: z.ZodType<BiomarkerWithRelations> = BiomarkerSchema.merge(z.object({
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerWithRelationsSchema).array(),
  configOverrides: z.lazy(() => TestConfigBiomarkerWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BIOMARKER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BiomarkerPartialRelations = {
  testBiomarkers?: TestCatalogVersionBiomarkerPartialWithRelations[];
  configOverrides?: TestConfigBiomarkerPartialWithRelations[];
};

export type BiomarkerPartialWithRelations = z.infer<typeof BiomarkerPartialSchema> & BiomarkerPartialRelations

export const BiomarkerPartialWithRelationsSchema: z.ZodType<BiomarkerPartialWithRelations> = BiomarkerPartialSchema.merge(z.object({
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerPartialWithRelationsSchema).array(),
  configOverrides: z.lazy(() => TestConfigBiomarkerPartialWithRelationsSchema).array(),
})).partial()

export type BiomarkerWithPartialRelations = z.infer<typeof BiomarkerSchema> & BiomarkerPartialRelations

export const BiomarkerWithPartialRelationsSchema: z.ZodType<BiomarkerWithPartialRelations> = BiomarkerSchema.merge(z.object({
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerPartialWithRelationsSchema).array(),
  configOverrides: z.lazy(() => TestConfigBiomarkerPartialWithRelationsSchema).array(),
}).partial())

export default BiomarkerSchema;
