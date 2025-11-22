import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderFavoriteTestSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProviderFavoriteTestSumOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderFavoriteTestSumOrderByAggregateInputSchema;
