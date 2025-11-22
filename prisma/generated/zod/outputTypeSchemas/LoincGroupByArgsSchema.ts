import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincWhereInputSchema } from '../inputTypeSchemas/LoincWhereInputSchema'
import { LoincOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LoincOrderByWithAggregationInputSchema'
import { LoincScalarFieldEnumSchema } from '../inputTypeSchemas/LoincScalarFieldEnumSchema'
import { LoincScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LoincScalarWhereWithAggregatesInputSchema'

export const LoincGroupByArgsSchema: z.ZodType<Prisma.LoincGroupByArgs> = z.object({
  where: LoincWhereInputSchema.optional(), 
  orderBy: z.union([ LoincOrderByWithAggregationInputSchema.array(), LoincOrderByWithAggregationInputSchema ]).optional(),
  by: LoincScalarFieldEnumSchema.array(), 
  having: LoincScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincGroupByArgsSchema;
