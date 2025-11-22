import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderWhereInputSchema } from '../inputTypeSchemas/ProviderWhereInputSchema'
import { ProviderOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProviderOrderByWithAggregationInputSchema'
import { ProviderScalarFieldEnumSchema } from '../inputTypeSchemas/ProviderScalarFieldEnumSchema'
import { ProviderScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProviderScalarWhereWithAggregatesInputSchema'

export const ProviderGroupByArgsSchema: z.ZodType<Prisma.ProviderGroupByArgs> = z.object({
  where: ProviderWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderOrderByWithAggregationInputSchema.array(), ProviderOrderByWithAggregationInputSchema ]).optional(),
  by: ProviderScalarFieldEnumSchema.array(), 
  having: ProviderScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderGroupByArgsSchema;
