import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAttributeArgsSchema } from "../outputTypeSchemas/UserAttributeArgsSchema"

export const AdminIncludeSchema: z.ZodType<Prisma.AdminInclude> = z.object({
  userAttribute: z.union([z.boolean(),z.lazy(() => UserAttributeArgsSchema)]).optional(),
}).strict();

export default AdminIncludeSchema;
