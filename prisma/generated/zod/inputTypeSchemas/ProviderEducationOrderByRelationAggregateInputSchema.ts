import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProviderEducationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProviderEducationOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ProviderEducationOrderByRelationAggregateInputSchema;
