import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderFavoriteTestWhereInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereInputSchema'
import { ProviderFavoriteTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestOrderByWithRelationInputSchema'
import { ProviderFavoriteTestWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderFavoriteTestWhereUniqueInputSchema'

export const ProviderFavoriteTestAggregateArgsSchema: z.ZodType<Prisma.ProviderFavoriteTestAggregateArgs> = z.object({
  where: ProviderFavoriteTestWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderFavoriteTestOrderByWithRelationInputSchema.array(), ProviderFavoriteTestOrderByWithRelationInputSchema ]).optional(),
  cursor: ProviderFavoriteTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderFavoriteTestAggregateArgsSchema;
