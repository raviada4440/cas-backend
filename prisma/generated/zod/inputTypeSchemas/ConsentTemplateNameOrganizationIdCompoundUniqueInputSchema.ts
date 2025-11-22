import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ConsentTemplateNameOrganizationIdCompoundUniqueInputSchema: z.ZodType<Prisma.ConsentTemplateNameOrganizationIdCompoundUniqueInput> = z.strictObject({
  name: z.string(),
  organizationId: z.string(),
});

export default ConsentTemplateNameOrganizationIdCompoundUniqueInputSchema;
