import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUserIdentitiesInputSchema } from './UserUpdateWithoutUserIdentitiesInputSchema';
import { UserUncheckedUpdateWithoutUserIdentitiesInputSchema } from './UserUncheckedUpdateWithoutUserIdentitiesInputSchema';
import { UserCreateWithoutUserIdentitiesInputSchema } from './UserCreateWithoutUserIdentitiesInputSchema';
import { UserUncheckedCreateWithoutUserIdentitiesInputSchema } from './UserUncheckedCreateWithoutUserIdentitiesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserIdentitiesInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserIdentitiesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserIdentitiesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export default UserUpsertWithoutUserIdentitiesInputSchema;
