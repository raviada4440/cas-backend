import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenWhereInputSchema } from '../inputTypeSchemas/LabOrderSpecimenWhereInputSchema'
import { LabOrderSpecimenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LabOrderSpecimenOrderByWithAggregationInputSchema'
import { LabOrderSpecimenScalarFieldEnumSchema } from '../inputTypeSchemas/LabOrderSpecimenScalarFieldEnumSchema'
import { LabOrderSpecimenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LabOrderSpecimenScalarWhereWithAggregatesInputSchema'

export const LabOrderSpecimenGroupByArgsSchema: z.ZodType<Prisma.LabOrderSpecimenGroupByArgs> = z.object({
  where: LabOrderSpecimenWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderSpecimenOrderByWithAggregationInputSchema.array(), LabOrderSpecimenOrderByWithAggregationInputSchema ]).optional(),
  by: LabOrderSpecimenScalarFieldEnumSchema.array(), 
  having: LabOrderSpecimenScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderSpecimenGroupByArgsSchema;
