import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusWhereInputSchema } from '../inputTypeSchemas/LabOrderStatusWhereInputSchema'
import { LabOrderStatusOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderStatusOrderByWithAggregationInputSchema'
import { LabOrderStatusScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderStatusScalarFieldEnumSchema'
import { LabOrderStatusScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderStatusScalarWhereWithAggregatesInputSchema'

export const LabOrderStatusGroupByArgsSchema: z.ZodType<Prisma.LabOrderStatusGroupByArgs> = z.object({
  where: LabOrderStatusWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderStatusOrderByWithAggregationInputSchema.array(), LabOrderStatusOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderStatusScalarFieldEnumSchema.array(), 
  having: LabOrderStatusScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderStatusGroupByArgsSchema;
