import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProviderEducationCountOrderByAggregateInputSchema } from './ProviderEducationCountOrderByAggregateInputSchema';
import { ProviderEducationMaxOrderByAggregateInputSchema } from './ProviderEducationMaxOrderByAggregateInputSchema';
import { ProviderEducationMinOrderByAggregateInputSchema } from './ProviderEducationMinOrderByAggregateInputSchema';

export const ProviderEducationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProviderEducationOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  providerId: z.lazy(() => SortOrderSchema).optional(),
  providerNpi: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  educationType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  schoolName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  areaOfEducation: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProviderEducationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProviderEducationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProviderEducationMinOrderByAggregateInputSchema).optional(),
});

export default ProviderEducationOrderByWithAggregationInputSchema;
