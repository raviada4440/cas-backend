import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { RoleScalarRelationFilterSchema } from './RoleScalarRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';

export const UserRoleWhereInputSchema: z.ZodType<Prisma.UserRoleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  assignedBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleScalarRelationFilterSchema), z.lazy(() => RoleWhereInputSchema) ]).optional(),
});

export default UserRoleWhereInputSchema;
