import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedOneWithoutUserRolesInputSchema } from './RoleCreateNestedOneWithoutUserRolesInputSchema';

export const UserRoleCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutUserInput> = z.strictObject({
  id: z.string().optional(),
  assignedBy: z.string().optional().nullable(),
  assignedAt: z.date().optional(),
  expiresAt: z.date().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutUserRolesInputSchema),
});

export default UserRoleCreateWithoutUserInputSchema;
