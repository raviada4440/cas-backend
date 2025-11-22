import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"

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

export default UserIdentitySelectSchema;
