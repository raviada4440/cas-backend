import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabWhereInputSchema } from '../inputTypeSchemas/LabWhereInputSchema'
import { LabOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderByWithAggregationInputSchema'
import { LabScalarFieldEnumSchema } from '../inputTypeSchemas/LabScalarFieldEnumSchema'
import { LabScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabScalarWhereWithAggregatesInputSchema'

export const LabGroupByArgsSchema: z.ZodType<Prisma.LabGroupByArgs> = z.object({
  where: LabWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderByWithAggregationInputSchema.array(), LabOrderByWithAggregationInputSchema ]).optional(),
  by: LabScalarFieldEnumSchema.array(), 
  having: LabScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabGroupByArgsSchema;
