import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AccountUserIdProviderCompoundUniqueInputSchema: z.ZodType<Prisma.AccountUserIdProviderCompoundUniqueInput> = z.strictObject({
  userId: z.string(),
  provider: z.string(),
});

export default AccountUserIdProviderCompoundUniqueInputSchema;
