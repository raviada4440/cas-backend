import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdWhereInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereInputSchema'
import { LabOrderIcdOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderIcdOrderByWithRelationInputSchema'
import { LabOrderIcdWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereUniqueInputSchema'

export const LabOrderIcdAggregateArgsSchema: z.ZodType<Prisma.LabOrderIcdAggregateArgs> = z.object({
  where: LabOrderIcdWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderIcdOrderByWithRelationInputSchema.array(), LabOrderIcdOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderIcdWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderIcdAggregateArgsSchema;
