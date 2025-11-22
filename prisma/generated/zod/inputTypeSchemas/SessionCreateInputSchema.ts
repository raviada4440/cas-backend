import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSessionsInputSchema } from './UserCreateNestedOneWithoutSessionsInputSchema';

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.strictObject({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.date(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
});

export default SessionCreateInputSchema;
