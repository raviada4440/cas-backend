import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenWhereInputSchema } from './TestCatalogVersionSpecimenWhereInputSchema';

export const TestCatalogVersionSpecimenScalarRelationFilterSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
  isNot: z.lazy(() => TestCatalogVersionSpecimenWhereInputSchema).optional(),
});

export default TestCatalogVersionSpecimenScalarRelationFilterSchema;
