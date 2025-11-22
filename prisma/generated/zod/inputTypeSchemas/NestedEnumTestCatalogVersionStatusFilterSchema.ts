import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionStatusSchema } from './TestCatalogVersionStatusSchema';

export const NestedEnumTestCatalogVersionStatusFilterSchema: z.ZodType<Prisma.NestedEnumTestCatalogVersionStatusFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogVersionStatusSchema).optional(),
  in: z.lazy(() => TestCatalogVersionStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogVersionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogVersionStatusSchema), z.lazy(() => NestedEnumTestCatalogVersionStatusFilterSchema) ]).optional(),
});

export default NestedEnumTestCatalogVersionStatusFilterSchema;
