import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OrganizationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrganizationAvgOrderByAggregateInput> = z.strictObject({
  level: z.lazy(() => SortOrderSchema).optional(),
});

export default OrganizationAvgOrderByAggregateInputSchema;
