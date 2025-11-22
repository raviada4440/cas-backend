import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { NestedEnumOrderFormTemplateStatusFilterSchema } from './NestedEnumOrderFormTemplateStatusFilterSchema';

export const EnumOrderFormTemplateStatusFilterSchema: z.ZodType<Prisma.EnumOrderFormTemplateStatusFilter> = z.strictObject({
  equals: z.lazy(() => OrderFormTemplateStatusSchema).optional(),
  in: z.lazy(() => OrderFormTemplateStatusSchema).array().optional(),
  notIn: z.lazy(() => OrderFormTemplateStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => OrderFormTemplateStatusSchema), z.lazy(() => NestedEnumOrderFormTemplateStatusFilterSchema) ]).optional(),
});

export default EnumOrderFormTemplateStatusFilterSchema;
