import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutRoleInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  assignedBy: z.string().optional().nullable(),
  assignedAt: z.date().optional(),
  expiresAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default UserRoleUncheckedCreateWithoutRoleInputSchema;
