import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';
import { NestedEnumTestCatalogConfigurationStatusWithAggregatesFilterSchema } from './NestedEnumTestCatalogConfigurationStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTestCatalogConfigurationStatusFilterSchema } from './NestedEnumTestCatalogConfigurationStatusFilterSchema';

export const EnumTestCatalogConfigurationStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTestCatalogConfigurationStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogConfigurationStatusSchema).optional(),
  in: z.lazy(() => TestCatalogConfigurationStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogConfigurationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogConfigurationStatusSchema), z.lazy(() => NestedEnumTestCatalogConfigurationStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTestCatalogConfigurationStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTestCatalogConfigurationStatusFilterSchema).optional(),
});

export default EnumTestCatalogConfigurationStatusWithAggregatesFilterSchema;
