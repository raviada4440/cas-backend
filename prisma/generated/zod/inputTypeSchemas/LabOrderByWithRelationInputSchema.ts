import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SponsoredTestOrderByRelationAggregateInputSchema } from './SponsoredTestOrderByRelationAggregateInputSchema';
import { TestCatalogOrderByRelationAggregateInputSchema } from './TestCatalogOrderByRelationAggregateInputSchema';
import { LabOrderOrderByRelationAggregateInputSchema } from './LabOrderOrderByRelationAggregateInputSchema';

export const LabOrderByWithRelationInputSchema: z.ZodType<Prisma.LabOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  labCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  zip: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestOrderByRelationAggregateInputSchema).optional(),
  testCatalogs: z.lazy(() => TestCatalogOrderByRelationAggregateInputSchema).optional(),
  labOrders: z.lazy(() => LabOrderOrderByRelationAggregateInputSchema).optional(),
});

export default LabOrderByWithRelationInputSchema;
