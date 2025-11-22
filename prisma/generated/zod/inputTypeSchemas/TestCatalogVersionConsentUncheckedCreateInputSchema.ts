import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentUncheckedCreateNestedManyWithoutConsentInputSchema } from './LabOrderConsentUncheckedCreateNestedManyWithoutConsentInputSchema';
import { ConsentAuditLogUncheckedCreateNestedManyWithoutVersionConsentInputSchema } from './ConsentAuditLogUncheckedCreateNestedManyWithoutVersionConsentInputSchema';

export const TestCatalogVersionConsentUncheckedCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  configurationId: z.string().optional().nullable(),
  consentTemplateId: z.string(),
  isRequired: z.boolean().optional(),
  displayOrder: z.number().optional(),
  customTitle: z.string().optional().nullable(),
  customContent: z.string().optional().nullable(),
  conditionalLogic: z.string().optional().nullable(),
  dependsOnConsent: z.string().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentUncheckedCreateNestedManyWithoutConsentInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogUncheckedCreateNestedManyWithoutVersionConsentInputSchema).optional(),
});

export default TestCatalogVersionConsentUncheckedCreateInputSchema;
