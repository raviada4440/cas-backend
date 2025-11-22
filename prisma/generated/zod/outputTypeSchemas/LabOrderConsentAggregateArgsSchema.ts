import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderConsentWhereInputSchema } from '../inputTypeSchemas/LabOrderConsentWhereInputSchema'
import { LabOrderConsentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderConsentOrderByWithRelationInputSchema'
import { LabOrderConsentWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderConsentWhereUniqueInputSchema'

export const LabOrderConsentAggregateArgsSchema: z.ZodType<Prisma.LabOrderConsentAggregateArgs> = z.object({
  where: LabOrderConsentWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderConsentOrderByWithRelationInputSchema.array(), LabOrderConsentOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderConsentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderConsentAggregateArgsSchema;
