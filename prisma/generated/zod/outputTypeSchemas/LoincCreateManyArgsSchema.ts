import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincCreateManyInputSchema } from '../inputTypeSchemas/LoincCreateManyInputSchema'

export const LoincCreateManyArgsSchema: z.ZodType<Prisma.LoincCreateManyArgs> = z.object({
  data: z.union([ LoincCreateManyInputSchema, LoincCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default LoincCreateManyArgsSchema;
