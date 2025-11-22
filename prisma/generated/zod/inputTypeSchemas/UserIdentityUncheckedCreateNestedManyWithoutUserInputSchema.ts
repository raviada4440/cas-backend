import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityCreateWithoutUserInputSchema } from './UserIdentityCreateWithoutUserInputSchema';
import { UserIdentityUncheckedCreateWithoutUserInputSchema } from './UserIdentityUncheckedCreateWithoutUserInputSchema';
import { UserIdentityCreateOrConnectWithoutUserInputSchema } from './UserIdentityCreateOrConnectWithoutUserInputSchema';
import { UserIdentityCreateManyUserInputEnvelopeSchema } from './UserIdentityCreateManyUserInputEnvelopeSchema';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';

export const UserIdentityUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.UserIdentityUncheckedCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutUserInputSchema), z.lazy(() => UserIdentityCreateWithoutUserInputSchema).array(), z.lazy(() => UserIdentityUncheckedCreateWithoutUserInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserIdentityCreateOrConnectWithoutUserInputSchema), z.lazy(() => UserIdentityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserIdentityCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
});

export default UserIdentityUncheckedCreateNestedManyWithoutUserInputSchema;
