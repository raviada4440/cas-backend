import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigResultLoincOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestConfigResultLoincOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigResultLoincOrderByRelationAggregateInputSchema;
