import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditActionSchema } from './AuditActionSchema';
import { TestCatalogCreateNestedOneWithoutConsentAuditLogsInputSchema } from './TestCatalogCreateNestedOneWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionCreateNestedOneWithoutConsentAuditLogsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutConsentAuditLogsInputSchema';
import { TestCatalogVersionConsentCreateNestedOneWithoutAuditLogsInputSchema } from './TestCatalogVersionConsentCreateNestedOneWithoutAuditLogsInputSchema';

export const ConsentAuditLogCreateWithoutConsentTemplateInputSchema: z.ZodType<Prisma.ConsentAuditLogCreateWithoutConsentTemplateInput> = z.strictObject({
  id: z.string().optional(),
  action: z.lazy(() => AuditActionSchema),
  fieldName: z.string().optional().nullable(),
  oldValue: z.string().optional().nullable(),
  newValue: z.string().optional().nullable(),
  changeReason: z.string().optional().nullable(),
  performedBy: z.string().optional().nullable(),
  performedAt: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  test: z.lazy(() => TestCatalogCreateNestedOneWithoutConsentAuditLogsInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutConsentAuditLogsInputSchema).optional(),
  versionConsent: z.lazy(() => TestCatalogVersionConsentCreateNestedOneWithoutAuditLogsInputSchema).optional(),
});

export default ConsentAuditLogCreateWithoutConsentTemplateInputSchema;
