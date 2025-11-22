import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationSumOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationSumOrderByAggregateInputSchema;
