import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderSponsoredTestConsentCountOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  sponsoredCasandraTestId: z.lazy(() => SortOrderSchema).optional(),
  providerName: z.lazy(() => SortOrderSchema).optional(),
  providerNpi: z.lazy(() => SortOrderSchema).optional(),
  consentAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderSponsoredTestConsentCountOrderByAggregateInputSchema;
