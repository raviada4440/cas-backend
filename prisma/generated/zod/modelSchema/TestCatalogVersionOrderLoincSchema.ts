import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { LoincWithRelationsSchema, LoincPartialWithRelationsSchema } from './LoincSchema'
import type { LoincWithRelations, LoincPartialWithRelations } from './LoincSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER LOINC SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionOrderLoincSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  loincCode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionOrderLoinc = z.infer<typeof TestCatalogVersionOrderLoincSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionOrderLoincPartialSchema = TestCatalogVersionOrderLoincSchema.partial()

export type TestCatalogVersionOrderLoincPartial = z.infer<typeof TestCatalogVersionOrderLoincPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER LOINC RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionOrderLoincRelations = {
  version: TestCatalogVersionWithRelations;
  loinc: LoincWithRelations;
};

export type TestCatalogVersionOrderLoincWithRelations = z.infer<typeof TestCatalogVersionOrderLoincSchema> & TestCatalogVersionOrderLoincRelations

export const TestCatalogVersionOrderLoincWithRelationsSchema: z.ZodType<TestCatalogVersionOrderLoincWithRelations> = TestCatalogVersionOrderLoincSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  loinc: z.lazy(() => LoincWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION ORDER LOINC PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionOrderLoincPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  loinc?: LoincPartialWithRelations;
};

export type TestCatalogVersionOrderLoincPartialWithRelations = z.infer<typeof TestCatalogVersionOrderLoincPartialSchema> & TestCatalogVersionOrderLoincPartialRelations

export const TestCatalogVersionOrderLoincPartialWithRelationsSchema: z.ZodType<TestCatalogVersionOrderLoincPartialWithRelations> = TestCatalogVersionOrderLoincPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
})).partial()

export type TestCatalogVersionOrderLoincWithPartialRelations = z.infer<typeof TestCatalogVersionOrderLoincSchema> & TestCatalogVersionOrderLoincPartialRelations

export const TestCatalogVersionOrderLoincWithPartialRelationsSchema: z.ZodType<TestCatalogVersionOrderLoincWithPartialRelations> = TestCatalogVersionOrderLoincSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
}).partial())

export default TestCatalogVersionOrderLoincSchema;
