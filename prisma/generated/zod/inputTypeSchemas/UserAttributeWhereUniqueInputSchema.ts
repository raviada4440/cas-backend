import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';
import { EnumUserAttributeUserTypeNullableFilterSchema } from './EnumUserAttributeUserTypeNullableFilterSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { AdminNullableScalarRelationFilterSchema } from './AdminNullableScalarRelationFilterSchema';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';
import { ProviderNullableScalarRelationFilterSchema } from './ProviderNullableScalarRelationFilterSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const UserAttributeWhereUniqueInputSchema: z.ZodType<Prisma.UserAttributeWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserAttributeWhereInputSchema), z.lazy(() => UserAttributeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAttributeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAttributeWhereInputSchema), z.lazy(() => UserAttributeWhereInputSchema).array() ]).optional(),
  userType: z.union([ z.lazy(() => EnumUserAttributeUserTypeNullableFilterSchema), z.lazy(() => UserAttributeUserTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  admin: z.union([ z.lazy(() => AdminNullableScalarRelationFilterSchema), z.lazy(() => AdminWhereInputSchema) ]).optional().nullable(),
  provider: z.union([ z.lazy(() => ProviderNullableScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional().nullable(),
}));

export default UserAttributeWhereUniqueInputSchema;
