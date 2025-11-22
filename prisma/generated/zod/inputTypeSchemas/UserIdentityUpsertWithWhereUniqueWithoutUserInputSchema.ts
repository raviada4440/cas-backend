import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityUpdateWithoutUserInputSchema } from './UserIdentityUpdateWithoutUserInputSchema';
import { UserIdentityUncheckedUpdateWithoutUserInputSchema } from './UserIdentityUncheckedUpdateWithoutUserInputSchema';
import { UserIdentityCreateWithoutUserInputSchema } from './UserIdentityCreateWithoutUserInputSchema';
import { UserIdentityUncheckedCreateWithoutUserInputSchema } from './UserIdentityUncheckedCreateWithoutUserInputSchema';

export const UserIdentityUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserIdentityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserIdentityUpdateWithoutUserInputSchema), z.lazy(() => UserIdentityUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutUserInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutUserInputSchema) ]),
});

export default UserIdentityUpsertWithWhereUniqueWithoutUserInputSchema;
