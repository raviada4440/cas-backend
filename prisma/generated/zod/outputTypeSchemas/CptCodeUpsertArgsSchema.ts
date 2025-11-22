import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/CptCodeWhereUniqueInputSchema'
import { CptCodeCreateInputSchema } from '../inputTypeSchemas/CptCodeCreateInputSchema'
import { CptCodeUncheckedCreateInputSchema } from '../inputTypeSchemas/CptCodeUncheckedCreateInputSchema'
import { CptCodeUpdateInputSchema } from '../inputTypeSchemas/CptCodeUpdateInputSchema'
import { CptCodeUncheckedUpdateInputSchema } from '../inputTypeSchemas/CptCodeUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CptCodeSelectSchema: z.ZodType<Prisma.CptCodeSelect> = z.object({
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  longDescription: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const CptCodeUpsertArgsSchema: z.ZodType<Prisma.CptCodeUpsertArgs> = z.object({
  select: CptCodeSelectSchema.optional(),
  where: CptCodeWhereUniqueInputSchema, 
  create: z.union([ CptCodeCreateInputSchema, CptCodeUncheckedCreateInputSchema ]),
  update: z.union([ CptCodeUpdateInputSchema, CptCodeUncheckedUpdateInputSchema ]),
}).strict();

export default CptCodeUpsertArgsSchema;
