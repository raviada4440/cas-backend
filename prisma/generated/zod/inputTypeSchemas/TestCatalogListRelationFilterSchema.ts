import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogListRelationFilterSchema: z.ZodType<Prisma.TestCatalogListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogListRelationFilterSchema;
