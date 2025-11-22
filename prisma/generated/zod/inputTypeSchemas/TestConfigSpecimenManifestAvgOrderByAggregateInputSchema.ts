import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigSpecimenManifestAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestAvgOrderByAggregateInput> = z.strictObject({
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigSpecimenManifestAvgOrderByAggregateInputSchema;
