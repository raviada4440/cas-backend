import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigSpecimenManifestOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigSpecimenManifestOrderByRelationAggregateInputSchema;
