import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  isNot: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogScalarRelationFilterSchema;
