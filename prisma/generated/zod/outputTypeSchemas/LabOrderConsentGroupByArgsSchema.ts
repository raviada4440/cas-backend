import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderConsentWhereInputSchema'
import { LabOrderConsentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderConsentOrderByWithAggregationInputSchema'
import { LabOrderConsentScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderConsentScalarFieldEnumSchema'
import { LabOrderConsentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderConsentScalarWhereWithAggregatesInputSchema'

export const LabOrderConsentGroupByArgsSchema: z.ZodType<Prisma.LabOrderConsentGroupByArgs> = z.object({
  where: LabOrderConsentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderConsentOrderByWithAggregationInputSchema.array(), LabOrderConsentOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderConsentScalarFieldEnumSchema.array(), 
  having: LabOrderConsentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderConsentGroupByArgsSchema;
