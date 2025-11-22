import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeArgsSchema } from "../outputTypeSchemas/UserAttributeArgsSchema"

export const AdminSelectSchema: z.ZodType<Prisma.AdminSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  userAttributeId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userAttribute: z.union([z.boolean(),z.lazy(() => UserAttributeArgsSchema)]).optional(),
}).strict()

export default AdminSelectSchema;
