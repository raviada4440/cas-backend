import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { UserCreateNestedOneWithoutUserAttributeInputSchema } from './UserCreateNestedOneWithoutUserAttributeInputSchema';
import { AdminCreateNestedOneWithoutUserAttributeInputSchema } from './AdminCreateNestedOneWithoutUserAttributeInputSchema';
import { ProviderCreateNestedOneWithoutUserAttributeInputSchema } from './ProviderCreateNestedOneWithoutUserAttributeInputSchema';

export const UserAttributeCreateInputSchema: z.ZodType<Prisma.UserAttributeCreateInput> = z.strictObject({
  id: z.string().optional(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserAttributeInputSchema),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserAttributeInputSchema).optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutUserAttributeInputSchema).optional(),
});

export default UserAttributeCreateInputSchema;
