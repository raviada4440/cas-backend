import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderConsentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderConsentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderConsentOrderByRelationAggregateInputSchema;
