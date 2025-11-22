import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationStatusSchema } from './TestCatalogConfigurationStatusSchema';
import { NestedEnumTestCatalogConfigurationStatusFilterSchema } from './NestedEnumTestCatalogConfigurationStatusFilterSchema';

export const EnumTestCatalogConfigurationStatusFilterSchema: z.ZodType<Prisma.EnumTestCatalogConfigurationStatusFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogConfigurationStatusSchema).optional(),
  in: z.lazy(() => TestCatalogConfigurationStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogConfigurationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogConfigurationStatusSchema), z.lazy(() => NestedEnumTestCatalogConfigurationStatusFilterSchema) ]).optional(),
});

export default EnumTestCatalogConfigurationStatusFilterSchema;
