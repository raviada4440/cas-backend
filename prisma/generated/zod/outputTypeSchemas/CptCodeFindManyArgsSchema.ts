import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CptCodeWhereInputSchema } from '../inputTypeSchemas/CptCodeWhereInputSchema'
import { CptCodeOrderByWithRelationInputSchema } from '../inputTypeSchemas/CptCodeOrderByWithRelationInputSchema'
import { CptCodeWhereUniqueInputSchema } from '../inputTypeSchemas/CptCodeWhereUniqueInputSchema'
import { CptCodeScalarFieldEnumSchema } from '../inputTypeSchemas/CptCodeScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CptCodeSelectSchema: z.ZodType<Prisma.CptCodeSelect> = z.object({
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  longDescription: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export const CptCodeFindManyArgsSchema: z.ZodType<Prisma.CptCodeFindManyArgs> = z.object({
  select: CptCodeSelectSchema.optional(),
  where: CptCodeWhereInputSchema.optional(), 
  orderBy: z.union([ CptCodeOrderByWithRelationInputSchema.array(), CptCodeOrderByWithRelationInputSchema ]).optional(),
  cursor: CptCodeWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CptCodeScalarFieldEnumSchema, CptCodeScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CptCodeFindManyArgsSchema;
