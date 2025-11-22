import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserIdentitiesInputSchema } from './UserCreateWithoutUserIdentitiesInputSchema';
import { UserUncheckedCreateWithoutUserIdentitiesInputSchema } from './UserUncheckedCreateWithoutUserIdentitiesInputSchema';
import { UserCreateOrConnectWithoutUserIdentitiesInputSchema } from './UserCreateOrConnectWithoutUserIdentitiesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserIdentitiesInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserIdentitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserIdentitiesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export default UserCreateNestedOneWithoutUserIdentitiesInputSchema;
