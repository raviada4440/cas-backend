import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionBiomarkerCountOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionBiomarkerCountOrderByAggregateInputSchema;
