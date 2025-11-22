import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserAttributeInputSchema } from './UserCreateWithoutUserAttributeInputSchema';
import { UserUncheckedCreateWithoutUserAttributeInputSchema } from './UserUncheckedCreateWithoutUserAttributeInputSchema';
import { UserCreateOrConnectWithoutUserAttributeInputSchema } from './UserCreateOrConnectWithoutUserAttributeInputSchema';
import { UserUpsertWithoutUserAttributeInputSchema } from './UserUpsertWithoutUserAttributeInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutUserAttributeInputSchema } from './UserUpdateToOneWithWhereWithoutUserAttributeInputSchema';
import { UserUpdateWithoutUserAttributeInputSchema } from './UserUpdateWithoutUserAttributeInputSchema';
import { UserUncheckedUpdateWithoutUserAttributeInputSchema } from './UserUncheckedUpdateWithoutUserAttributeInputSchema';

export const UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserAttributeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserAttributeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserAttributeInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutUserAttributeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutUserAttributeInputSchema), z.lazy(() => UserUpdateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserAttributeInputSchema) ]).optional(),
});

export default UserUpdateOneRequiredWithoutUserAttributeNestedInputSchema;
