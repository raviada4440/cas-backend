import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderFavoriteTestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProviderFavoriteTestOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderFavoriteTestOrderByRelationAggregateInputSchema;
