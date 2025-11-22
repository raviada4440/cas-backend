import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.date(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default SessionCreateManyInputSchema;
