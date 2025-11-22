import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusWhereInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereInputSchema'
import { LabOrderStatusOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderStatusOrderByWithRelationInputSchema'
import { LabOrderStatusWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereUniqueInputSchema'

export const LabOrderStatusAggregateArgsSchema: z.ZodType<Prisma.LabOrderStatusAggregateArgs> = z.object({
  where: LabOrderStatusWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderStatusOrderByWithRelationInputSchema.array(), LabOrderStatusOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderStatusWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderStatusAggregateArgsSchema;
