import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderStatusOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderStatusOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderStatusOrderByRelationAggregateInputSchema;
