import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const LoincUniveralLabOrdersWhereInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema), z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema), z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  loincNum: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  longCommonName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orderObs: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
});

export default LoincUniveralLabOrdersWhereInputSchema;
