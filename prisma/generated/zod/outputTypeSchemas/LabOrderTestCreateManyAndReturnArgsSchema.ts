import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestCreateManyInputSchema } from '../inputTypeSchemas/LabOrderTestCreateManyInputSchema'

export const LabOrderTestCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderTestCreateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderTestCreateManyInputSchema, LabOrderTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderTestCreateManyAndReturnArgsSchema;
