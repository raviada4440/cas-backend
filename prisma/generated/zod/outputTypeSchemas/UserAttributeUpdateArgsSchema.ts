import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeIncludeSchema } from '../inputTypeSchemas/UserAttributeIncludeSchema'
import { UserAttributeUpdateInputSchema } from '../inputTypeSchemas/UserAttributeUpdateInputSchema'
import { UserAttributeUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserAttributeUncheckedUpdateInputSchema'
import { UserAttributeWhereUniqueInputSchema } from '../inputTypeSchemas/UserAttributeWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AdminArgsSchema } from "../outputTypeSchemas/AdminArgsSchema"
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserAttributeSelectSchema: z.ZodType<Prisma.UserAttributeSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  userType: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  admin: z.union([z.boolean(),z.lazy(() => AdminArgsSchema)]).optional(),
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
}).strict()

export const UserAttributeUpdateArgsSchema: z.ZodType<Prisma.UserAttributeUpdateArgs> = z.object({
  select: UserAttributeSelectSchema.optional(),
  include: z.lazy(() => UserAttributeIncludeSchema).optional(),
  data: z.union([ UserAttributeUpdateInputSchema, UserAttributeUncheckedUpdateInputSchema ]),
  where: UserAttributeWhereUniqueInputSchema, 
}).strict();

export default UserAttributeUpdateArgsSchema;
