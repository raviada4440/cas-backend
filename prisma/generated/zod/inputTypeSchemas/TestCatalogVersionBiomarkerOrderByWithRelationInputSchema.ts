import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { BiomarkerOrderByWithRelationInputSchema } from './BiomarkerOrderByWithRelationInputSchema';

export const TestCatalogVersionBiomarkerOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  biomarker: z.lazy(() => BiomarkerOrderByWithRelationInputSchema).optional(),
});

export default TestCatalogVersionBiomarkerOrderByWithRelationInputSchema;
