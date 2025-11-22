import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateWithoutVersionConsentInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema';
import { ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInputSchema } from './ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInputSchema';
import { ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema } from './ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInputSchema } from './ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInputSchema';
import { ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInputSchema } from './ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInputSchema';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';

export const ConsentAuditLogUpdateManyWithoutVersionConsentNestedInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyWithoutVersionConsentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutVersionConsentInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionConsentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionConsentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutVersionConsentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyVersionConsentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutVersionConsentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInputSchema), z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConsentAuditLogScalarWhereInputSchema), z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUpdateManyWithoutVersionConsentNestedInputSchema;
