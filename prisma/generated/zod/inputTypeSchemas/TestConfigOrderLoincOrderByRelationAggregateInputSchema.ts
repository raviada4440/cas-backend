import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigOrderLoincOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestConfigOrderLoincOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigOrderLoincOrderByRelationAggregateInputSchema;
