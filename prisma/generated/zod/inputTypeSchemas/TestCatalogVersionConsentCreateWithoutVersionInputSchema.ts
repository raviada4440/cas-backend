import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema';
import { ConsentTemplateCreateNestedOneWithoutVersionConsentsInputSchema } from './ConsentTemplateCreateNestedOneWithoutVersionConsentsInputSchema';
import { LabOrderConsentCreateNestedManyWithoutConsentInputSchema } from './LabOrderConsentCreateNestedManyWithoutConsentInputSchema';
import { ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema';

export const TestCatalogVersionConsentCreateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateWithoutVersionInput> = z.strictObject({
  id: z.string().optional(),
  isRequired: z.boolean().optional(),
  displayOrder: z.number().optional(),
  customTitle: z.string().optional().nullable(),
  customContent: z.string().optional().nullable(),
  conditionalLogic: z.string().optional().nullable(),
  dependsOnConsent: z.string().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema).optional(),
  consentTemplate: z.lazy(() => ConsentTemplateCreateNestedOneWithoutVersionConsentsInputSchema),
  labOrderConsents: z.lazy(() => LabOrderConsentCreateNestedManyWithoutConsentInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema).optional(),
});

export default TestCatalogVersionConsentCreateWithoutVersionInputSchema;
