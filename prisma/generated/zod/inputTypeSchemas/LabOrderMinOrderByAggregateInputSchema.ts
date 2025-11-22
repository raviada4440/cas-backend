import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderNumber: z.lazy(() => SortOrderSchema).optional(),
  accessionNumber: z.lazy(() => SortOrderSchema).optional(),
  testVersionId: z.lazy(() => SortOrderSchema).optional(),
  testConfigurationId: z.lazy(() => SortOrderSchema).optional(),
  labId: z.lazy(() => SortOrderSchema).optional(),
  orderingProviderId: z.lazy(() => SortOrderSchema).optional(),
  treatingProviderId: z.lazy(() => SortOrderSchema).optional(),
  patientId: z.lazy(() => SortOrderSchema).optional(),
  patientMRN: z.lazy(() => SortOrderSchema).optional(),
  patientMobile: z.lazy(() => SortOrderSchema).optional(),
  patientEmail: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  clinicalNotes: z.lazy(() => SortOrderSchema).optional(),
  clinicalDetails: z.lazy(() => SortOrderSchema).optional(),
  clinicalPresentation: z.lazy(() => SortOrderSchema).optional(),
  clinicalTesting: z.lazy(() => SortOrderSchema).optional(),
  riskFlagNotes: z.lazy(() => SortOrderSchema).optional(),
  orderDate: z.lazy(() => SortOrderSchema).optional(),
  orderNotes: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderMinOrderByAggregateInputSchema;
