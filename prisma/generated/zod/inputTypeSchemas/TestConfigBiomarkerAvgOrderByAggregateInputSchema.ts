import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigBiomarkerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestConfigBiomarkerAvgOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigBiomarkerAvgOrderByAggregateInputSchema;
