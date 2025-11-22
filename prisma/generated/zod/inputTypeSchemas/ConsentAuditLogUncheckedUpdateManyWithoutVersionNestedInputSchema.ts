import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutVersionInputSchema } from './ConsentAuditLogCreateWithoutVersionInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutVersionInputSchema } from './ConsentAuditLogCreateOrConnectWithoutVersionInputSchema';
import { ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInputSchema } from './ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInputSchema';
import { ConsentAuditLogCreateManyVersionInputEnvelopeSchema } from './ConsentAuditLogCreateManyVersionInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInputSchema } from './ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInputSchema';
import { ConsentAuditLogUpdateManyWithWhereWithoutVersionInputSchema } from './ConsentAuditLogUpdateManyWithWhereWithoutVersionInputSchema';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';

export const ConsentAuditLogUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.ConsentAuditLogUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutVersionInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConsentAuditLogScalarWhereInputSchema), z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUncheckedUpdateManyWithoutVersionNestedInputSchema;
