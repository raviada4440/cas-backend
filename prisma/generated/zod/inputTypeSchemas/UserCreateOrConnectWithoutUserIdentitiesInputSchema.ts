import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserIdentitiesInputSchema } from './UserCreateWithoutUserIdentitiesInputSchema';
import { UserUncheckedCreateWithoutUserIdentitiesInputSchema } from './UserUncheckedCreateWithoutUserIdentitiesInputSchema';

export const UserCreateOrConnectWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserIdentitiesInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserIdentitiesInputSchema) ]),
});

export default UserCreateOrConnectWithoutUserIdentitiesInputSchema;
