import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestWhereInputSchema } from '../inputTypeSchemas/LabOrderTestWhereInputSchema'
import { LabOrderTestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderTestOrderByWithAggregationInputSchema'
import { LabOrderTestScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderTestScalarFieldEnumSchema'
import { LabOrderTestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderTestScalarWhereWithAggregatesInputSchema'

export const LabOrderTestGroupByArgsSchema: z.ZodType<Prisma.LabOrderTestGroupByArgs> = z.object({
  where: LabOrderTestWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderTestOrderByWithAggregationInputSchema.array(), LabOrderTestOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderTestScalarFieldEnumSchema.array(), 
  having: LabOrderTestScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderTestGroupByArgsSchema;
