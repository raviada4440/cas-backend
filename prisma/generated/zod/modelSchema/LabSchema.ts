import { z } from 'zod';
import { SponsoredTestWithRelationsSchema, SponsoredTestPartialWithRelationsSchema } from './SponsoredTestSchema'
import type { SponsoredTestWithRelations, SponsoredTestPartialWithRelations } from './SponsoredTestSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'
import { LabOrderWithRelationsSchema, LabOrderPartialWithRelationsSchema } from './LabOrderSchema'
import type { LabOrderWithRelations, LabOrderPartialWithRelations } from './LabOrderSchema'

/////////////////////////////////////////
// LAB SCHEMA
/////////////////////////////////////////

export const LabSchema = z.object({
  id: z.string(),
  labName: z.string().nullable(),
  labCode: z.string().nullable(),
  address: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  zip: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Lab = z.infer<typeof LabSchema>

/////////////////////////////////////////
// LAB PARTIAL SCHEMA
/////////////////////////////////////////

export const LabPartialSchema = LabSchema.partial()

export type LabPartial = z.infer<typeof LabPartialSchema>

/////////////////////////////////////////
// LAB RELATION SCHEMA
/////////////////////////////////////////

export type LabRelations = {
  sponsoredTests: SponsoredTestWithRelations[];
  testCatalogs: TestCatalogWithRelations[];
  labOrders: LabOrderWithRelations[];
};

export type LabWithRelations = z.infer<typeof LabSchema> & LabRelations

export const LabWithRelationsSchema: z.ZodType<LabWithRelations> = LabSchema.merge(z.object({
  sponsoredTests: z.lazy(() => SponsoredTestWithRelationsSchema).array(),
  testCatalogs: z.lazy(() => TestCatalogWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// LAB PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabPartialRelations = {
  sponsoredTests?: SponsoredTestPartialWithRelations[];
  testCatalogs?: TestCatalogPartialWithRelations[];
  labOrders?: LabOrderPartialWithRelations[];
};

export type LabPartialWithRelations = z.infer<typeof LabPartialSchema> & LabPartialRelations

export const LabPartialWithRelationsSchema: z.ZodType<LabPartialWithRelations> = LabPartialSchema.merge(z.object({
  sponsoredTests: z.lazy(() => SponsoredTestPartialWithRelationsSchema).array(),
  testCatalogs: z.lazy(() => TestCatalogPartialWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
})).partial()

export type LabWithPartialRelations = z.infer<typeof LabSchema> & LabPartialRelations

export const LabWithPartialRelationsSchema: z.ZodType<LabWithPartialRelations> = LabSchema.merge(z.object({
  sponsoredTests: z.lazy(() => SponsoredTestPartialWithRelationsSchema).array(),
  testCatalogs: z.lazy(() => TestCatalogPartialWithRelationsSchema).array(),
  labOrders: z.lazy(() => LabOrderPartialWithRelationsSchema).array(),
}).partial())

export default LabSchema;
