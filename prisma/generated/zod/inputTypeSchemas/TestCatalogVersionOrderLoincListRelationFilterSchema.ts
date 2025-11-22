import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincWhereInputSchema } from './TestCatalogVersionOrderLoincWhereInputSchema';

export const TestCatalogVersionOrderLoincListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionOrderLoincWhereInputSchema).optional(),
});

export default TestCatalogVersionOrderLoincListRelationFilterSchema;
