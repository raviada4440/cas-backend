import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { LoincOrderByWithRelationInputSchema } from './LoincOrderByWithRelationInputSchema';

export const TestCatalogVersionResultLoincOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  resultCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resultCodeName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  uom: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  loinc: z.lazy(() => LoincOrderByWithRelationInputSchema).optional(),
});

export default TestCatalogVersionResultLoincOrderByWithRelationInputSchema;
