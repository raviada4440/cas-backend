import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema: z.ZodType<Prisma.ExternalIdentifierSystemValueResourceTypeCompoundUniqueInput> = z.strictObject({
  system: z.string(),
  value: z.string(),
  resourceType: z.string(),
});

export default ExternalIdentifierSystemValueResourceTypeCompoundUniqueInputSchema;
