import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityCreateWithoutOrganizationInputSchema } from './UserIdentityCreateWithoutOrganizationInputSchema';
import { UserIdentityUncheckedCreateWithoutOrganizationInputSchema } from './UserIdentityUncheckedCreateWithoutOrganizationInputSchema';
import { UserIdentityCreateOrConnectWithoutOrganizationInputSchema } from './UserIdentityCreateOrConnectWithoutOrganizationInputSchema';
import { UserIdentityCreateManyOrganizationInputEnvelopeSchema } from './UserIdentityCreateManyOrganizationInputEnvelopeSchema';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';

export const UserIdentityCreateNestedManyWithoutOrganizationInputSchema: z.ZodType<Prisma.UserIdentityCreateNestedManyWithoutOrganizationInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityCreateWithoutOrganizationInputSchema).array(), z.lazy(() => UserIdentityUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserIdentityCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => UserIdentityCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserIdentityCreateManyOrganizationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
});

export default UserIdentityCreateNestedManyWithoutOrganizationInputSchema;
