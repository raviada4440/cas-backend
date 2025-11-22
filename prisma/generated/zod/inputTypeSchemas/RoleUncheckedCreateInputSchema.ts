import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreatepermissionsInputSchema } from './RoleCreatepermissionsInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema';

export const RoleUncheckedCreateInputSchema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.union([ z.lazy(() => RoleCreatepermissionsInputSchema), z.string().array() ]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default RoleUncheckedCreateInputSchema;
