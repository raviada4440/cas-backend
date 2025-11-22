import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';

export const TestCatalogVersionConsentListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionConsentListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional(),
});

export default TestCatalogVersionConsentListRelationFilterSchema;
