import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationEndpointCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationEndpointCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  orgName: z.lazy(() => SortOrderSchema).optional(),
  ehrVendor: z.lazy(() => SortOrderSchema).optional(),
  fhirVersion: z.lazy(() => SortOrderSchema).optional(),
  endpoint: z.lazy(() => SortOrderSchema).optional(),
  issuer: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  clientSecret: z.lazy(() => SortOrderSchema).optional(),
  authorizationEndpoint: z.lazy(() => SortOrderSchema).optional(),
  tokenEndpoint: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationEndpointCountOrderByAggregateInputSchema;
