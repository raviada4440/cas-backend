import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AdminIncludeSchema } from '../inputTypeSchemas/AdminIncludeSchema'
import { AdminCreateInputSchema } from '../inputTypeSchemas/AdminCreateInputSchema'
import { AdminUncheckedCreateInputSchema } from '../inputTypeSchemas/AdminUncheckedCreateInputSchema'
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

export const AdminCreateArgsSchema: z.ZodType<Prisma.AdminCreateArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: z.lazy(() => AdminIncludeSchema).optional(),
  data: z.union([ AdminCreateInputSchema, AdminUncheckedCreateInputSchema ]),
}).strict();

export default AdminCreateArgsSchema;
