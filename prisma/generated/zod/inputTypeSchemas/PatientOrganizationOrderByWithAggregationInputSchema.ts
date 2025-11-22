import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PatientOrganizationCountOrderByAggregateInputSchema } from './PatientOrganizationCountOrderByAggregateInputSchema';
import { PatientOrganizationMaxOrderByAggregateInputSchema } from './PatientOrganizationMaxOrderByAggregateInputSchema';
import { PatientOrganizationMinOrderByAggregateInputSchema } from './PatientOrganizationMinOrderByAggregateInputSchema';

export const PatientOrganizationOrderByWithAggregationInputSchema: z.ZodType<Prisma.PatientOrganizationOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  patientId: z.lazy(() => SortOrderSchema).optional(),
  organizationId: z.lazy(() => SortOrderSchema).optional(),
  mrn: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  mobile: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PatientOrganizationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PatientOrganizationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PatientOrganizationMinOrderByAggregateInputSchema).optional(),
});

export default PatientOrganizationOrderByWithAggregationInputSchema;
