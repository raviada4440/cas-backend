import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderCreateManyInputSchema } from '../inputTypeSchemas/LabOrderCreateManyInputSchema'

export const LabOrderCreateManyArgsSchema: z.ZodType<Prisma.LabOrderCreateManyArgs> = z.object({
  data: z.union([ LabOrderCreateManyInputSchema, LabOrderCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabOrderCreateManyArgsSchema;
