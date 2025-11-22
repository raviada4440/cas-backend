import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingWhereInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereInputSchema'
import { LabOrderBillingOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderBillingOrderByWithRelationInputSchema'
import { LabOrderBillingWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereUniqueInputSchema'

export const LabOrderBillingAggregateArgsSchema: z.ZodType<Prisma.LabOrderBillingAggregateArgs> = z.object({
  where: LabOrderBillingWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderBillingOrderByWithRelationInputSchema.array(), LabOrderBillingOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderBillingWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderBillingAggregateArgsSchema;
