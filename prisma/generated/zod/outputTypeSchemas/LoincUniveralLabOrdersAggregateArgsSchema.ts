import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincUniveralLabOrdersWhereInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereInputSchema'
import { LoincUniveralLabOrdersOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersOrderByWithRelationInputSchema'
import { LoincUniveralLabOrdersWhereUniqueInputSchema } from '../inputTypeSchemas/LoincUniveralLabOrdersWhereUniqueInputSchema'

export const LoincUniveralLabOrdersAggregateArgsSchema: z.ZodType<Prisma.LoincUniveralLabOrdersAggregateArgs> = z.object({
  where: LoincUniveralLabOrdersWhereInputSchema.optional(), 
  orderBy: z.union([ LoincUniveralLabOrdersOrderByWithRelationInputSchema.array(), LoincUniveralLabOrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincUniveralLabOrdersWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincUniveralLabOrdersAggregateArgsSchema;
