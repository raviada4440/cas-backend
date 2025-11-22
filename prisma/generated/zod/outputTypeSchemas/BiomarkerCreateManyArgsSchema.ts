import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerCreateManyInputSchema } from '../inputTypeSchemas/BiomarkerCreateManyInputSchema'

export const BiomarkerCreateManyArgsSchema: z.ZodType<Prisma.BiomarkerCreateManyArgs> = z.object({
  data: z.union([ BiomarkerCreateManyInputSchema, BiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BiomarkerCreateManyArgsSchema;
