import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionConsentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionConsentOrderByRelationAggregateInputSchema;
