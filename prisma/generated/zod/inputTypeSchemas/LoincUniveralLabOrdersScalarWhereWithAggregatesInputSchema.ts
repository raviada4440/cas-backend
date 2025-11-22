import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema), z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema), z.lazy(() => LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  loincNum: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  longCommonName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  orderObs: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
});

export default LoincUniveralLabOrdersScalarWhereWithAggregatesInputSchema;
