import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereInputSchema } from './TestCatalogVersionConsentWhereInputSchema';

export const TestCatalogVersionConsentNullableScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionConsentNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TestCatalogVersionConsentWhereInputSchema).optional().nullable(),
});

export default TestCatalogVersionConsentNullableScalarRelationFilterSchema;
