import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserIdentityCreateWithoutOrganizationInputSchema } from './UserIdentityCreateWithoutOrganizationInputSchema';
import { UserIdentityUncheckedCreateWithoutOrganizationInputSchema } from './UserIdentityUncheckedCreateWithoutOrganizationInputSchema';
import { UserIdentityCreateOrConnectWithoutOrganizationInputSchema } from './UserIdentityCreateOrConnectWithoutOrganizationInputSchema';
import { UserIdentityUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './UserIdentityUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { UserIdentityCreateManyOrganizationInputEnvelopeSchema } from './UserIdentityCreateManyOrganizationInputEnvelopeSchema';
import { UserIdentityWhereUniqueInputSchema } from './UserIdentityWhereUniqueInputSchema';
import { UserIdentityUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './UserIdentityUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { UserIdentityUpdateManyWithWhereWithoutOrganizationInputSchema } from './UserIdentityUpdateManyWithWhereWithoutOrganizationInputSchema';
import { UserIdentityScalarWhereInputSchema } from './UserIdentityScalarWhereInputSchema';

export const UserIdentityUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.UserIdentityUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserIdentityCreateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityCreateWithoutOrganizationInputSchema).array(), z.lazy(() => UserIdentityUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserIdentityCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => UserIdentityCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserIdentityUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserIdentityCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserIdentityWhereUniqueInputSchema), z.lazy(() => UserIdentityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserIdentityUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserIdentityUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => UserIdentityUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserIdentityScalarWhereInputSchema), z.lazy(() => UserIdentityScalarWhereInputSchema).array() ]).optional(),
});

export default UserIdentityUpdateManyWithoutOrganizationNestedInputSchema;
