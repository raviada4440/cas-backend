import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogConfigurationScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  isNot: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationScalarRelationFilterSchema;
