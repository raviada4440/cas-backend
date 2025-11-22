import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserIdentitiesInputSchema } from './UserCreateWithoutUserIdentitiesInputSchema';
import { UserUncheckedCreateWithoutUserIdentitiesInputSchema } from './UserUncheckedCreateWithoutUserIdentitiesInputSchema';
import { UserCreateOrConnectWithoutUserIdentitiesInputSchema } from './UserCreateOrConnectWithoutUserIdentitiesInputSchema';
import { UserUpsertWithoutUserIdentitiesInputSchema } from './UserUpsertWithoutUserIdentitiesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUserIdentitiesInputSchema } from './UserUpdateToOneWithWhereWithoutUserIdentitiesInputSchema';
import { UserUpdateWithoutUserIdentitiesInputSchema } from './UserUpdateWithoutUserIdentitiesInputSchema';
import { UserUncheckedUpdateWithoutUserIdentitiesInputSchema } from './UserUncheckedUpdateWithoutUserIdentitiesInputSchema';

export const UserUpdateOneRequiredWithoutUserIdentitiesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserIdentitiesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserIdentitiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserIdentitiesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserIdentitiesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserIdentitiesInputSchema), z.lazy(() => UserUpdateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserIdentitiesInputSchema) ]).optional(),
});

export default UserUpdateOneRequiredWithoutUserIdentitiesNestedInputSchema;
