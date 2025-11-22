import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrderFormSectionCreateManyOrganizationInputSchema: z.ZodType<Prisma.OrderFormSectionCreateManyOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().optional(),
  isActive: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default OrderFormSectionCreateManyOrganizationInputSchema;
