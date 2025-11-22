import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrderFormTemplateCreateNestedManyWithoutSectionInputSchema } from './OrderFormTemplateCreateNestedManyWithoutSectionInputSchema';

export const OrderFormSectionCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionCreateWithoutOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().optional(),
  isActive: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  templates: z.lazy(() => OrderFormTemplateCreateNestedManyWithoutSectionInputSchema).optional(),
});

export default OrderFormSectionCreateWithoutOrganizationInputSchema;
