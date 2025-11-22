import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema: z.ZodType<Prisma.OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInput> = z.strictObject({
  orderFormSectionId: z.string(),
  name: z.string(),
  organizationId: z.string(),
});

export default OrderFormTemplateOrderFormSectionIdNameOrganizationIdCompoundUniqueInputSchema;
