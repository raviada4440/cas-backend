import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';

export const TestCatalogVersionCptCodeOrderByWithRelationInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  cptCode: z.lazy(() => SortOrderSchema).optional(),
  modifier: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
});

export default TestCatalogVersionCptCodeOrderByWithRelationInputSchema;
