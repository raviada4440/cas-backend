import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogScalarWhereInputSchema } from './ConsentAuditLogScalarWhereInputSchema';
import { ConsentAuditLogUpdateManyMutationInputSchema } from './ConsentAuditLogUpdateManyMutationInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutConsentTemplateInputSchema';

export const ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateManyMutationInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutConsentTemplateInputSchema) ]),
});

export default ConsentAuditLogUpdateManyWithWhereWithoutConsentTemplateInputSchema;
