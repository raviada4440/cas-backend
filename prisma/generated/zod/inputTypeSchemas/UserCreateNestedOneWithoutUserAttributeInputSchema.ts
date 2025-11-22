import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutUserAttributeInputSchema } from './UserCreateWithoutUserAttributeInputSchema';
import { UserUncheckedCreateWithoutUserAttributeInputSchema } from './UserUncheckedCreateWithoutUserAttributeInputSchema';
import { UserCreateOrConnectWithoutUserAttributeInputSchema } from './UserCreateOrConnectWithoutUserAttributeInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutUserAttributeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserAttributeInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserAttributeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutUserAttributeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export default UserCreateNestedOneWithoutUserAttributeInputSchema;
