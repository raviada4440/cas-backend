import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SponsorMinOrderByAggregateInputSchema: z.ZodType<Prisma.SponsorMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  sponsorName: z.lazy(() => SortOrderSchema).optional(),
  sponsorCode: z.lazy(() => SortOrderSchema).optional(),
  sponsorWebsite: z.lazy(() => SortOrderSchema).optional(),
  sponsorType: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zip: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default SponsorMinOrderByAggregateInputSchema;
