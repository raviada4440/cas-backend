import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincWhereInputSchema } from '../inputTypeSchemas/LoincWhereInputSchema'
import { LoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincOrderByWithRelationInputSchema'
import { LoincWhereUniqueInputSchema } from '../inputTypeSchemas/LoincWhereUniqueInputSchema'

export const LoincAggregateArgsSchema: z.ZodType<Prisma.LoincAggregateArgs> = z.object({
  where: LoincWhereInputSchema.optional(), 
  orderBy: z.union([ LoincOrderByWithRelationInputSchema.array(), LoincOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LoincAggregateArgsSchema;
