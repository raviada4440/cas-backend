import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeWhereInputSchema } from '../inputTypeSchemas/CptCodeWhereInputSchema'
import { CptCodeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CptCodeOrderByWithAggregationInputSchema'
import { CptCodeScalarFieldEnumSchema } from '../inputTypeSchemas/CptCodeScalarFieldEnumSchema'
import { CptCodeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CptCodeScalarWhereWithAggregatesInputSchema'

export const CptCodeGroupByArgsSchema: z.ZodType<Prisma.CptCodeGroupByArgs> = z.object({
  where: CptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ CptCodeOrderByWithAggregationInputSchema.array(), CptCodeOrderByWithAggregationInputSchema ]).optional(),
  by: CptCodeScalarFieldEnumSchema.array(), 
  having: CptCodeScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CptCodeGroupByArgsSchema;
