import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OrganizationEndpointCountOrderByAggregateInputSchema } from './OrganizationEndpointCountOrderByAggregateInputSchema';
import { OrganizationEndpointMaxOrderByAggregateInputSchema } from './OrganizationEndpointMaxOrderByAggregateInputSchema';
import { OrganizationEndpointMinOrderByAggregateInputSchema } from './OrganizationEndpointMinOrderByAggregateInputSchema';

export const OrganizationEndpointOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrganizationEndpointOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ehrVendor: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  fhirVersion: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  endpoint: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  issuer: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clientId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clientSecret: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  authorizationEndpoint: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  tokenEndpoint: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrganizationEndpointCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrganizationEndpointMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrganizationEndpointMinOrderByAggregateInputSchema).optional(),
});

export default OrganizationEndpointOrderByWithAggregationInputSchema;
