import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTestCatalogStatusFilterSchema } from './NestedEnumTestCatalogStatusFilterSchema';

export const NestedEnumTestCatalogStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTestCatalogStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogStatusSchema).optional(),
  in: z.lazy(() => TestCatalogStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogStatusSchema), z.lazy(() => NestedEnumTestCatalogStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTestCatalogStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTestCatalogStatusFilterSchema).optional(),
});

export default NestedEnumTestCatalogStatusWithAggregatesFilterSchema;
