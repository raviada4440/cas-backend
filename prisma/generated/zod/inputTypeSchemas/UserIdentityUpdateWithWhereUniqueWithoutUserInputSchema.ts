import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityUpdateWithoutUserInputSchema } from './UserIdentityUpdateWithoutUserInputSchema';
import { UserIdentityUncheckedUpdateWithoutUserInputSchema } from './UserIdentityUncheckedUpdateWithoutUserInputSchema';

export const UserIdentityUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserIdentityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserIdentityUpdateWithoutUserInputSchema), z.lazy(() => UserIdentityUncheckedUpdateWithoutUserInputSchema) ]),
});

export default UserIdentityUpdateWithWhereUniqueWithoutUserInputSchema;
