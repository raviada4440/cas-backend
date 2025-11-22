import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityScalarWhereInputSchema } from './UserIdentityScalarWhereInputSchema';
import { UserIdentityUpdateManyMutationInputSchema } from './UserIdentityUpdateManyMutationInputSchema';
import { UserIdentityUncheckedUpdateManyWithoutUserInputSchema } from './UserIdentityUncheckedUpdateManyWithoutUserInputSchema';

export const UserIdentityUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => UserIdentityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserIdentityUpdateManyMutationInputSchema), z.lazy(() => UserIdentityUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default UserIdentityUpdateManyWithWhereWithoutUserInputSchema;
