import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  parentId: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  parentOrgName: z.lazy(() => SortOrderSchema).optional(),
  orgName: z.lazy(() => SortOrderSchema).optional(),
  orgType: z.lazy(() => SortOrderSchema).optional(),
  orgSpecialty: z.lazy(() => SortOrderSchema).optional(),
  orgAddress: z.lazy(() => SortOrderSchema).optional(),
  orgCity: z.lazy(() => SortOrderSchema).optional(),
  orgState: z.lazy(() => SortOrderSchema).optional(),
  orgZip: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationMaxOrderByAggregateInputSchema;
