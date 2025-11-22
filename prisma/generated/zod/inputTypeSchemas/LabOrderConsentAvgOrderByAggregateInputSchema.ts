import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderConsentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderConsentAvgOrderByAggregateInput> = z.strictObject({
  consentVersion: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderConsentAvgOrderByAggregateInputSchema;
