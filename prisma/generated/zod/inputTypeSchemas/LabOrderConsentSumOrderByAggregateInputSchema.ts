import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderConsentSumOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderConsentSumOrderByAggregateInput> = z.strictObject({
  consentVersion: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderConsentSumOrderByAggregateInputSchema;
