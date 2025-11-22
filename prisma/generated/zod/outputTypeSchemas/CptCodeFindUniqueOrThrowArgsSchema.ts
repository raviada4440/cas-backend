import { z } from 'zod';
import type { Prisma } from '@prisma/client';
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

export const CptCodeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CptCodeFindUniqueOrThrowArgs> = z.object({
  select: CptCodeSelectSchema.optional(),
  where: CptCodeWhereUniqueInputSchema, 
}).strict();

export default CptCodeFindUniqueOrThrowArgsSchema;
