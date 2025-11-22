import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProviderCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  npi: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  credentials: z.lazy(() => SortOrderSchema).optional(),
  specialty: z.lazy(() => SortOrderSchema).optional(),
  aboutme: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  affiliation: z.lazy(() => SortOrderSchema).optional(),
  proceduresAndResearch: z.lazy(() => SortOrderSchema).optional(),
  specialInterests: z.lazy(() => SortOrderSchema).optional(),
  userAttributeId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderCountOrderByAggregateInputSchema;
