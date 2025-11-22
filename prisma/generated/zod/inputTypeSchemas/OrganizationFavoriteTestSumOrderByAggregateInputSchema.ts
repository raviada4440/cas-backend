import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationFavoriteTestSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestSumOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationFavoriteTestSumOrderByAggregateInputSchema;
