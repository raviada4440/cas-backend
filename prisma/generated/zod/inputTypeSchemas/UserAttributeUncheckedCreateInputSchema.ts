import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { AdminUncheckedCreateNestedOneWithoutUserAttributeInputSchema } from './AdminUncheckedCreateNestedOneWithoutUserAttributeInputSchema';
import { ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema } from './ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema';

export const UserAttributeUncheckedCreateInputSchema: z.ZodType<Prisma.UserAttributeUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  userId: z.string(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  admin: z.lazy(() => AdminUncheckedCreateNestedOneWithoutUserAttributeInputSchema).optional(),
  provider: z.lazy(() => ProviderUncheckedCreateNestedOneWithoutUserAttributeInputSchema).optional(),
});

export default UserAttributeUncheckedCreateInputSchema;
