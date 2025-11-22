import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AdminIncludeSchema } from '../inputTypeSchemas/AdminIncludeSchema'
import { AdminWhereUniqueInputSchema } from '../inputTypeSchemas/AdminWhereUniqueInputSchema'
import { AdminCreateInputSchema } from '../inputTypeSchemas/AdminCreateInputSchema'
import { AdminUncheckedCreateInputSchema } from '../inputTypeSchemas/AdminUncheckedCreateInputSchema'
import { AdminUpdateInputSchema } from '../inputTypeSchemas/AdminUpdateInputSchema'
import { AdminUncheckedUpdateInputSchema } from '../inputTypeSchemas/AdminUncheckedUpdateInputSchema'
import { UserAttributeArgsSchema } from "../outputTypeSchemas/UserAttributeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AdminSelectSchema: z.ZodType<Prisma.AdminSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  userAttributeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userAttribute: z.union([z.boolean(),z.lazy(() => UserAttributeArgsSchema)]).optional(),
}).strict()

export const AdminUpsertArgsSchema: z.ZodType<Prisma.AdminUpsertArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: z.lazy(() => AdminIncludeSchema).optional(),
  where: AdminWhereUniqueInputSchema, 
  create: z.union([ AdminCreateInputSchema, AdminUncheckedCreateInputSchema ]),
  update: z.union([ AdminUpdateInputSchema, AdminUncheckedUpdateInputSchema ]),
}).strict();

export default AdminUpsertArgsSchema;
