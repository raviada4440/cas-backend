import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConsentTemplateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ConsentTemplateAvgOrderByAggregateInput> = z.strictObject({
  version: z.lazy(() => SortOrderSchema).optional(),
});

export default ConsentTemplateAvgOrderByAggregateInputSchema;
