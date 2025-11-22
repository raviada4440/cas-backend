import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUpdateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutConsentTemplateInputSchema';

export const ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutConsentTemplateInputSchema) ]),
});

export default ConsentAuditLogUpdateWithWhereUniqueWithoutConsentTemplateInputSchema;
