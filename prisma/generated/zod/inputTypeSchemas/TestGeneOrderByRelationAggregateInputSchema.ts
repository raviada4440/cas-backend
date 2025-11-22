import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestGeneOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestGeneOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestGeneOrderByRelationAggregateInputSchema;
