import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderCountOrderByAggregateInputSchema } from './LabOrderCountOrderByAggregateInputSchema';
import { LabOrderAvgOrderByAggregateInputSchema } from './LabOrderAvgOrderByAggregateInputSchema';
import { LabOrderMaxOrderByAggregateInputSchema } from './LabOrderMaxOrderByAggregateInputSchema';
import { LabOrderMinOrderByAggregateInputSchema } from './LabOrderMinOrderByAggregateInputSchema';
import { LabOrderSumOrderByAggregateInputSchema } from './LabOrderSumOrderByAggregateInputSchema';

export const LabOrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.LabOrderOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderNumber: z.lazy(() => SortOrderSchema).optional(),
  accessionNumber: z.lazy(() => SortOrderSchema).optional(),
  testVersionId: z.lazy(() => SortOrderSchema).optional(),
  testConfigurationId: z.lazy(() => SortOrderSchema).optional(),
  labId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderingProviderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  treatingProviderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientMRN: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientMobile: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientEmail: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalDetails: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalPresentation: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalTesting: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  riskFlags: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  riskFlagNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalAttachments: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LabOrderCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LabOrderAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LabOrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LabOrderMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LabOrderSumOrderByAggregateInputSchema).optional(),
});

export default LabOrderOrderByWithAggregationInputSchema;
