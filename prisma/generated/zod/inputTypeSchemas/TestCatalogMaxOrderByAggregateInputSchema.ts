import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labId: z.lazy(() => SortOrderSchema).optional(),
  casandraTestId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.lazy(() => SortOrderSchema).optional(),
  testName: z.lazy(() => SortOrderSchema).optional(),
  specialNotes: z.lazy(() => SortOrderSchema).optional(),
  testCategory: z.lazy(() => SortOrderSchema).optional(),
  testSubCategory: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  defaultVersionId: z.lazy(() => SortOrderSchema).optional(),
  currentVersion: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogMaxOrderByAggregateInputSchema;
