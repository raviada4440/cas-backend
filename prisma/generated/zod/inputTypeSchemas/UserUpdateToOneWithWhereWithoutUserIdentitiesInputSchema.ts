import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutUserIdentitiesInputSchema } from './UserUpdateWithoutUserIdentitiesInputSchema';
import { UserUncheckedUpdateWithoutUserIdentitiesInputSchema } from './UserUncheckedUpdateWithoutUserIdentitiesInputSchema';

export const UserUpdateToOneWithWhereWithoutUserIdentitiesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutUserIdentitiesInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutUserIdentitiesInputSchema), z.lazy(() => UserUncheckedUpdateWithoutUserIdentitiesInputSchema) ]),
});

export default UserUpdateToOneWithWhereWithoutUserIdentitiesInputSchema;
