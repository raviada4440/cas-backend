import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUserAttributeInputSchema } from './UserUpdateWithoutUserAttributeInputSchema';
import { UserUncheckedUpdateWithoutUserAttributeInputSchema } from './UserUncheckedUpdateWithoutUserAttributeInputSchema';

export const UserUpdateToOneWithWhereWithoutUserAttributeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserAttributeInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserAttributeInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserAttributeInputSchema) ]),
});

export default UserUpdateToOneWithWhereWithoutUserAttributeInputSchema;
