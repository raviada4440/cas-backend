import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreatepermissionsInputSchema } from './RoleCreatepermissionsInputSchema';

export const RoleUncheckedCreateWithoutUserRolesInputSchema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUserRolesInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  permissions: z.union([ z.lazy(() => RoleCreatepermissionsInputSchema), z.string().array() ]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default RoleUncheckedCreateWithoutUserRolesInputSchema;
