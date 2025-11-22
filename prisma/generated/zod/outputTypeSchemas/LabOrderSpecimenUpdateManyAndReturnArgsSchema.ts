import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenUpdateManyMutationInputSchema } from '../inputTypeSchemas/LabOrderSpecimenUpdateManyMutationInputSchema'
import { LabOrderSpecimenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LabOrderSpecimenUncheckedUpdateManyInputSchema'
import { LabOrderSpecimenWhereInputSchema } from '../inputTypeSchemas/LabOrderSpecimenWhereInputSchema'

export const LabOrderSpecimenUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderSpecimenUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderSpecimenUpdateManyMutationInputSchema, LabOrderSpecimenUncheckedUpdateManyInputSchema ]),
  where: LabOrderSpecimenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderSpecimenUpdateManyAndReturnArgsSchema;
