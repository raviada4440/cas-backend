import { z } from 'zod';
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { LoincWithRelationsSchema, LoincPartialWithRelationsSchema } from './LoincSchema'
import type { LoincWithRelations, LoincPartialWithRelations } from './LoincSchema'

/////////////////////////////////////////
// TEST CONFIG ORDER LOINC SCHEMA
/////////////////////////////////////////

export const TestConfigOrderLoincSchema = z.object({
  id: z.string(),
  configurationId: z.string(),
  loincCode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestConfigOrderLoinc = z.infer<typeof TestConfigOrderLoincSchema>

/////////////////////////////////////////
// TEST CONFIG ORDER LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const TestConfigOrderLoincPartialSchema = TestConfigOrderLoincSchema.partial()

export type TestConfigOrderLoincPartial = z.infer<typeof TestConfigOrderLoincPartialSchema>

/////////////////////////////////////////
// TEST CONFIG ORDER LOINC RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigOrderLoincRelations = {
  configuration: TestCatalogConfigurationWithRelations;
  loinc: LoincWithRelations;
};

export type TestConfigOrderLoincWithRelations = z.infer<typeof TestConfigOrderLoincSchema> & TestConfigOrderLoincRelations

export const TestConfigOrderLoincWithRelationsSchema: z.ZodType<TestConfigOrderLoincWithRelations> = TestConfigOrderLoincSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema),
  loinc: z.lazy(() => LoincWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CONFIG ORDER LOINC PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigOrderLoincPartialRelations = {
  configuration?: TestCatalogConfigurationPartialWithRelations;
  loinc?: LoincPartialWithRelations;
};

export type TestConfigOrderLoincPartialWithRelations = z.infer<typeof TestConfigOrderLoincPartialSchema> & TestConfigOrderLoincPartialRelations

export const TestConfigOrderLoincPartialWithRelationsSchema: z.ZodType<TestConfigOrderLoincPartialWithRelations> = TestConfigOrderLoincPartialSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
})).partial()

export type TestConfigOrderLoincWithPartialRelations = z.infer<typeof TestConfigOrderLoincSchema> & TestConfigOrderLoincPartialRelations

export const TestConfigOrderLoincWithPartialRelationsSchema: z.ZodType<TestConfigOrderLoincWithPartialRelations> = TestConfigOrderLoincSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
}).partial())

export default TestConfigOrderLoincSchema;
