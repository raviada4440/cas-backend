import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { LoincWithRelationsSchema, LoincPartialWithRelationsSchema } from './LoincSchema'
import type { LoincWithRelations, LoincPartialWithRelations } from './LoincSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION RESULT LOINC SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionResultLoincSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  resultCode: z.string().nullable(),
  resultCodeName: z.string().nullable(),
  uom: z.string().nullable(),
  loincCode: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionResultLoinc = z.infer<typeof TestCatalogVersionResultLoincSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION RESULT LOINC PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionResultLoincPartialSchema = TestCatalogVersionResultLoincSchema.partial()

export type TestCatalogVersionResultLoincPartial = z.infer<typeof TestCatalogVersionResultLoincPartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION RESULT LOINC RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionResultLoincRelations = {
  version: TestCatalogVersionWithRelations;
  loinc: LoincWithRelations;
};

export type TestCatalogVersionResultLoincWithRelations = z.infer<typeof TestCatalogVersionResultLoincSchema> & TestCatalogVersionResultLoincRelations

export const TestCatalogVersionResultLoincWithRelationsSchema: z.ZodType<TestCatalogVersionResultLoincWithRelations> = TestCatalogVersionResultLoincSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  loinc: z.lazy(() => LoincWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION RESULT LOINC PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionResultLoincPartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
  loinc?: LoincPartialWithRelations;
};

export type TestCatalogVersionResultLoincPartialWithRelations = z.infer<typeof TestCatalogVersionResultLoincPartialSchema> & TestCatalogVersionResultLoincPartialRelations

export const TestCatalogVersionResultLoincPartialWithRelationsSchema: z.ZodType<TestCatalogVersionResultLoincPartialWithRelations> = TestCatalogVersionResultLoincPartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
})).partial()

export type TestCatalogVersionResultLoincWithPartialRelations = z.infer<typeof TestCatalogVersionResultLoincSchema> & TestCatalogVersionResultLoincPartialRelations

export const TestCatalogVersionResultLoincWithPartialRelationsSchema: z.ZodType<TestCatalogVersionResultLoincWithPartialRelations> = TestCatalogVersionResultLoincSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  loinc: z.lazy(() => LoincPartialWithRelationsSchema),
}).partial())

export default TestCatalogVersionResultLoincSchema;
