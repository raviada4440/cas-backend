import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderEducationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProviderEducationMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerNpi: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  educationType: z.lazy(() => SortOrderSchema).optional(),
  schoolName: z.lazy(() => SortOrderSchema).optional(),
  areaOfEducation: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderEducationMaxOrderByAggregateInputSchema;
