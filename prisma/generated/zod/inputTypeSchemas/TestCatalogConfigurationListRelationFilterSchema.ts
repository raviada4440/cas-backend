import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';

export const TestCatalogConfigurationListRelationFilterSchema: z.ZodType<Prisma.TestCatalogConfigurationListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogConfigurationWhereInputSchema).optional(),
});

export default TestCatalogConfigurationListRelationFilterSchema;
