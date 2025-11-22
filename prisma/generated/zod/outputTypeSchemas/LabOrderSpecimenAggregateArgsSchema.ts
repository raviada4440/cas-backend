import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenWhereInputSchema } from '../inputTypeSchemas/LabOrderSpecimenWhereInputSchema'
import { LabOrderSpecimenOrderByWithRelationInputSchema } from '../inputTypeSchemas/LabOrderSpecimenOrderByWithRelationInputSchema'
import { LabOrderSpecimenWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderSpecimenWhereUniqueInputSchema'

export const LabOrderSpecimenAggregateArgsSchema: z.ZodType<Prisma.LabOrderSpecimenAggregateArgs> = z.object({
  where: LabOrderSpecimenWhereInputSchema.optional(), 
  orderBy: z.union([ LabOrderSpecimenOrderByWithRelationInputSchema.array(), LabOrderSpecimenOrderByWithRelationInputSchema ]).optional(),
  cursor: LabOrderSpecimenWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default LabOrderSpecimenAggregateArgsSchema;
