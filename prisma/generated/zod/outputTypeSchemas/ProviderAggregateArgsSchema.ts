import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderWhereInputSchema } from '../inputTypeSchemas/ProviderWhereInputSchema'
import { ProviderOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProviderOrderByWithRelationInputSchema'
import { ProviderWhereUniqueInputSchema } from '../inputTypeSchemas/ProviderWhereUniqueInputSchema'

export const ProviderAggregateArgsSchema: z.ZodType<Prisma.ProviderAggregateArgs> = z.object({
  where: ProviderWhereInputSchema.optional(), 
  orderBy: z.union([ ProviderOrderByWithRelationInputSchema.array(), ProviderOrderByWithRelationInputSchema ]).optional(),
  cursor: ProviderWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProviderAggregateArgsSchema;
