import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const LoincUniveralLabOrdersOrderByWithRelationInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersOrderByWithRelationInput> = z.strictObject({
  loincNum: z.lazy(() => SortOrderSchema).optional(),
  longCommonName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderObs: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
});

export default LoincUniveralLabOrdersOrderByWithRelationInputSchema;
