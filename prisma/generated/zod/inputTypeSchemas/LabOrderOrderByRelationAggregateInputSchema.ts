import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderOrderByRelationAggregateInputSchema;
