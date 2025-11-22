import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeWhereInputSchema } from '../inputTypeSchemas/CptCodeWhereInputSchema'
import { CptCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/CptCodeOrderByWithRelationInputSchema'
import { CptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/CptCodeWhereUniqueInputSchema'

export const CptCodeAggregateArgsSchema: z.ZodType<Prisma.CptCodeAggregateArgs> = z.object({
  where: CptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ CptCodeOrderByWithRelationInputSchema.array(), CptCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: CptCodeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CptCodeAggregateArgsSchema;
