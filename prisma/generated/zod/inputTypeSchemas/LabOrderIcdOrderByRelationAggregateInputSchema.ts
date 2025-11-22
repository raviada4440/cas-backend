import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderIcdOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderIcdOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderIcdOrderByRelationAggregateInputSchema;
