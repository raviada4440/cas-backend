import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AdminWhereInputSchema } from './AdminWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserAttributeScalarRelationFilterSchema } from './UserAttributeScalarRelationFilterSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const AdminWhereUniqueInputSchema: z.ZodType<Prisma.AdminWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userAttributeId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userAttributeId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  userAttributeId: z.string().optional(),
  AND: z.union([ z.lazy(() => AdminWhereInputSchema), z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminWhereInputSchema), z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  userAttribute: z.union([ z.lazy(() => UserAttributeScalarRelationFilterSchema), z.lazy(() => UserAttributeWhereInputSchema) ]).optional(),
}));

export default AdminWhereUniqueInputSchema;
