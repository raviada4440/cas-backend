import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIcdCreateManyInputSchema } from '../inputTypeSchemas/LabOrderIcdCreateManyInputSchema'

export const LabOrderIcdCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LabOrderIcdCreateManyAndReturnArgs> = z.object({
  data: z.union([ LabOrderIcdCreateManyInputSchema, LabOrderIcdCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderIcdCreateManyAndReturnArgsSchema;
