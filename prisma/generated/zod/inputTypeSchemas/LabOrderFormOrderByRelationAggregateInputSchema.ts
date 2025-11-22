import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderFormOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderFormOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderFormOrderByRelationAggregateInputSchema;
