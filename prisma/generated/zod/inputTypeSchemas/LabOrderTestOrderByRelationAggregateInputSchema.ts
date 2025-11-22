import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderTestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderTestOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderTestOrderByRelationAggregateInputSchema;
