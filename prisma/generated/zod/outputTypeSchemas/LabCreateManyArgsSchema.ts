import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabCreateManyInputSchema } from '../inputTypeSchemas/LabCreateManyInputSchema'

export const LabCreateManyArgsSchema: z.ZodType<Prisma.LabCreateManyArgs> = z.object({
  data: z.union([ LabCreateManyInputSchema, LabCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LabCreateManyArgsSchema;
