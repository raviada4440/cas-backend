import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema;
