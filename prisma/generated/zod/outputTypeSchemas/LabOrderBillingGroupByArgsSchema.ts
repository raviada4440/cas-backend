import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderBillingWhereInputSchema } from '../inputTypeSchemas/LabOrderBillingWhereInputSchema'
import { LabOrderBillingOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderBillingOrderByWithAggregationInputSchema'
import { LabOrderBillingScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderBillingScalarFieldEnumSchema'
import { LabOrderBillingScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderBillingScalarWhereWithAggregatesInputSchema'

export const LabOrderBillingGroupByArgsSchema: z.ZodType<Prisma.LabOrderBillingGroupByArgs> = z.object({
  where: LabOrderBillingWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderBillingOrderByWithAggregationInputSchema.array(), LabOrderBillingOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderBillingScalarFieldEnumSchema.array(), 
  having: LabOrderBillingScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderBillingGroupByArgsSchema;
