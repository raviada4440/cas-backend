import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusCreateManyInputSchema } from '../inputTypeSchemas/LabOrderStatusCreateManyInputSchema'

export const LabOrderStatusCreateManyArgsSchema: z.ZodType<Prisma.LabOrderStatusCreateManyArgs> = z.object({
  data: z.union([ LabOrderStatusCreateManyInputSchema, LabOrderStatusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderStatusCreateManyArgsSchema;
