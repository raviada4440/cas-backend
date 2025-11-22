import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserAttributeUserTypeSchema } from './UserAttributeUserTypeSchema';
import { AdminCreateNestedOneWithoutUserAttributeInputSchema } from './AdminCreateNestedOneWithoutUserAttributeInputSchema';
import { ProviderCreateNestedOneWithoutUserAttributeInputSchema } from './ProviderCreateNestedOneWithoutUserAttributeInputSchema';

export const UserAttributeCreateWithoutUserInputSchema: z.ZodType<Prisma.UserAttributeCreateWithoutUserInput> = z.strictObject({
  id: z.string().optional(),
  userType: z.lazy(() => UserAttributeUserTypeSchema).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserAttributeInputSchema).optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutUserAttributeInputSchema).optional(),
});

export default UserAttributeCreateWithoutUserInputSchema;
