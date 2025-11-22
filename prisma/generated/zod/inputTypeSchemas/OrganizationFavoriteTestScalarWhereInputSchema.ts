import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const OrganizationFavoriteTestScalarWhereInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema), z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema), z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default OrganizationFavoriteTestScalarWhereInputSchema;
