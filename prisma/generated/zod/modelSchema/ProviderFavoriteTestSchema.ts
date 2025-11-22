import { z } from 'zod';
import { ProviderWithRelationsSchema, ProviderPartialWithRelationsSchema } from './ProviderSchema'
import type { ProviderWithRelations, ProviderPartialWithRelations } from './ProviderSchema'
import { TestCatalogWithRelationsSchema, TestCatalogPartialWithRelationsSchema } from './TestCatalogSchema'
import type { TestCatalogWithRelations, TestCatalogPartialWithRelations } from './TestCatalogSchema'

/////////////////////////////////////////
// PROVIDER FAVORITE TEST SCHEMA
/////////////////////////////////////////

export const ProviderFavoriteTestSchema = z.object({
  id: z.string(),
  providerId: z.string().nullable(),
  parentId: z.string().nullable(),
  parentName: z.string().nullable(),
  level: z.number().nullable(),
  testId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type ProviderFavoriteTest = z.infer<typeof ProviderFavoriteTestSchema>

/////////////////////////////////////////
// PROVIDER FAVORITE TEST PARTIAL SCHEMA
/////////////////////////////////////////

export const ProviderFavoriteTestPartialSchema = ProviderFavoriteTestSchema.partial()

export type ProviderFavoriteTestPartial = z.infer<typeof ProviderFavoriteTestPartialSchema>

/////////////////////////////////////////
// PROVIDER FAVORITE TEST RELATION SCHEMA
/////////////////////////////////////////

export type ProviderFavoriteTestRelations = {
  provider?: ProviderWithRelations | null;
  testCatalog?: TestCatalogWithRelations | null;
};

export type ProviderFavoriteTestWithRelations = z.infer<typeof ProviderFavoriteTestSchema> & ProviderFavoriteTestRelations

export const ProviderFavoriteTestWithRelationsSchema: z.ZodType<ProviderFavoriteTestWithRelations> = ProviderFavoriteTestSchema.merge(z.object({
  provider: z.lazy(() => ProviderWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// PROVIDER FAVORITE TEST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ProviderFavoriteTestPartialRelations = {
  provider?: ProviderPartialWithRelations | null;
  testCatalog?: TestCatalogPartialWithRelations | null;
};

export type ProviderFavoriteTestPartialWithRelations = z.infer<typeof ProviderFavoriteTestPartialSchema> & ProviderFavoriteTestPartialRelations

export const ProviderFavoriteTestPartialWithRelationsSchema: z.ZodType<ProviderFavoriteTestPartialWithRelations> = ProviderFavoriteTestPartialSchema.merge(z.object({
  provider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
})).partial()

export type ProviderFavoriteTestWithPartialRelations = z.infer<typeof ProviderFavoriteTestSchema> & ProviderFavoriteTestPartialRelations

export const ProviderFavoriteTestWithPartialRelationsSchema: z.ZodType<ProviderFavoriteTestWithPartialRelations> = ProviderFavoriteTestSchema.merge(z.object({
  provider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
  testCatalog: z.lazy(() => TestCatalogPartialWithRelationsSchema).nullable(),
}).partial())

export default ProviderFavoriteTestSchema;
