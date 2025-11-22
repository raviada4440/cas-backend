import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationNullableScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogConfigurationNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional().nullable(),
});

export default TestCatalogConfigurationNullableScalarRelationFilterSchema;
