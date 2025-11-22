import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumOrderFormTemplateStatusFilterSchema } from './NestedEnumOrderFormTemplateStatusFilterSchema';

export const NestedEnumOrderFormTemplateStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumOrderFormTemplateStatusWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => OrderFormTemplateStatusSchema).optional(),
  in: z.lazy(() => OrderFormTemplateStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderFormTemplateStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderFormTemplateStatusSchema), z.lazy(() => NestedEnumOrderFormTemplateStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumOrderFormTemplateStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumOrderFormTemplateStatusFilterSchema).optional(),
});

export default NestedEnumOrderFormTemplateStatusWithAggregatesFilterSchema;
