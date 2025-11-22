import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserIdentityUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.string().optional(),
  provider: z.string(),
  issuer: z.string(),
  subject: z.string(),
  fhirUser: z.string().optional().nullable(),
  orgId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default UserIdentityUncheckedCreateWithoutUserInputSchema;
