import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';
import { NestedEnumTestCatalogConfigurationTypeFilterSchema } from './NestedEnumTestCatalogConfigurationTypeFilterSchema';

export const EnumTestCatalogConfigurationTypeFilterSchema: z.ZodType<Prisma.EnumTestCatalogConfigurationTypeFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogConfigurationTypeSchema).optional(),
  in: z.lazy(() => TestCatalogConfigurationTypeSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogConfigurationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogConfigurationTypeSchema), z.lazy(() => NestedEnumTestCatalogConfigurationTypeFilterSchema) ]).optional(),
});

export default EnumTestCatalogConfigurationTypeFilterSchema;
