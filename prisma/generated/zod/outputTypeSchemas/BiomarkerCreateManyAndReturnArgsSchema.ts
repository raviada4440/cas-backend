import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BiomarkerCreateManyInputSchema } from '../inputTypeSchemas/BiomarkerCreateManyInputSchema'

export const BiomarkerCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BiomarkerCreateManyAndReturnArgs> = z.object({
  data: z.union([ BiomarkerCreateManyInputSchema, BiomarkerCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BiomarkerCreateManyAndReturnArgsSchema;
