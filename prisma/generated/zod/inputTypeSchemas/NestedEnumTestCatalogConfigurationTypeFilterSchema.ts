import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationTypeSchema } from './TestCatalogConfigurationTypeSchema';

export const NestedEnumTestCatalogConfigurationTypeFilterSchema: z.ZodType<Prisma.NestedEnumTestCatalogConfigurationTypeFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogConfigurationTypeSchema).optional(),
  in: z.lazy(() => TestCatalogConfigurationTypeSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogConfigurationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogConfigurationTypeSchema), z.lazy(() => NestedEnumTestCatalogConfigurationTypeFilterSchema) ]).optional(),
});

export default NestedEnumTestCatalogConfigurationTypeFilterSchema;
