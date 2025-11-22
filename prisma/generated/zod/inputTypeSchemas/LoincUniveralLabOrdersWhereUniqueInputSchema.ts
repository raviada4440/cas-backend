import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LoincUniveralLabOrdersWhereInputSchema } from './LoincUniveralLabOrdersWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const LoincUniveralLabOrdersWhereUniqueInputSchema: z.ZodType<Prisma.LoincUniveralLabOrdersWhereUniqueInput> = z.object({
  loincNum: z.string(),
})
.and(z.strictObject({
  loincNum: z.string().optional(),
  AND: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema), z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincUniveralLabOrdersWhereInputSchema), z.lazy(() => LoincUniveralLabOrdersWhereInputSchema).array() ]).optional(),
  longCommonName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orderObs: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
}));

export default LoincUniveralLabOrdersWhereUniqueInputSchema;
