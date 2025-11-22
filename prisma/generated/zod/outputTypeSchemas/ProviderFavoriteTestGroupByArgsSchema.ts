import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestWhereInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereInputSchema'
import { ProviderFavoriteTestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestOrderByWithAggregationInputSchema'
import { ProviderFavoriteTestScalarFieldEnumSchema } from '../inputTypeSchemas/ProviderFavoriteTestScalarFieldEnumSchema'
import { ProviderFavoriteTestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestScalarWhereWithAggregatesInputSchema'

export const ProviderFavoriteTestGroupByArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestGroupByArgs> = z.object({
  where: ProviderFavoriteTestWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderFavoriteTestOrderByWithAggregationInputSchema.array(), ProviderFavoriteTestOrderByWithAggregationInputSchema ]).optional(),
  by: ProviderFavoriteTestScalarFieldEnumSchema.array(), 
  having: ProviderFavoriteTestScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderFavoriteTestGroupByArgsSchema;
