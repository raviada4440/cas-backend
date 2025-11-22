import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentAuditLogCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogCreateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema';
import { ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema } from './ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema';
import { ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema } from './ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema';
import { ConsentAuditLogWhereUniqueInputSchema } from './ConsentAuditLogWhereUniqueInputSchema';

export const ConsentAuditLogUncheckedCreateNestedManyWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogUncheckedCreateNestedManyWithoutConsentTemplateInput> = z.strictObject({
  create: z.union([ z.lazy(() => ConsentAuditLogCreateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogCreateWithoutConsentTemplateInputSchema).array(), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema), z.lazy(() => ConsentAuditLogCreateOrConnectWithoutConsentTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConsentAuditLogCreateManyConsentTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConsentAuditLogWhereUniqueInputSchema), z.lazy(() => ConsentAuditLogWhereUniqueInputSchema).array() ]).optional(),
});

export default ConsentAuditLogUncheckedCreateNestedManyWithoutConsentTemplateInputSchema;
