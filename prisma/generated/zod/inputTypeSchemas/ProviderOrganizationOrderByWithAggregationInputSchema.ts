import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProviderOrganizationCountOrderByAggregateInputSchema } from './ProviderOrganizationCountOrderByAggregateInputSchema';
import { ProviderOrganizationMaxOrderByAggregateInputSchema } from './ProviderOrganizationMaxOrderByAggregateInputSchema';
import { ProviderOrganizationMinOrderByAggregateInputSchema } from './ProviderOrganizationMinOrderByAggregateInputSchema';

export const ProviderOrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProviderOrganizationOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  providerNpi: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentOrgName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgCity: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgState: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgZip: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProviderOrganizationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProviderOrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProviderOrganizationMinOrderByAggregateInputSchema).optional(),
});

export default ProviderOrganizationOrderByWithAggregationInputSchema;
