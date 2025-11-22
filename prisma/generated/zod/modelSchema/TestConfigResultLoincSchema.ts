import { z } from 'zod';
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { LoincWithRelationsSchema, LoincPartialWithRelationsSchema } from './LoincSchema'
import type { LoincWithRelations, LoincPartialWithRelations } from './LoincSchema'

/////////////////////////////////////////
// TEST CONFIG RESULT LOINC SCHEMA
/////////////////////////////////////////

export const TestConfigResultLoincSchema = z.object({
  id: z.string(),
  configurationId: z.string(),
  resultCode: z.string().nullable(),
  resultCodeName: z.string().nullable(),
  uom: z.string().nullable(),
  loincCode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestConfigResultLoinc = z.infer<typeof TestConfigResultLoincSchema>

/////////////////////////////////////////
// TEST CONFIG RESULT LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const TestConfigResultLoincPartialSchema = TestConfigResultLoincSchema.partial()

export type TestConfigResultLoincPartial = z.infer<typeof TestConfigResultLoincPartialSchema>

/////////////////////////////////////////
// TEST CONFIG RESULT LOINC RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigResultLoincRelations = {
  configuration: TestCatalogConfigurationWithRelations;
  loinc: LoincWithRelations;
};

export type TestConfigResultLoincWithRelations = z.infer<typeof TestConfigResultLoincSchema> & TestConfigResultLoincRelations

export const TestConfigResultLoincWithRelationsSchema: z.ZodType<TestConfigResultLoincWithRelations> = TestConfigResultLoincSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema),
  loinc: z.lazy(() => LoincWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CONFIG RESULT LOINC PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestConfigResultLoincPartialRelations = {
  configuration?: TestCatalogConfigurationPartialWithRelations;
  loinc?: LoincPartialWithRelations;
};

export type TestConfigResultLoincPartialWithRelations = z.infer<typeof TestConfigResultLoincPartialSchema> & TestConfigResultLoincPartialRelations

export const TestConfigResultLoincPartialWithRelationsSchema: z.ZodType<TestConfigResultLoincPartialWithRelations> = TestConfigResultLoincPartialSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
})).partial()

export type TestConfigResultLoincWithPartialRelations = z.infer<typeof TestConfigResultLoincSchema> & TestConfigResultLoincPartialRelations

export const TestConfigResultLoincWithPartialRelationsSchema: z.ZodType<TestConfigResultLoincWithPartialRelations> = TestConfigResultLoincSchema.merge(z.object({
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
}).partial())

export default TestConfigResultLoincSchema;
