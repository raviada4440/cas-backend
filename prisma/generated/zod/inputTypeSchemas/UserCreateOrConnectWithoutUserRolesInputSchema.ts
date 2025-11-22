import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserRolesInputSchema } from './UserCreateWithoutUserRolesInputSchema';
import { UserUncheckedCreateWithoutUserRolesInputSchema } from './UserUncheckedCreateWithoutUserRolesInputSchema';

export const UserCreateOrConnectWithoutUserRolesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserRolesInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserRolesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserRolesInputSchema) ]),
});

export default UserCreateOrConnectWithoutUserRolesInputSchema;
