import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema: z.ZodType<Prisma.OrderFormSectionNameOrganizationIdCompoundUniqueInput> = z.strictObject({
  name: z.string(),
  organizationId: z.string(),
});

export default OrderFormSectionNameOrganizationIdCompoundUniqueInputSchema;
