import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenCreateManyInputSchema } from '../inputTypeSchemas/LabOrderSpecimenCreateManyInputSchema'

export const LabOrderSpecimenCreateManyArgsSchema: z.ZodType<Prisma.LabOrderSpecimenCreateManyArgs> = z.object({
  data: z.union([ LabOrderSpecimenCreateManyInputSchema, LabOrderSpecimenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderSpecimenCreateManyArgsSchema;
