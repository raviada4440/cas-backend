import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';
import { NestedEnumTestCatalogVersionStatusWithAggregatesFilterSchema } from './NestedEnumTestCatalogVersionStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTestCatalogVersionStatusFilterSchema } from './NestedEnumTestCatalogVersionStatusFilterSchema';

export const EnumTestCatalogVersionStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTestCatalogVersionStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogVersionStatusSchema).optional(),
  in: z.lazy(() => TestCatalogVersionStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogVersionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogVersionStatusSchema), z.lazy(() => NestedEnumTestCatalogVersionStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTestCatalogVersionStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTestCatalogVersionStatusFilterSchema).optional(),
});

export default EnumTestCatalogVersionStatusWithAggregatesFilterSchema;
