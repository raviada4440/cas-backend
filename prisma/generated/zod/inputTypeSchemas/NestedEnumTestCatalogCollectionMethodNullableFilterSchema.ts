import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';

export const NestedEnumTestCatalogCollectionMethodNullableFilterSchema: z.ZodType<Prisma.NestedEnumTestCatalogCollectionMethodNullableFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogCollectionMethodSchema).optional().nullable(),
  in: z.lazy(() => TestCatalogCollectionMethodSchema).array().optional().nullable(),
  notIn: z.lazy(() => TestCatalogCollectionMethodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => TestCatalogCollectionMethodSchema), z.lazy(() => NestedEnumTestCatalogCollectionMethodNullableFilterSchema) ]).optional().nullable(),
});

export default NestedEnumTestCatalogCollectionMethodNullableFilterSchema;
