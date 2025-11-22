import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { UserIdentityCreateNestedManyWithoutUserInputSchema } from './UserIdentityCreateNestedManyWithoutUserInputSchema';
import { UserRoleCreateNestedManyWithoutUserInputSchema } from './UserRoleCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutUserAttributeInputSchema: z.ZodType<Prisma.UserCreateWithoutUserAttributeInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  emailVerified: z.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityCreateNestedManyWithoutUserInputSchema).optional(),
  userRoles: z.lazy(() => UserRoleCreateNestedManyWithoutUserInputSchema).optional(),
});

export default UserCreateWithoutUserAttributeInputSchema;
