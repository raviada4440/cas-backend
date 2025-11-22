import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';
import { ConsentAuditLogUpdateManyMutationInputSchema } from './ConsentAuditLogUpdateManyMutationInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutVersionConsentInputSchema';

export const ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateManyMutationInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutVersionConsentInputSchema) ]),
});

export default ConsentAuditLogUpdateManyWithWhereWithoutVersionConsentInputSchema;
