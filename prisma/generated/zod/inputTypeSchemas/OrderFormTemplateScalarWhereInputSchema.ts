import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumOrderFormTemplateStatusFilterSchema } from './EnumOrderFormTemplateStatusFilterSchema';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const OrderFormTemplateScalarWhereInputSchema: z.ZodType<Prisma.OrderFormTemplateScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => OrderFormTemplateScalarWhereInputSchema), z.lazy(() => OrderFormTemplateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderFormTemplateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderFormTemplateScalarWhereInputSchema), z.lazy(() => OrderFormTemplateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  orderFormSectionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumOrderFormTemplateStatusFilterSchema), z.lazy(() => OrderFormTemplateStatusSchema) ]).optional(),
  version: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  effectiveDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  retiredDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  formSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  layoutSchema: z.lazy(() => JsonNullableFilterSchema).optional(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  isGlobal: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default OrderFormTemplateScalarWhereInputSchema;
