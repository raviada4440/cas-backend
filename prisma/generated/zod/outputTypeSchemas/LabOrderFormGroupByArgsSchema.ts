import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormWhereInputSchema } from '../inputTypeSchemas/LabOrderFormWhereInputSchema'
import { LabOrderFormOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderFormOrderByWithAggregationInputSchema'
import { LabOrderFormScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderFormScalarFieldEnumSchema'
import { LabOrderFormScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderFormScalarWhereWithAggregatesInputSchema'

export const LabOrderFormGroupByArgsSchema: z.ZodType<Prisma.LabOrderFormGroupByArgs> = z.object({
  where: LabOrderFormWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderFormOrderByWithAggregationInputSchema.array(), LabOrderFormOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderFormScalarFieldEnumSchema.array(), 
  having: LabOrderFormScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderFormGroupByArgsSchema;
