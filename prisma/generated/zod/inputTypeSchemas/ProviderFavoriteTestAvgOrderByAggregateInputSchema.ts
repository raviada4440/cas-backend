import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderFavoriteTestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProviderFavoriteTestAvgOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderFavoriteTestAvgOrderByAggregateInputSchema;
