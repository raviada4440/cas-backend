import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestWhereInputSchema } from '../inputTypeSchemas/LabOrderTestWhereInputSchema'
import { LabOrderTestOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderTestOrderByWithRelationInputSchema'
import { LabOrderTestWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderTestWhereUniqueInputSchema'

export const LabOrderTestAggregateArgsSchema: z.ZodType<Prisma.LabOrderTestAggregateArgs> = z.object({
  where: LabOrderTestWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderTestOrderByWithRelationInputSchema.array(), LabOrderTestOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderTestWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderTestAggregateArgsSchema;
