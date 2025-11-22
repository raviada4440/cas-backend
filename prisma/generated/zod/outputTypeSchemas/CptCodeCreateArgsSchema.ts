import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeCreateInputSchema } from '../inputTypeSchemas/CptCodeCreateInputSchema'
import { CptCodeUncheckedCreateInputSchema } from '../inputTypeSchemas/CptCodeUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CptCodeSelectSchema: z.ZodType<Prisma.CptCodeSelect> = z.object({
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  longDescription: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const CptCodeCreateArgsSchema: z.ZodType<Prisma.CptCodeCreateArgs> = z.object({
  select: CptCodeSelectSchema.optional(),
  data: z.union([ CptCodeCreateInputSchema, CptCodeUncheckedCreateInputSchema ]),
}).strict();

export default CptCodeCreateArgsSchema;
