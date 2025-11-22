import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutVersionInputSchema } from './ConsentAuditLogCreateWithoutVersionInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutVersionInputSchema } from './ConsentAuditLogUncheckedCreateWithoutVersionInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutVersionInputSchema } from './ConsentAuditLogCreateOrConnectWithoutVersionInputSchema';
import { ConsentAuditLogCreateManyVersionInputEnvelopeSchema } from './ConsentAuditLogCreateManyVersionInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';

export const ConsentAuditLogUncheckedCreateNestedManyWithoutVersionInputSchema: z.ZodType<Prisma.ConsentAuditLogUncheckedCreateNestedManyWithoutVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutVersionInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUncheckedCreateNestedManyWithoutVersionInputSchema;
