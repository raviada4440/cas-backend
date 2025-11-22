import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutConsentsInputSchema } from './TestCatalogVersionCreateNestedOneWithoutConsentsInputSchema';
import { TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema';
import { LabOrderConsentCreateNestedManyWithoutConsentInputSchema } from './LabOrderConsentCreateNestedManyWithoutConsentInputSchema';
import { ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema } from './ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema';

export const TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateWithoutConsentTemplateInput> = z.strictObject({
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
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutConsentsInputSchema),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutConsentsInputSchema).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentCreateNestedManyWithoutConsentInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogCreateNestedManyWithoutVersionConsentInputSchema).optional(),
});

export default TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema;
