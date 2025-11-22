import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeWhereInputSchema } from './TestCatalogVersionCptCodeWhereInputSchema';

export const TestCatalogVersionCptCodeListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionCptCodeWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionCptCodeWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionCptCodeWhereInputSchema).optional(),
});

export default TestCatalogVersionCptCodeListRelationFilterSchema;
