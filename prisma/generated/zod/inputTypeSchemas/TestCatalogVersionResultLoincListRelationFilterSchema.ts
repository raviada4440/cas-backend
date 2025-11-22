import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincWhereInputSchema } from './TestCatalogVersionResultLoincWhereInputSchema';

export const TestCatalogVersionResultLoincListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionResultLoincWhereInputSchema).optional(),
});

export default TestCatalogVersionResultLoincListRelationFilterSchema;
