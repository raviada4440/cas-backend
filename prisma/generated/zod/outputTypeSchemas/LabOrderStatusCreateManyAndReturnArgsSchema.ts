import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderStatusCreateManyInputSchema } from '../inputTypeSchemas/LabOrderStatusCreateManyInputSchema'

export const LabOrderStatusCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderStatusCreateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderStatusCreateManyInputSchema, LabOrderStatusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderStatusCreateManyAndReturnArgsSchema;
