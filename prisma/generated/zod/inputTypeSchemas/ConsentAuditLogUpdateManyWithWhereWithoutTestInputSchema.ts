import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';
import { ConsentAuditLogUpdateManyMutationInputSchema } from './ConsentAuditLogUpdateManyMutationInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutTestInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutTestInputSchema';

export const ConsentAuditLogUpdateManyWithWhereWithoutTestInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyWithWhereWithoutTestInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateManyMutationInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutTestInputSchema) ]),
});

export default ConsentAuditLogUpdateManyWithWhereWithoutTestInputSchema;
