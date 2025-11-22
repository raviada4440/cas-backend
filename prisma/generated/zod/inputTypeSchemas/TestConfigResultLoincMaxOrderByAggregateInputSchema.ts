import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigResultLoincMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestConfigResultLoincMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  resultCode: z.lazy(() => SortOrderSchema).optional(),
  resultCodeName: z.lazy(() => SortOrderSchema).optional(),
  uom: z.lazy(() => SortOrderSchema).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigResultLoincMaxOrderByAggregateInputSchema;
