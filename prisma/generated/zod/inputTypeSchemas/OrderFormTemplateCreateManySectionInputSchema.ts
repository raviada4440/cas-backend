import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateStatusSchema } from './OrderFormTemplateStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const OrderFormTemplateCreateManySectionInputSchema: z.ZodType<Prisma.OrderFormTemplateCreateManySectionInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => OrderFormTemplateStatusSchema).optional(),
  version: z.number().optional(),
  effectiveDate: z.date().optional().nullable(),
  retiredDate: z.date().optional().nullable(),
  formSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  layoutSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  organizationId: z.string().optional().nullable(),
  isGlobal: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default OrderFormTemplateCreateManySectionInputSchema;
