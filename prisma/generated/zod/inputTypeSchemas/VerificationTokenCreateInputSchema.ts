import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.strictObject({
  identifier: z.string(),
  token: z.string(),
  expires: z.date(),
});

export default VerificationTokenCreateInputSchema;
