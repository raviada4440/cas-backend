import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderSpecimenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LabOrderSpecimenOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderSpecimenOrderByRelationAggregateInputSchema;
