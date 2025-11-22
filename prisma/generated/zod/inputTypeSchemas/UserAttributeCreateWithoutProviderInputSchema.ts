import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { UserCreateNestedOneWithoutUserAttributeInputSchema } from './UserCreateNestedOneWithoutUserAttributeInputSchema';
import { AdminCreateNestedOneWithoutUserAttributeInputSchema } from './AdminCreateNestedOneWithoutUserAttributeInputSchema';

export const UserAttributeCreateWithoutProviderInputSchema: z.ZodType<Prisma.UserAttributeCreateWithoutProviderInput> = z.strictObject({
  id: z.string().optional(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserAttributeInputSchema),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserAttributeInputSchema).optional(),
});

export default UserAttributeCreateWithoutProviderInputSchema;
