import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogOrderByWithRelationInputSchema } from './TestCatalogOrderByWithRelationInputSchema';

export const TestGeneOrderByWithRelationInputSchema: z.ZodType<Prisma.TestGeneOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  gene: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogOrderByWithRelationInputSchema).optional(),
});

export default TestGeneOrderByWithRelationInputSchema;
