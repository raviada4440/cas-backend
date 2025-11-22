import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema: z.ZodType<Prisma.UserIdentityProvider_issuer_subjectCompoundUniqueInput> = z.strictObject({
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
});

export default UserIdentityProvider_issuer_subjectCompoundUniqueInputSchema;
