import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityScalarWhereInputSchema } from './UserIdentityScalarWhereInputSchema';
import { UserIdentityUpdateManyMutationInputSchema } from './UserIdentityUpdateManyMutationInputSchema';
import { UserIdentityUncheckedUpdateManyWithoutOrganizationInputSchema } from './UserIdentityUncheckedUpdateManyWithoutOrganizationInputSchema';

export const UserIdentityUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.UserIdentityUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => UserIdentityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserIdentityUpdateManyMutationInputSchema), z.lazy(() => UserIdentityUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default UserIdentityUpdateManyWithWhereWithoutOrganizationInputSchema;
