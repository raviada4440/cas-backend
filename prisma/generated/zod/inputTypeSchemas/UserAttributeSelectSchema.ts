import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { AdminArgsSchema } from "../outputTypeSchemas/AdminArgsSchema"
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"

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

export default UserAttributeSelectSchema;
