import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.strictObject({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.date(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default SessionCreateManyUserInputSchema;
