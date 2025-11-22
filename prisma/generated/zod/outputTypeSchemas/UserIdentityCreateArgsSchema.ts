import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserIdentityIncludeSchema } from '../inputTypeSchemas/UserIdentityIncludeSchema'
import { UserIdentityCreateInputSchema } from '../inputTypeSchemas/UserIdentityCreateInputSchema'
import { UserIdentityUncheckedCreateInputSchema } from '../inputTypeSchemas/UserIdentityUncheckedCreateInputSchema'
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

export const UserIdentityCreateArgsSchema: z.ZodType<Prisma.UserIdentityCreateArgs> = z.object({
  select: UserIdentitySelectSchema.optional(),
  include: z.lazy(() => UserIdentityIncludeSchema).optional(),
  data: z.union([ UserIdentityCreateInputSchema, UserIdentityUncheckedCreateInputSchema ]),
}).strict();

export default UserIdentityCreateArgsSchema;
