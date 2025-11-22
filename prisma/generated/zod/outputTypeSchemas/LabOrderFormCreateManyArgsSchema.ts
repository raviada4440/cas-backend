import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFormCreateManyInputSchema } from '../inputTypeSchemas/LabOrderFormCreateManyInputSchema'

export const LabOrderFormCreateManyArgsSchema: z.ZodType<Prisma.LabOrderFormCreateManyArgs> = z.object({
  data: z.union([ LabOrderFormCreateManyInputSchema, LabOrderFormCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderFormCreateManyArgsSchema;
