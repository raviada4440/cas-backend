import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestIncludeSchema } from '../inputTypeSchemas/ProviderFavoriteTestIncludeSchema'
import { ProviderFavoriteTestWhereInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereInputSchema'
import { ProviderFavoriteTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestOrderByWithRelationInputSchema'
import { ProviderFavoriteTestWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereUniqueInputSchema'
import { ProviderFavoriteTestScalarFieldEnumSchema } from '../inputTypeSchemas/ProviderFavoriteTestScalarFieldEnumSchema'
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

export const ProviderFavoriteTestFindManyArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestFindManyArgs> = z.object({
  select: ProviderFavoriteTestSelectSchema.optional(),
  include: z.lazy(() => ProviderFavoriteTestIncludeSchema).optional(),
  where: ProviderFavoriteTestWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderFavoriteTestOrderByWithRelationInputSchema.array(), ProviderFavoriteTestOrderByWithRelationInputSchema ]).optional(),
  cursor: ProviderFavoriteTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProviderFavoriteTestScalarFieldEnumSchema, ProviderFavoriteTestScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ProviderFavoriteTestFindManyArgsSchema;
