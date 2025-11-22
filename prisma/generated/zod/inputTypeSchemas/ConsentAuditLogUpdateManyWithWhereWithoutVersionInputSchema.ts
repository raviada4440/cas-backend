import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';
import { ConsentAuditLogUpdateManyMutationInputSchema } from './ConsentAuditLogUpdateManyMutationInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutVersionInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutVersionInputSchema';

export const ConsentAuditLogUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateManyMutationInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default ConsentAuditLogUpdateManyWithWhereWithoutVersionInputSchema;
