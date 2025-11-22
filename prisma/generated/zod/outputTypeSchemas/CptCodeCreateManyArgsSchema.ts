import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeCreateManyInputSchema } from '../inputTypeSchemas/CptCodeCreateManyInputSchema'

export const CptCodeCreateManyArgsSchema: z.ZodType<Prisma.CptCodeCreateManyArgs> = z.object({
  data: z.union([ CptCodeCreateManyInputSchema, CptCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CptCodeCreateManyArgsSchema;
