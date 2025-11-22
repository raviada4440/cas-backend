import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ConsentTemplateSumOrderByAggregateInputSchema: z.ZodType<Prisma.ConsentTemplateSumOrderByAggregateInput> = z.strictObject({
  version: z.lazy(() => SortOrderSchema).optional(),
});

export default ConsentTemplateSumOrderByAggregateInputSchema;
