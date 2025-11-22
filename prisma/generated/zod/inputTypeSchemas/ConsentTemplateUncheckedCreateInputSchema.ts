import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTypeSchema } from './ConsentTypeSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';
import { TestCatalogVersionConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema';
import { LabOrderConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema } from './LabOrderConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema';
import { ConsentAuditLogUncheckedCreateNestedManyWithoutConsentTemplateInputSchema } from './ConsentAuditLogUncheckedCreateNestedManyWithoutConsentTemplateInputSchema';

export const ConsentTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.ConsentTemplateUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  consentType: z.lazy(() => ConsentTypeSchema),
  isRequired: z.boolean().optional(),
  title: z.string(),
  content: z.string(),
  legalText: z.string().optional().nullable(),
  formSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  status: z.lazy(() => ConsentTemplateStatusSchema).optional(),
  version: z.number().optional(),
  effectiveDate: z.date().optional().nullable(),
  retiredDate: z.date().optional().nullable(),
  organizationId: z.string().optional().nullable(),
  isGlobal: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  versionConsents: z.lazy(() => TestCatalogVersionConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentUncheckedCreateNestedManyWithoutConsentTemplateInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogUncheckedCreateNestedManyWithoutConsentTemplateInputSchema).optional(),
});

export default ConsentTemplateUncheckedCreateInputSchema;
