import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.strictObject({
  identifier: z.string(),
  token: z.string(),
});

export default VerificationTokenIdentifierTokenCompoundUniqueInputSchema;
