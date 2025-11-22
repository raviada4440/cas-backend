import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';
import { ConsentAuditLogUpdateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUpdateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedUpdateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedUpdateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogCreateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema';

export const ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => ConsentAuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConsentAuditLogUpdateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUncheckedUpdateWithoutConsentTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema) ]),
});

export default ConsentAuditLogUpsertWithWhereUniqueWithoutConsentTemplateInputSchema;
