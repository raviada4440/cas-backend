import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutTestInputSchema } from './ConsentAuditLogCreateWithoutTestInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutTestInputSchema } from './ConsentAuditLogUncheckedCreateWithoutTestInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutTestInputSchema } from './ConsentAuditLogCreateOrConnectWithoutTestInputSchema';
import { ConsentAuditLogCreateManyTestInputEnvelopeSchema } from './ConsentAuditLogCreateManyTestInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';

export const ConsentAuditLogUncheckedCreateNestedManyWithoutTestInputSchema: z.ZodType<Prisma.ConsentAuditLogUncheckedCreateNestedManyWithoutTestInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutTestInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutTestInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutTestInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyTestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUncheckedCreateNestedManyWithoutTestInputSchema;
