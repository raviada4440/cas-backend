import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.strictObject({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
});

export default VerificationTokenUncheckedCreateInputSchema;
