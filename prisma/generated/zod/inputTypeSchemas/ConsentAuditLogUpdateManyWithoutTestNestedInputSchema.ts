import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutTestInputSchema } from './ConsentAuditLogCreateWithoutTestInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutTestInputSchema } from './ConsentAuditLogUncheckedCreateWithoutTestInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutTestInputSchema } from './ConsentAuditLogCreateOrConnectWithoutTestInputSchema';
import { ConsentAuditLogUpsertWithWhereUniqueWithoutTestInputSchema } from './ConsentAuditLogUpsertWithWhereUniqueWithoutTestInputSchema';
import { ConsentAuditLogCreateManyTestInputEnvelopeSchema } from './ConsentAuditLogCreateManyTestInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithWhereUniqueWithoutTestInputSchema } from './ConsentAuditLogUpdateWithWhereUniqueWithoutTestInputSchema';
import { ConsentAuditLogUpdateManyWithWhereWithoutTestInputSchema } from './ConsentAuditLogUpdateManyWithWhereWithoutTestInputSchema';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';

export const ConsentAuditLogUpdateManyWithoutTestNestedInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyWithoutTestNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutTestInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutTestInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUpsertWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyTestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUpdateWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUpdateManyWithWhereWithoutTestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConsentAuditLogScalarWhereInputSchema), z.lazy(() => ConsentAuditLogScalarWhereInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUpdateManyWithoutTestNestedInputSchema;
