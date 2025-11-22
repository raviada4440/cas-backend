import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeUpdateInputSchema } from '../inputTypeSchemas/CptCodeUpdateInputSchema'
import { CptCodeUncheckedUpdateInputSchema } from '../inputTypeSchemas/CptCodeUncheckedUpdateInputSchema'
import { CptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/CptCodeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CptCodeSelectSchema: z.ZodType<Prisma.CptCodeSelect> = z.object({
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  longDescription: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const CptCodeUpdateArgsSchema: z.ZodType<Prisma.CptCodeUpdateArgs> = z.object({
  select: CptCodeSelectSchema.optional(),
  data: z.union([ CptCodeUpdateInputSchema, CptCodeUncheckedUpdateInputSchema ]),
  where: CptCodeWhereUniqueInputSchema, 
}).strict();

export default CptCodeUpdateArgsSchema;
