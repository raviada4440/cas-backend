import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PatientOrganizationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PatientOrganizationOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default PatientOrganizationOrderByRelationAggregateInputSchema;
