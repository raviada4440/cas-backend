import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderBillingMinOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderBillingMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  billToId: z.lazy(() => SortOrderSchema).optional(),
  healthPlanId: z.lazy(() => SortOrderSchema).optional(),
  patientStatus: z.lazy(() => SortOrderSchema).optional(),
  sponsoredTestCouponCode: z.lazy(() => SortOrderSchema).optional(),
  billingType: z.lazy(() => SortOrderSchema).optional(),
  insuranceProvider: z.lazy(() => SortOrderSchema).optional(),
  policyNumber: z.lazy(() => SortOrderSchema).optional(),
  planName: z.lazy(() => SortOrderSchema).optional(),
  groupNumber: z.lazy(() => SortOrderSchema).optional(),
  benefitsId: z.lazy(() => SortOrderSchema).optional(),
  insuredName: z.lazy(() => SortOrderSchema).optional(),
  relationToPatient: z.lazy(() => SortOrderSchema).optional(),
  insuredDob: z.lazy(() => SortOrderSchema).optional(),
  insuredPhone: z.lazy(() => SortOrderSchema).optional(),
  insurerState: z.lazy(() => SortOrderSchema).optional(),
  referralAuthNumber: z.lazy(() => SortOrderSchema).optional(),
  copayAmount: z.lazy(() => SortOrderSchema).optional(),
  deductibleAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderBillingMinOrderByAggregateInputSchema;
