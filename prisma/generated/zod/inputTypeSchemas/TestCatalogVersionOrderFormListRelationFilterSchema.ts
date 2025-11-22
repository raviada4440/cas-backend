import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormWhereInputSchema } from './TestCatalogVersionOrderFormWhereInputSchema';

export const TestCatalogVersionOrderFormListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionOrderFormWhereInputSchema).optional(),
});

export default TestCatalogVersionOrderFormListRelationFilterSchema;
