import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderOrderByWithRelationInputSchema } from './LabOrderOrderByWithRelationInputSchema';
import { TestCatalogOrderByWithRelationInputSchema } from './TestCatalogOrderByWithRelationInputSchema';

export const LabOrderTestOrderByWithRelationInputSchema: z.ZodType<Prisma.LabOrderTestOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  testId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  labOrder: z.lazy(() => LabOrderOrderByWithRelationInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogOrderByWithRelationInputSchema).optional(),
});

export default LabOrderTestOrderByWithRelationInputSchema;
