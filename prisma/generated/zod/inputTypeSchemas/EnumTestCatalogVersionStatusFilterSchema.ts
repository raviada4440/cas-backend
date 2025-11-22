import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';
import { NestedEnumTestCatalogVersionStatusFilterSchema } from './NestedEnumTestCatalogVersionStatusFilterSchema';

export const EnumTestCatalogVersionStatusFilterSchema: z.ZodType<Prisma.EnumTestCatalogVersionStatusFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogVersionStatusSchema).optional(),
  in: z.lazy(() => TestCatalogVersionStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogVersionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogVersionStatusSchema), z.lazy(() => NestedEnumTestCatalogVersionStatusFilterSchema) ]).optional(),
});

export default EnumTestCatalogVersionStatusFilterSchema;
