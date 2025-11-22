import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestIncludeSchema } from '../inputTypeSchemas/ProviderFavoriteTestIncludeSchema'
import { ProviderFavoriteTestCreateInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestCreateInputSchema'
import { ProviderFavoriteTestUncheckedCreateInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestUncheckedCreateInputSchema'
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

export const ProviderFavoriteTestCreateArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateArgs> = z.object({
  select: ProviderFavoriteTestSelectSchema.optional(),
  include: z.lazy(() => ProviderFavoriteTestIncludeSchema).optional(),
  data: z.union([ ProviderFavoriteTestCreateInputSchema, ProviderFavoriteTestUncheckedCreateInputSchema ]),
}).strict();

export default ProviderFavoriteTestCreateArgsSchema;
