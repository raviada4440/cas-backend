import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { LoincOrderByWithRelationInputSchema } from './LoincOrderByWithRelationInputSchema';

export const TestCatalogVersionOrderLoincOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  loinc: z.lazy(() => LoincOrderByWithRelationInputSchema).optional(),
});

export default TestCatalogVersionOrderLoincOrderByWithRelationInputSchema;
