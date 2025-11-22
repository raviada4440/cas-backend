import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';

export const ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogUncheckedCreateWithoutConsentTemplateInput> = z.strictObject({
  id: z.string().optional(),
  testId: z.string().optional().nullable(),
  versionId: z.string().optional().nullable(),
  versionConsentId: z.string().optional().nullable(),
  action: z.lazy(() => AuditActionSchema),
  fieldName: z.string().optional().nullable(),
  oldValue: z.string().optional().nullable(),
  newValue: z.string().optional().nullable(),
  changeReason: z.string().optional().nullable(),
  performedBy: z.string().optional().nullable(),
  performedAt: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ConsentAuditLogUncheckedCreateWithoutConsentTemplateInputSchema;
