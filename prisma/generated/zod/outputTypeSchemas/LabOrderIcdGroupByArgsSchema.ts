import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdWhereInputSchema } from '../inputTypeSchemas/LabOrderIcdWhereInputSchema'
import { LabOrderIcdOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderIcdOrderByWithAggregationInputSchema'
import { LabOrderIcdScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderIcdScalarFieldEnumSchema'
import { LabOrderIcdScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderIcdScalarWhereWithAggregatesInputSchema'

export const LabOrderIcdGroupByArgsSchema: z.ZodType<Prisma.LabOrderIcdGroupByArgs> = z.object({
  where: LabOrderIcdWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderIcdOrderByWithAggregationInputSchema.array(), LabOrderIcdOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderIcdScalarFieldEnumSchema.array(), 
  having: LabOrderIcdScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderIcdGroupByArgsSchema;
