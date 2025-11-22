import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { IcdIncludeSchema } from '../inputTypeSchemas/IcdIncludeSchema'
import { IcdWhereUniqueInputSchema } from '../inputTypeSchemas/IcdWhereUniqueInputSchema'
import { IcdCreateInputSchema } from '../inputTypeSchemas/IcdCreateInputSchema'
import { IcdUncheckedCreateInputSchema } from '../inputTypeSchemas/IcdUncheckedCreateInputSchema'
import { IcdUpdateInputSchema } from '../inputTypeSchemas/IcdUpdateInputSchema'
import { IcdUncheckedUpdateInputSchema } from '../inputTypeSchemas/IcdUncheckedUpdateInputSchema'
import { LabOrderIcdFindManyArgsSchema } from "../outputTypeSchemas/LabOrderIcdFindManyArgsSchema"
import { IcdCountOutputTypeArgsSchema } from "../outputTypeSchemas/IcdCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const IcdSelectSchema: z.ZodType<Prisma.IcdSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  shortDescription: z.boolean().optional(),
  alias1: z.boolean().optional(),
  alias2: z.boolean().optional(),
  alias3: z.boolean().optional(),
  alias4: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrderIcds: z.union([z.boolean(),z.lazy(() => LabOrderIcdFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => IcdCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const IcdUpsertArgsSchema: z.ZodType<Prisma.IcdUpsertArgs> = z.object({
  select: IcdSelectSchema.optional(),
  include: z.lazy(() => IcdIncludeSchema).optional(),
  where: IcdWhereUniqueInputSchema, 
  create: z.union([ IcdCreateInputSchema, IcdUncheckedCreateInputSchema ]),
  update: z.union([ IcdUpdateInputSchema, IcdUncheckedUpdateInputSchema ]),
}).strict();

export default IcdUpsertArgsSchema;
