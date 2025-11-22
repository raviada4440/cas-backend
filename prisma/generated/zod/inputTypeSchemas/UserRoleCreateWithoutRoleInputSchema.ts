import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutUserRolesInputSchema } from './UserCreateNestedOneWithoutUserRolesInputSchema';

export const UserRoleCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutRoleInput> = z.strictObject({
  id: z.string().optional(),
  assignedBy: z.string().optional().nullable(),
  assignedAt: z.date().optional(),
  expiresAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserRolesInputSchema),
});

export default UserRoleCreateWithoutRoleInputSchema;
