import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { EnumUserAttributeUserTypeNullableWithAggregatesFilterSchema } from './EnumUserAttributeUserTypeNullableWithAggregatesFilterSchema';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const UserAttributeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserAttributeScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserAttributeScalarWhereWithAggregatesInputSchema), z.lazy(() => UserAttributeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserAttributeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserAttributeScalarWhereWithAggregatesInputSchema), z.lazy(() => UserAttributeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  userType: z.union([ z.lazy(() => EnumUserAttributeUserTypeNullableWithAggregatesFilterSchema), z.lazy(() => UserAttributeUserTypeSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default UserAttributeScalarWhereWithAggregatesInputSchema;
