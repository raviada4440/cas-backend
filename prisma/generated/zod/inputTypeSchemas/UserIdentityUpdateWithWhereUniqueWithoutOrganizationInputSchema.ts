import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityUpdateWithoutOrganizationInputSchema } from './UserIdentityUpdateWithoutOrganizationInputSchema';
import { UserIdentityUncheckedUpdateWithoutOrganizationInputSchema } from './UserIdentityUncheckedUpdateWithoutOrganizationInputSchema';

export const UserIdentityUpdateWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.UserIdentityUpdateWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => UserIdentityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserIdentityUpdateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUncheckedUpdateWithoutOrganizationInputSchema) ]),
});

export default UserIdentityUpdateWithWhereUniqueWithoutOrganizationInputSchema;
