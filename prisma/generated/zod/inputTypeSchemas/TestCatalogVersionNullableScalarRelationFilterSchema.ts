import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionNullableScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogVersionWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TestCatalogVersionWhereInputSchema).optional().nullable(),
});

export default TestCatalogVersionNullableScalarRelationFilterSchema;
