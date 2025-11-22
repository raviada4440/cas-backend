import { z } from 'zod';
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'

/////////////////////////////////////////
// TEST CATALOG VERSION CPT CODE SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionCptCodeSchema = z.object({
  id: z.string(),
  versionId: z.string(),
  cptCode: z.string(),
  modifier: z.string().nullable(),
  isPrimary: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestCatalogVersionCptCode = z.infer<typeof TestCatalogVersionCptCodeSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION CPT CODE PARTIAL SCHEMA
/////////////////////////////////////////

export const TestCatalogVersionCptCodePartialSchema = TestCatalogVersionCptCodeSchema.partial()

export type TestCatalogVersionCptCodePartial = z.infer<typeof TestCatalogVersionCptCodePartialSchema>

/////////////////////////////////////////
// TEST CATALOG VERSION CPT CODE RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionCptCodeRelations = {
  version: TestCatalogVersionWithRelations;
};

export type TestCatalogVersionCptCodeWithRelations = z.infer<typeof TestCatalogVersionCptCodeSchema> & TestCatalogVersionCptCodeRelations

export const TestCatalogVersionCptCodeWithRelationsSchema: z.ZodType<TestCatalogVersionCptCodeWithRelations> = TestCatalogVersionCptCodeSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST CATALOG VERSION CPT CODE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestCatalogVersionCptCodePartialRelations = {
  version?: TestCatalogVersionPartialWithRelations;
};

export type TestCatalogVersionCptCodePartialWithRelations = z.infer<typeof TestCatalogVersionCptCodePartialSchema> & TestCatalogVersionCptCodePartialRelations

export const TestCatalogVersionCptCodePartialWithRelationsSchema: z.ZodType<TestCatalogVersionCptCodePartialWithRelations> = TestCatalogVersionCptCodePartialSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
})).partial()

export type TestCatalogVersionCptCodeWithPartialRelations = z.infer<typeof TestCatalogVersionCptCodeSchema> & TestCatalogVersionCptCodePartialRelations

export const TestCatalogVersionCptCodeWithPartialRelationsSchema: z.ZodType<TestCatalogVersionCptCodeWithPartialRelations> = TestCatalogVersionCptCodeSchema.merge(z.object({
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
}).partial())

export default TestCatalogVersionCptCodeSchema;
