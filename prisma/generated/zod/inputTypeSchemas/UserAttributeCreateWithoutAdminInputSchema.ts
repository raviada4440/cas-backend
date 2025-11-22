import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { UserCreateNestedOneWithoutUserAttributeInputSchema } from './UserCreateNestedOneWithoutUserAttributeInputSchema';
import { ProviderCreateNestedOneWithoutUserAttributeInputSchema } from './ProviderCreateNestedOneWithoutUserAttributeInputSchema';

export const UserAttributeCreateWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeCreateWithoutAdminInput> = z.strictObject({
  id: z.string().optional(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserAttributeInputSchema),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutUserAttributeInputSchema).optional(),
});

export default UserAttributeCreateWithoutAdminInputSchema;
