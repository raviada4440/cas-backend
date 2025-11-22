import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenWhereInputSchema } from '../inputTypeSchemas/LabOrderSpecimenWhereInputSchema'

export const LabOrderSpecimenDeleteManyArgsSchema: z.ZodType<Prisma.LabOrderSpecimenDeleteManyArgs> = z.object({
  where: LabOrderSpecimenWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default LabOrderSpecimenDeleteManyArgsSchema;
