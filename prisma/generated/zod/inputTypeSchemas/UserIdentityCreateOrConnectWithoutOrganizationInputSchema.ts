import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityCreateWithoutOrganizationInputSchema } from './UserIdentityCreateWithoutOrganizationInputSchema';
import { UserIdentityUncheckedCreateWithoutOrganizationInputSchema } from './UserIdentityUncheckedCreateWithoutOrganizationInputSchema';

export const UserIdentityCreateOrConnectWithoutOrganizationInputSchema: z.ZodType<Prisma.UserIdentityCreateOrConnectWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => UserIdentityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default UserIdentityCreateOrConnectWithoutOrganizationInputSchema;
