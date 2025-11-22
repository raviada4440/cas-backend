import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';

export const NestedEnumOrderFormTemplateStatusFilterSchema: z.ZodType<Prisma.NestedEnumOrderFormTemplateStatusFilter> = z.strictObject({
  equals: z.lazy(() => OrderFormTemplateStatusSchema).optional(),
  in: z.lazy(() => OrderFormTemplateStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderFormTemplateStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderFormTemplateStatusSchema), z.lazy(() => NestedEnumOrderFormTemplateStatusFilterSchema) ]).optional(),
});

export default NestedEnumOrderFormTemplateStatusFilterSchema;
