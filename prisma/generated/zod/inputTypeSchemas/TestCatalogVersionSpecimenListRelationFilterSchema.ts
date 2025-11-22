import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereInputSchema } from './TestCatalogVersionSpecimenWhereInputSchema';

export const TestCatalogVersionSpecimenListRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenListRelationFilter> = z.strictObject({
  every: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
  some: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
  none: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
});

export default TestCatalogVersionSpecimenListRelationFilterSchema;
