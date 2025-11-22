import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerWhereInputSchema } from './TestCatalogVersionBiomarkerWhereInputSchema';

export const TestCatalogVersionBiomarkerListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionBiomarkerWhereInputSchema).optional(),
});

export default TestCatalogVersionBiomarkerListRelationFilterSchema;
