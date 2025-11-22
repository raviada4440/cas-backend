import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderConsentCountOrderByAggregateInputSchema } from './LabOrderConsentCountOrderByAggregateInputSchema';
import { LabOrderConsentAvgOrderByAggregateInputSchema } from './LabOrderConsentAvgOrderByAggregateInputSchema';
import { LabOrderConsentMaxOrderByAggregateInputSchema } from './LabOrderConsentMaxOrderByAggregateInputSchema';
import { LabOrderConsentMinOrderByAggregateInputSchema } from './LabOrderConsentMinOrderByAggregateInputSchema';
import { LabOrderConsentSumOrderByAggregateInputSchema } from './LabOrderConsentSumOrderByAggregateInputSchema';

export const LabOrderConsentOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderConsentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  versionConsentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentTemplateId: z.lazy(() => SortOrderSchema).optional(),
  consentTitle: z.lazy(() => SortOrderSchema).optional(),
  consentContent: z.lazy(() => SortOrderSchema).optional(),
  isAccepted: z.lazy(() => SortOrderSchema).optional(),
  acceptedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  declinedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientSignature: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  witnessSignature: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  consentVersion: z.lazy(() => SortOrderSchema).optional(),
  collectedBy: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  collectedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderConsentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LabOrderConsentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderConsentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderConsentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LabOrderConsentSumOrderByAggregateInputSchema).optional(),
});

export default LabOrderConsentOrderByWithAggregationInputSchema;
