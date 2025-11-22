import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderTestCreateManyInputSchema } from '../inputTypeSchemas/LabOrderTestCreateManyInputSchema'

export const LabOrderTestCreateManyArgsSchema: z.ZodType<Prisma.LabOrderTestCreateManyArgs> = z.object({
  data: z.union([ LabOrderTestCreateManyInputSchema, LabOrderTestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderTestCreateManyArgsSchema;
