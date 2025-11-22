import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema } from './ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema';

export const UserAttributeUncheckedCreateWithoutAdminInputSchema: z.ZodType<Prisma.UserAttributeUncheckedCreateWithoutAdminInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  provider: z.lazy(() => ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema).optional(),
});

export default UserAttributeUncheckedCreateWithoutAdminInputSchema;
