import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityCreateWithoutUserInputSchema } from './UserIdentityCreateWithoutUserInputSchema';
import { UserIdentityUncheckedCreateWithoutUserInputSchema } from './UserIdentityUncheckedCreateWithoutUserInputSchema';

export const UserIdentityCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserIdentityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutUserInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutUserInputSchema) ]),
});

export default UserIdentityCreateOrConnectWithoutUserInputSchema;
