import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutUserAttributeInputSchema } from './UserUpdateWithoutUserAttributeInputSchema';
import { UserUncheckedUpdateWithoutUserAttributeInputSchema } from './UserUncheckedUpdateWithoutUserAttributeInputSchema';
import { UserCreateWithoutUserAttributeInputSchema } from './UserCreateWithoutUserAttributeInputSchema';
import { UserUncheckedCreateWithoutUserAttributeInputSchema } from './UserUncheckedCreateWithoutUserAttributeInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutUserAttributeInputSchema: z.ZodType<Prisma.UserUpsertWithoutUserAttributeInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserAttributeInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserAttributeInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export default UserUpsertWithoutUserAttributeInputSchema;
