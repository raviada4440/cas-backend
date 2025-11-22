import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionBiomarkerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionBiomarkerMaxOrderByAggregateInputSchema;
