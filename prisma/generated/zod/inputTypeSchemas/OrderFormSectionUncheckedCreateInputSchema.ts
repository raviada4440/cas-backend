import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateUncheckedCreateNestedManyWithoutSectionInputSchema } from './OrderFormTemplateUncheckedCreateNestedManyWithoutSectionInputSchema';

export const OrderFormSectionUncheckedCreateInputSchema: z.ZodType<Prisma.OrderFormSectionUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().optional(),
  isActive: z.boolean().optional(),
  organizationId: z.string().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  templates: z.lazy(() => OrderFormTemplateUncheckedCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default OrderFormSectionUncheckedCreateInputSchema;
