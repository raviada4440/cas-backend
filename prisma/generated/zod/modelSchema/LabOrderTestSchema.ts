import { z } from 'zod';
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'

/////////////////////////////////////////
// LAB ORDER TEST SCHEMA
/////////////////////////////////////////

export const LabOrderTestSchema = z.object({
  id: z.string(),
  labOrderId: z.string().nullable(),
  testId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrderTest = z.infer<typeof LabOrderTestSchema>

/////////////////////////////////////////
// LAB ORDER TEST PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderTestPartialSchema = LabOrderTestSchema.partial()

export type LabOrderTestPartial = z.infer<typeof LabOrderTestPartialSchema>

/////////////////////////////////////////
// LAB ORDER TEST RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderTestRelations = {
  labOrder?: LabOrderWithRelations | null;
  testCatalog?: TestCatalogWithRelations | null;
};

export type LabOrderTestWithRelations = z.infer<typeof LabOrderTestSchema> & LabOrderTestRelations

export const LabOrderTestWithRelationsSchema: z.ZodType<LabOrderTestWithRelations> = LabOrderTestSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// LAB ORDER TEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderTestPartialRelations = {
  labOrder?: LabOrderPartialWithRelations | null;
  testCatalog?: TestCatalogPartialWithRelations | null;
};

export type LabOrderTestPartialWithRelations = z.infer<typeof LabOrderTestPartialSchema> & LabOrderTestPartialRelations

export const LabOrderTestPartialWithRelationsSchema: z.ZodType<LabOrderTestPartialWithRelations> = LabOrderTestPartialSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
})).partial()

export type LabOrderTestWithPartialRelations = z.infer<typeof LabOrderTestSchema> & LabOrderTestPartialRelations

export const LabOrderTestWithPartialRelationsSchema: z.ZodType<LabOrderTestWithPartialRelations> = LabOrderTestSchema.merge(z.object({
  labOrder: z.lazy(() => LabOrderPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
}).partial())

export default LabOrderTestSchema;
