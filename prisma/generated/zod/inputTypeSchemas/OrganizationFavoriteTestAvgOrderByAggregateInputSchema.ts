import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationFavoriteTestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestAvgOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationFavoriteTestAvgOrderByAggregateInputSchema;
