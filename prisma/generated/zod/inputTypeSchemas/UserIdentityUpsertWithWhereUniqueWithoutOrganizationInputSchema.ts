import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityUpdateWithoutOrganizationInputSchema } from './UserIdentityUpdateWithoutOrganizationInputSchema';
import { UserIdentityUncheckedUpdateWithoutOrganizationInputSchema } from './UserIdentityUncheckedUpdateWithoutOrganizationInputSchema';
import { UserIdentityCreateWithoutOrganizationInputSchema } from './UserIdentityCreateWithoutOrganizationInputSchema';
import { UserIdentityUncheckedCreateWithoutOrganizationInputSchema } from './UserIdentityUncheckedCreateWithoutOrganizationInputSchema';

export const UserIdentityUpsertWithWhereUniqueWithoutOrganizationInputSchema: z.ZodType<Prisma.UserIdentityUpsertWithWhereUniqueWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => UserIdentityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserIdentityUpdateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUncheckedUpdateWithoutOrganizationInputSchema) ]),
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutOrganizationInputSchema) ]),
});

export default UserIdentityUpsertWithWhereUniqueWithoutOrganizationInputSchema;
