import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutUserAttributeInputSchema } from './UserCreateWithoutUserAttributeInputSchema';
import { UserUncheckedCreateWithoutUserAttributeInputSchema } from './UserUncheckedCreateWithoutUserAttributeInputSchema';

export const UserCreateOrConnectWithoutUserAttributeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserAttributeInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedCreateWithoutUserAttributeInputSchema) ]),
});

export default UserCreateOrConnectWithoutUserAttributeInputSchema;
