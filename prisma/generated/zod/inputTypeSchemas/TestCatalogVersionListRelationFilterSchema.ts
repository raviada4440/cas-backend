import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';

export const TestCatalogVersionListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionWhereInputSchema).optional(),
});

export default TestCatalogVersionListRelationFilterSchema;
