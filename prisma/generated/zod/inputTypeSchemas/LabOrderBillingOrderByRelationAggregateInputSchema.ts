import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderBillingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderBillingOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderBillingOrderByRelationAggregateInputSchema;
