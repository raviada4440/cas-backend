import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';

export const UserAttributeCreateManyInputSchema: z.ZodType<Prisma.UserAttributeCreateManyInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default UserAttributeCreateManyInputSchema;
