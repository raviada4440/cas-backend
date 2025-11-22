import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationFavoriteTestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationFavoriteTestOrderByRelationAggregateInputSchema;
