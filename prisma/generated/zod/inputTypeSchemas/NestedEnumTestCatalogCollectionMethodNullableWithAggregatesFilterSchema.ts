import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumTestCatalogCollectionMethodNullableFilterSchema } from './NestedEnumTestCatalogCollectionMethodNullableFilterSchema';

export const NestedEnumTestCatalogCollectionMethodNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTestCatalogCollectionMethodNullableWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogCollectionMethodSchema).optional().nullable(),
  in: z.lazy(() => TestCatalogCollectionMethodSchema).array().optional().nullable(),
  notIn: z.lazy(() => TestCatalogCollectionMethodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => TestCatalogCollectionMethodSchema), z.lazy(() => NestedEnumTestCatalogCollectionMethodNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTestCatalogCollectionMethodNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTestCatalogCollectionMethodNullableFilterSchema).optional(),
});

export default NestedEnumTestCatalogCollectionMethodNullableWithAggregatesFilterSchema;
