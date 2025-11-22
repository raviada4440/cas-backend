import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestGeneCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestGeneCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.lazy(() => SortOrderSchema).optional(),
  gene: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestGeneCountOrderByAggregateInputSchema;
