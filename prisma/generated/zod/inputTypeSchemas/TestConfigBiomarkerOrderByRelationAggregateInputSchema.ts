import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigBiomarkerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestConfigBiomarkerOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigBiomarkerOrderByRelationAggregateInputSchema;
