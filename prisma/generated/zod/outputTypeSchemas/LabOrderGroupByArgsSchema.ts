import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderWhereInputSchema } from '../inputTypeSchemas/LabOrderWhereInputSchema'
import { LabOrderOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderOrderByWithAggregationInputSchema'
import { LabOrderScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderScalarFieldEnumSchema'
import { LabOrderScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderScalarWhereWithAggregatesInputSchema'

export const LabOrderGroupByArgsSchema: z.ZodType<Prisma.LabOrderGroupByArgs> = z.object({
  where: LabOrderWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderOrderByWithAggregationInputSchema.array(), LabOrderOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderScalarFieldEnumSchema.array(), 
  having: LabOrderScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderGroupByArgsSchema;
