import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionCptCodeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  cptCode: z.lazy(() => SortOrderSchema).optional(),
  modifier: z.lazy(() => SortOrderSchema).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionCptCodeMaxOrderByAggregateInputSchema;
