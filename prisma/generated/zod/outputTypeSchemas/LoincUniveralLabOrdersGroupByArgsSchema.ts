import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersWhereInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereInputSchema'
import { LoincUniveralLabOrdersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersOrderByWithAggregationInputSchema'
import { LoincUniveralLabOrdersScalarFieldEnumSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersScalarFieldEnumSchema'
import { LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema'

export const LoincUniveralLabOrdersGroupByArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersGroupByArgs> = z.object({
  where: LoincUniveralLabOrdersWhereInputSchema.optional(), 
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithAggregationInputSchema.array(), LoincUniveralLabOrdersOrderByWithAggregationInputSchema ]).optional(),
  by: LoincUniveralLabOrdersScalarFieldEnumSchema.array(), 
  having: LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincUniveralLabOrdersGroupByArgsSchema;
