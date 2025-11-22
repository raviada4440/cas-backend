import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderSpecimenCreateManyInputSchema } from '../inputTypeSchemas/LabOrderSpecimenCreateManyInputSchema'

export const LabOrderSpecimenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderSpecimenCreateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderSpecimenCreateManyInputSchema, LabOrderSpecimenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderSpecimenCreateManyAndReturnArgsSchema;
