import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  isNot: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionScalarRelationFilterSchema;
