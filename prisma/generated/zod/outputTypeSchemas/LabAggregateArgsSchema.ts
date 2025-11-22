import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabWhereInputSchema } from '../inputTypeSchemas/LabWhereInputSchema'
import { LabOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderByWithRelationInputSchema'
import { LabWhereUniqueInputSchema } from '../inputTypeSchemas/LabWhereUniqueInputSchema'

export const LabAggregateArgsSchema: z.ZodType<Prisma.LabAggregateArgs> = z.object({
  where: LabWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderByWithRelationInputSchema.array(), LabOrderByWithRelationInputSchema ]).optional(),
  cursor: LabWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabAggregateArgsSchema;
