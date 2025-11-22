import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderSponsoredTestConsentCountOrderByAggregateInputSchema } from './LabOrderSponsoredTestConsentCountOrderByAggregateInputSchema';
import { LabOrderSponsoredTestConsentMaxOrderByAggregateInputSchema } from './LabOrderSponsoredTestConsentMaxOrderByAggregateInputSchema';
import { LabOrderSponsoredTestConsentMinOrderByAggregateInputSchema } from './LabOrderSponsoredTestConsentMinOrderByAggregateInputSchema';

export const LabOrderSponsoredTestConsentOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsoredCasandraTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  providerName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  providerNpi: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderSponsoredTestConsentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderSponsoredTestConsentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderSponsoredTestConsentMinOrderByAggregateInputSchema).optional(),
});

export default LabOrderSponsoredTestConsentOrderByWithAggregationInputSchema;
