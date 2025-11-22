import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereInputSchema } from './ProviderFavoriteTestWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProviderNullableScalarRelationFilterSchema } from './ProviderNullableScalarRelationFilterSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { TestCatalogNullableScalarRelationFilterSchema } from './TestCatalogNullableScalarRelationFilterSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const ProviderFavoriteTestWhereUniqueInputSchema: z.ZodType<Prisma.ProviderFavoriteTestWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ProviderFavoriteTestWhereInputSchema), z.lazy(() => ProviderFavoriteTestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProviderFavoriteTestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProviderFavoriteTestWhereInputSchema), z.lazy(() => ProviderFavoriteTestWhereInputSchema).array() ]).optional(),
  providerId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  parentName: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  testId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  provider: z.union([ z.lazy(() => ProviderNullableScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional().nullable(),
  testCatalog: z.union([ z.lazy(() => TestCatalogNullableScalarRelationFilterSchema), z.lazy(() => TestCatalogWhereInputSchema) ]).optional().nullable(),
}));

export default ProviderFavoriteTestWhereUniqueInputSchema;
