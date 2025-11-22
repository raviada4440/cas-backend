import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema;
