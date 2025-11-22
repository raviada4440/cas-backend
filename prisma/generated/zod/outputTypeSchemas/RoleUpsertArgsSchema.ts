import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema'
import { RoleWhereUniqueInputSchema } from '../inputTypeSchemas/RoleWhereUniqueInputSchema'
import { RoleCreateInputSchema } from '../inputTypeSchemas/RoleCreateInputSchema'
import { RoleUncheckedCreateInputSchema } from '../inputTypeSchemas/RoleUncheckedCreateInputSchema'
import { RoleUpdateInputSchema } from '../inputTypeSchemas/RoleUpdateInputSchema'
import { RoleUncheckedUpdateInputSchema } from '../inputTypeSchemas/RoleUncheckedUpdateInputSchema'
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { RoleCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  permissions: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userRoles: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoleUpsertArgsSchema: z.ZodType<Prisma.RoleUpsertArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: z.lazy(() => RoleIncludeSchema).optional(),
  where: RoleWhereUniqueInputSchema, 
  create: z.union([ RoleCreateInputSchema, RoleUncheckedCreateInputSchema ]),
  update: z.union([ RoleUpdateInputSchema, RoleUncheckedUpdateInputSchema ]),
}).strict();

export default RoleUpsertArgsSchema;
