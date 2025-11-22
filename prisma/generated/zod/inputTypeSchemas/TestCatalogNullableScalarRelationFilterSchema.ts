import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogNullableScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TestCatalogWhereInputSchema).optional().nullable(),
});

export default TestCatalogNullableScalarRelationFilterSchema;
