import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { EnumUserAttributeUserTypeNullableFilterSchema } from './EnumUserAttributeUserTypeNullableFilterSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { AdminNullableScalarRelationFilterSchema } from './AdminNullableScalarRelationFilterSchema';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';
import { ProviderNullableScalarRelationFilterSchema } from './ProviderNullableScalarRelationFilterSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const UserAttributeWhereInputSchema: z.ZodType<Prisma.UserAttributeWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserAttributeWhereInputSchema), z.lazy(() => UserAttributeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAttributeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAttributeWhereInputSchema), z.lazy(() => UserAttributeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  userType: z.union([ z.lazy(() => EnumUserAttributeUserTypeNullableFilterSchema), z.lazy(() => UserAttributeUserTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema), z.lazy(() => UserWhereInputSchema) ]).optional(),
  admin: z.union([ z.lazy(() => AdminNullableScalarRelationFilterSchema), z.lazy(() => AdminWhereInputSchema) ]).optional().nullable(),
  provider: z.union([ z.lazy(() => ProviderNullableScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional().nullable(),
});

export default UserAttributeWhereInputSchema;
