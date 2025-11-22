import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { UserAttributeUncheckedCreateNestedOneWithoutUserInputSchema } from './UserAttributeUncheckedCreateNestedOneWithoutUserInputSchema';
import { UserIdentityUncheckedCreateNestedManyWithoutUserInputSchema } from './UserIdentityUncheckedCreateNestedManyWithoutUserInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  userAttribute: z.lazy(() => UserAttributeUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
});

export default UserUncheckedCreateWithoutSessionsInputSchema;
