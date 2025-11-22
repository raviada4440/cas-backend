import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserAttributeScalarRelationFilterSchema } from './UserAttributeScalarRelationFilterSchema';
import { UserAttributeWhereInputSchema } from './UserAttributeWhereInputSchema';

export const AdminWhereInputSchema: z.ZodType<Prisma.AdminWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AdminWhereInputSchema), z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminWhereInputSchema), z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  userAttributeId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  userAttribute: z.union([ z.lazy(() => UserAttributeScalarRelationFilterSchema), z.lazy(() => UserAttributeWhereInputSchema) ]).optional(),
});

export default AdminWhereInputSchema;
