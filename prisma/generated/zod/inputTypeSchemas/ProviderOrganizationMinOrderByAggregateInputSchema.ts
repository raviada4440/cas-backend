import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderOrganizationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProviderOrganizationMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  providerNpi: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  parentOrgName: z.lazy(() => SortOrderSchema).optional(),
  orgName: z.lazy(() => SortOrderSchema).optional(),
  orgAddress: z.lazy(() => SortOrderSchema).optional(),
  orgCity: z.lazy(() => SortOrderSchema).optional(),
  orgState: z.lazy(() => SortOrderSchema).optional(),
  orgZip: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderOrganizationMinOrderByAggregateInputSchema;
