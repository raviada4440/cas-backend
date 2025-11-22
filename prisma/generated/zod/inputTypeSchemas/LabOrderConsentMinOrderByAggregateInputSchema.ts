import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderConsentMinOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderConsentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  versionConsentId: z.lazy(() => SortOrderSchema).optional(),
  consentTemplateId: z.lazy(() => SortOrderSchema).optional(),
  consentTitle: z.lazy(() => SortOrderSchema).optional(),
  consentContent: z.lazy(() => SortOrderSchema).optional(),
  isAccepted: z.lazy(() => SortOrderSchema).optional(),
  acceptedAt: z.lazy(() => SortOrderSchema).optional(),
  declinedAt: z.lazy(() => SortOrderSchema).optional(),
  patientSignature: z.lazy(() => SortOrderSchema).optional(),
  witnessSignature: z.lazy(() => SortOrderSchema).optional(),
  ipAddress: z.lazy(() => SortOrderSchema).optional(),
  userAgent: z.lazy(() => SortOrderSchema).optional(),
  consentVersion: z.lazy(() => SortOrderSchema).optional(),
  collectedBy: z.lazy(() => SortOrderSchema).optional(),
  collectedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderConsentMinOrderByAggregateInputSchema;
