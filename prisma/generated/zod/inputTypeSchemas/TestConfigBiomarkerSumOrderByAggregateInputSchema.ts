import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigBiomarkerSumOrderByAggregateInputSchema: z.ZodType<Prisma.TestConfigBiomarkerSumOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigBiomarkerSumOrderByAggregateInputSchema;
