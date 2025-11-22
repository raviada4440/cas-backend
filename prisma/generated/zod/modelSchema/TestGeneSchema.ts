import { z } from 'zod';
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'

/////////////////////////////////////////
// TEST GENE SCHEMA
/////////////////////////////////////////

export const TestGeneSchema = z.object({
  id: z.string(),
  testId: z.string(),
  labTestId: z.string().nullable(),
  gene: z.string(),
  transcriptReference: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type TestGene = z.infer<typeof TestGeneSchema>

/////////////////////////////////////////
// TEST GENE PARTIAL SCHEMA
/////////////////////////////////////////

export const TestGenePartialSchema = TestGeneSchema.partial()

export type TestGenePartial = z.infer<typeof TestGenePartialSchema>

/////////////////////////////////////////
// TEST GENE RELATION SCHEMA
/////////////////////////////////////////

export type TestGeneRelations = {
  testCatalog: TestCatalogWithRelations;
};

export type TestGeneWithRelations = z.infer<typeof TestGeneSchema> & TestGeneRelations

export const TestGeneWithRelationsSchema: z.ZodType<TestGeneWithRelations> = TestGeneSchema.merge(z.object({
  testCatalog: z.lazy(() => TestCatalogWithRelationsSchema),
}))

/////////////////////////////////////////
// TEST GENE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TestGenePartialRelations = {
  testCatalog?: TestCatalogPartialWithRelations;
};

export type TestGenePartialWithRelations = z.infer<typeof TestGenePartialSchema> & TestGenePartialRelations

export const TestGenePartialWithRelationsSchema: z.ZodType<TestGenePartialWithRelations> = TestGenePartialSchema.merge(z.object({
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
})).partial()

export type TestGeneWithPartialRelations = z.infer<typeof TestGeneSchema> & TestGenePartialRelations

export const TestGeneWithPartialRelationsSchema: z.ZodType<TestGeneWithPartialRelations> = TestGeneSchema.merge(z.object({
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema),
}).partial())

export default TestGeneSchema;
