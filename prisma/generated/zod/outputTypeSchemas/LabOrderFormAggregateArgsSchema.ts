import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormWhereInputSchema } from '../inputTypeSchemas/LabOrderFormWhereInputSchema'
import { LabOrderFormOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderFormOrderByWithRelationInputSchema'
import { LabOrderFormWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderFormWhereUniqueInputSchema'

export const LabOrderFormAggregateArgsSchema: z.ZodType<Prisma.LabOrderFormAggregateArgs> = z.object({
  where: LabOrderFormWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderFormOrderByWithRelationInputSchema.array(), LabOrderFormOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderFormWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderFormAggregateArgsSchema;
