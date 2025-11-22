import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreatepermissionsInputSchema } from './RoleCreatepermissionsInputSchema';
import { UserRoleCreateNestedManyWithoutRoleInputSchema } from './UserRoleCreateNestedManyWithoutRoleInputSchema';

export const RoleCreateInputSchema: z.ZodType<Prisma.RoleCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.union([ z.lazy(() => RoleCreatepermissionsInputSchema), z.string().array() ]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default RoleCreateInputSchema;
