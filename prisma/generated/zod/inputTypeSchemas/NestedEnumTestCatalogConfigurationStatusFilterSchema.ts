import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';

export const NestedEnumTestCatalogConfigurationStatusFilterSchema: z.ZodType<Prisma.NestedEnumTestCatalogConfigurationStatusFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogConfigurationStatusSchema).optional(),
  in: z.lazy(() => TestCatalogConfigurationStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogConfigurationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogConfigurationStatusSchema), z.lazy(() => NestedEnumTestCatalogConfigurationStatusFilterSchema) ]).optional(),
});

export default NestedEnumTestCatalogConfigurationStatusFilterSchema;
