import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeCreateManyInputSchema } from '../inputTypeSchemas/CptCodeCreateManyInputSchema'

export const CptCodeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CptCodeCreateManyAndReturnArgs> = z.object({
  data: z.union([ CptCodeCreateManyInputSchema, CptCodeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CptCodeCreateManyAndReturnArgsSchema;
