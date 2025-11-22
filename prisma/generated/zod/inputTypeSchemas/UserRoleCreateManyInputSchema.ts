import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  roleId: z.string(),
  assignedBy: z.string().optional().nullable(),
  assignedAt: z.date().optional(),
  expiresAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default UserRoleCreateManyInputSchema;
