import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderWhereInputSchema } from '../inputTypeSchemas/LabOrderWhereInputSchema'
import { LabOrderOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderOrderByWithRelationInputSchema'
import { LabOrderWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderWhereUniqueInputSchema'

export const LabOrderAggregateArgsSchema: z.ZodType<Prisma.LabOrderAggregateArgs> = z.object({
  where: LabOrderWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderOrderByWithRelationInputSchema.array(), LabOrderOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderAggregateArgsSchema;
