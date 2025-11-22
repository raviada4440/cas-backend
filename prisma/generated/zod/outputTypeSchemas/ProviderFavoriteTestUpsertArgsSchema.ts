import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestIncludeSchema } from '../inputTypeSchemas/ProviderFavoriteTestIncludeSchema'
import { ProviderFavoriteTestWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereUniqueInputSchema'
import { ProviderFavoriteTestCreateInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestCreateInputSchema'
import { ProviderFavoriteTestUncheckedCreateInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestUncheckedCreateInputSchema'
import { ProviderFavoriteTestUpdateInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestUpdateInputSchema'
import { ProviderFavoriteTestUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestUncheckedUpdateInputSchema'
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
import { TestCatalogArgsSchema } from "../outputTypeSchemas/TestCatalogArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProviderFavoriteTestSelectSchema: z.ZodType<Prisma.ProviderFavoriteTestSelect> = z.object({
  id: z.boolean().optional(),
  providerId: z.boolean().optional(),
  parentId: z.boolean().optional(),
  parentName: z.boolean().optional(),
  level: z.boolean().optional(),
  testId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
  testCatalog: z.union([z.boolean(),z.lazy(() => TestCatalogArgsSchema)]).optional(),
}).strict()

export const ProviderFavoriteTestUpsertArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestUpsertArgs> = z.object({
  select: ProviderFavoriteTestSelectSchema.optional(),
  include: z.lazy(() => ProviderFavoriteTestIncludeSchema).optional(),
  where: ProviderFavoriteTestWhereUniqueInputSchema, 
  create: z.union([ ProviderFavoriteTestCreateInputSchema, ProviderFavoriteTestUncheckedCreateInputSchema ]),
  update: z.union([ ProviderFavoriteTestUpdateInputSchema, ProviderFavoriteTestUncheckedUpdateInputSchema ]),
}).strict();

export default ProviderFavoriteTestUpsertArgsSchema;
