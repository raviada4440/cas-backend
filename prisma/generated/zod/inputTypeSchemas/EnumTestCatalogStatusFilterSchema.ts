import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogStatusSchema } from './TestCatalogStatusSchema';
import { NestedEnumTestCatalogStatusFilterSchema } from './NestedEnumTestCatalogStatusFilterSchema';

export const EnumTestCatalogStatusFilterSchema: z.ZodType<Prisma.EnumTestCatalogStatusFilter> = z.strictObject({
  equals: z.lazy(() => TestCatalogStatusSchema).optional(),
  in: z.lazy(() => TestCatalogStatusSchema).array().optional(),
  notIn: z.lazy(() => TestCatalogStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TestCatalogStatusSchema), z.lazy(() => NestedEnumTestCatalogStatusFilterSchema) ]).optional(),
});

export default EnumTestCatalogStatusFilterSchema;
