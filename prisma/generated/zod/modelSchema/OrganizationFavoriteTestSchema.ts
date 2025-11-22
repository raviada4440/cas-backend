import { z } from 'zod';
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'

/////////////////////////////////////////
// ORGANIZATION FAVORITE TEST SCHEMA
/////////////////////////////////////////

export const OrganizationFavoriteTestSchema = z.object({
  id: z.string(),
  organizationId: z.string().nullable(),
  parentId: z.string().nullable(),
  parentName: z.string().nullable(),
  level: z.number().nullable(),
  testId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type OrganizationFavoriteTest = z.infer<typeof OrganizationFavoriteTestSchema>

/////////////////////////////////////////
// ORGANIZATION FAVORITE TEST PARTIAL SCHEMA
/////////////////////////////////////////

export const OrganizationFavoriteTestPartialSchema = OrganizationFavoriteTestSchema.partial()

export type OrganizationFavoriteTestPartial = z.infer<typeof OrganizationFavoriteTestPartialSchema>

/////////////////////////////////////////
// ORGANIZATION FAVORITE TEST RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationFavoriteTestRelations = {
  organization?: OrganizationWithRelations | null;
  testCatalog?: TestCatalogWithRelations | null;
};

export type OrganizationFavoriteTestWithRelations = z.infer<typeof OrganizationFavoriteTestSchema> & OrganizationFavoriteTestRelations

export const OrganizationFavoriteTestWithRelationsSchema: z.ZodType<OrganizationFavoriteTestWithRelations> = OrganizationFavoriteTestSchema.merge(z.object({
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// ORGANIZATION FAVORITE TEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type OrganizationFavoriteTestPartialRelations = {
  organization?: OrganizationPartialWithRelations | null;
  testCatalog?: TestCatalogPartialWithRelations | null;
};

export type OrganizationFavoriteTestPartialWithRelations = z.infer<typeof OrganizationFavoriteTestPartialSchema> & OrganizationFavoriteTestPartialRelations

export const OrganizationFavoriteTestPartialWithRelationsSchema: z.ZodType<OrganizationFavoriteTestPartialWithRelations> = OrganizationFavoriteTestPartialSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
})).partial()

export type OrganizationFavoriteTestWithPartialRelations = z.infer<typeof OrganizationFavoriteTestSchema> & OrganizationFavoriteTestPartialRelations

export const OrganizationFavoriteTestWithPartialRelationsSchema: z.ZodType<OrganizationFavoriteTestWithPartialRelations> = OrganizationFavoriteTestSchema.merge(z.object({
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
}).partial())

export default OrganizationFavoriteTestSchema;
