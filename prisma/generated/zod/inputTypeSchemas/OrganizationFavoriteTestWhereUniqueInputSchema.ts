import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereInputSchema } from './OrganizationFavoriteTestWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { OrganizationNullableScalarRelationFilterSchema } from './OrganizationNullableScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { TestCatalogNullableScalarRelationFilterSchema } from './TestCatalogNullableScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const OrganizationFavoriteTestWhereUniqueInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => OrganizationFavoriteTestWhereInputSchema), z.lazy(() => OrganizationFavoriteTestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationFavoriteTestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationFavoriteTestWhereInputSchema), z.lazy(() => OrganizationFavoriteTestWhereInputSchema).array() ]).optional(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
  testCatalog: z.union([ z.lazy(() => TestCatalogNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional().nullable(),
}));

export default OrganizationFavoriteTestWhereUniqueInputSchema;
