import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityIncludeSchema } from '../inputTypeSchemas/UserIdentityIncludeSchema'
import { UserIdentityWhereUniqueInputSchema } from '../inputTypeSchemas/UserIdentityWhereUniqueInputSchema'
import { UserIdentityCreateInputSchema } from '../inputTypeSchemas/UserIdentityCreateInputSchema'
import { UserIdentityUncheckedCreateInputSchema } from '../inputTypeSchemas/UserIdentityUncheckedCreateInputSchema'
import { UserIdentityUpdateInputSchema } from '../inputTypeSchemas/UserIdentityUpdateInputSchema'
import { UserIdentityUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserIdentityUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserIdentitySelectSchema: z.ZodType<Prisma.UserIdentitySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  provider: z.boolean().optional(),
  issuer: z.boolean().optional(),
  subject: z.boolean().optional(),
  fhirUser: z.boolean().optional(),
  orgId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

export const UserIdentityUpsertArgsSchema: z.ZodType<Prisma.UserIdentityUpsertArgs> = z.object({
  select: UserIdentitySelectSchema.optional(),
  include: z.lazy(() => UserIdentityIncludeSchema).optional(),
  where: UserIdentityWhereUniqueInputSchema, 
  create: z.union([ UserIdentityCreateInputSchema, UserIdentityUncheckedCreateInputSchema ]),
  update: z.union([ UserIdentityUpdateInputSchema, UserIdentityUncheckedUpdateInputSchema ]),
}).strict();

export default UserIdentityUpsertArgsSchema;
