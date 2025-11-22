import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';
import { NestedEnumTestCatalogConfigurationTypeWithAggregatesFilterSchema } from './NestedEnumTestCatalogConfigurationTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTestCatalogConfigurationTypeFilterSchema } from './NestedEnumTestCatalogConfigurationTypeFilterSchema';

export const EnumTestCatalogConfigurationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTestCatalogConfigurationTypeWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogConfigurationTypeSchema).optional(),
  in: z.lazy(() => TestCatalogConfigurationTypeSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogConfigurationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogConfigurationTypeSchema), z.lazy(() => NestedEnumTestCatalogConfigurationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTestCatalogConfigurationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTestCatalogConfigurationTypeFilterSchema).optional(),
});

export default EnumTestCatalogConfigurationTypeWithAggregatesFilterSchema;
