import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityCreateWithoutUserInputSchema } from './UserIdentityCreateWithoutUserInputSchema';
import { UserIdentityUncheckedCreateWithoutUserInputSchema } from './UserIdentityUncheckedCreateWithoutUserInputSchema';
import { UserIdentityCreateOrConnectWithoutUserInputSchema } from './UserIdentityCreateOrConnectWithoutUserInputSchema';
import { UserIdentityUpsertWithWhereUniqueWithoutUserInputSchema } from './UserIdentityUpsertWithWhereUniqueWithoutUserInputSchema';
import { UserIdentityCreateManyUserInputEnvelopeSchema } from './UserIdentityCreateManyUserInputEnvelopeSchema';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityUpdateWithWhereUniqueWithoutUserInputSchema } from './UserIdentityUpdateWithWhereUniqueWithoutUserInputSchema';
import { UserIdentityUpdateManyWithWhereWithoutUserInputSchema } from './UserIdentityUpdateManyWithWhereWithoutUserInputSchema';
import { UserIdentityScalarWhereInputSchema } from './UserIdentityScalarWhereInputSchema';

export const UserIdentityUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.UserIdentityUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutUserInputSchema), z.lazy(() => UserIdentityCreateWithoutUserInputSchema).array(), z.lazy(() => UserIdentityUncheckedCreateWithoutUserInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserIdentityCreateOrConnectWithoutUserInputSchema), z.lazy(() => UserIdentityCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserIdentityUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => UserIdentityUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserIdentityCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserIdentityUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => UserIdentityUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserIdentityUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => UserIdentityUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserIdentityScalarWhereInputSchema), z.lazy(() => UserIdentityScalarWhereInputSchema).array() ]).optional(),
});

export default UserIdentityUncheckedUpdateManyWithoutUserNestedInputSchema;
