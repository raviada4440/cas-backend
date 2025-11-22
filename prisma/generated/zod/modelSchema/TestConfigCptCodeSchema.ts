import { z } from 'zod';
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'

/////////////////////////////////////////
// TEST CONFIG CPT CODE SCHEMA
/////////////////////////////////////////

export const TestConfigCptCodeSchema = z.object({
  id: z.string(),
  configurationId: z.string(),
  cptCode: z.string(),
  modifier: z.string().nullable(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestConfigCptCode = z.infer<typeof TestConfigCptCodeSchema>

/////////////////////////////////////////
// TEST CONFIG CPT CODE PARTIAL SCHEMA
/////////////////////////////////////////

export const TestConfigCptCodePartialSchema = TestConfigCptCodeSchema.partial()

export type TestConfigCptCodePartial = z.infer<typeof TestConfigCptCodePartialSchema>

/////////////////////////////////////////
// TEST CONFIG CPT CODE RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigCptCodeRelations = {
  configuration: TestCatalogConfigurationWithRelations;
};

export type TestConfigCptCodeWithRelations = z.infer<typeof TestConfigCptCodeSchema> & TestConfigCptCodeRelations

export const TestConfigCptCodeWithRelationsSchema: z.ZodType<TestConfigCptCodeWithRelations> = TestConfigCptCodeSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CONFIG CPT CODE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigCptCodePartialRelations = {
  configuration?: TestCatalogConfigurationPartialWithRelations;
};

export type TestConfigCptCodePartialWithRelations = z.infer<typeof TestConfigCptCodePartialSchema> & TestConfigCptCodePartialRelations

export const TestConfigCptCodePartialWithRelationsSchema: z.ZodType<TestConfigCptCodePartialWithRelations> = TestConfigCptCodePartialSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
})).partial()

export type TestConfigCptCodeWithPartialRelations = z.infer<typeof TestConfigCptCodeSchema> & TestConfigCptCodePartialRelations

export const TestConfigCptCodeWithPartialRelationsSchema: z.ZodType<TestConfigCptCodeWithPartialRelations> = TestConfigCptCodeSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
}).partial())

export default TestConfigCptCodeSchema;
