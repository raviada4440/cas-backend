import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from '../inputTypeSchemas/BiomarkerOverrideActionSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { BiomarkerWithRelationsSchema, BiomarkerPartialWithRelationsSchema } from './BiomarkerSchema'
import type { BiomarkerWithRelations, BiomarkerPartialWithRelations } from './BiomarkerSchema'

/////////////////////////////////////////
// TEST CONFIG BIOMARKER SCHEMA
/////////////////////////////////////////

export const TestConfigBiomarkerSchema = z.object({
  action: BiomarkerOverrideActionSchema,
  id: z.string(),
  configurationId: z.string(),
  hgncId: z.string(),
  transcriptReference: z.string().nullable(),
  reportTier: z.string().nullable(),
  isReportable: z.boolean().nullable(),
  displayOrder: z.number().nullable(),
  notes: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestConfigBiomarker = z.infer<typeof TestConfigBiomarkerSchema>

/////////////////////////////////////////
// TEST CONFIG BIOMARKER PARTIAL SCHEMA
/////////////////////////////////////////

export const TestConfigBiomarkerPartialSchema = TestConfigBiomarkerSchema.partial()

export type TestConfigBiomarkerPartial = z.infer<typeof TestConfigBiomarkerPartialSchema>

/////////////////////////////////////////
// TEST CONFIG BIOMARKER RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigBiomarkerRelations = {
  configuration: TestCatalogConfigurationWithRelations;
  biomarker: BiomarkerWithRelations;
};

export type TestConfigBiomarkerWithRelations = z.infer<typeof TestConfigBiomarkerSchema> & TestConfigBiomarkerRelations

export const TestConfigBiomarkerWithRelationsSchema: z.ZodType<TestConfigBiomarkerWithRelations> = TestConfigBiomarkerSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema),
  biomarker: z.lazy(() => BiomarkerWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CONFIG BIOMARKER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigBiomarkerPartialRelations = {
  configuration?: TestCatalogConfigurationPartialWithRelations;
  biomarker?: BiomarkerPartialWithRelations;
};

export type TestConfigBiomarkerPartialWithRelations = z.infer<typeof TestConfigBiomarkerPartialSchema> & TestConfigBiomarkerPartialRelations

export const TestConfigBiomarkerPartialWithRelationsSchema: z.ZodType<TestConfigBiomarkerPartialWithRelations> = TestConfigBiomarkerPartialSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  biomarker: z.lazy(() => BiomarkerPartialWithRelationsSchema),
})).partial()

export type TestConfigBiomarkerWithPartialRelations = z.infer<typeof TestConfigBiomarkerSchema> & TestConfigBiomarkerPartialRelations

export const TestConfigBiomarkerWithPartialRelationsSchema: z.ZodType<TestConfigBiomarkerWithPartialRelations> = TestConfigBiomarkerSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  biomarker: z.lazy(() => BiomarkerPartialWithRelationsSchema),
}).partial())

export default TestConfigBiomarkerSchema;
