import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { AuditActionSchema } from './AuditActionSchema';
import { EnumAuditActionFieldUpdateOperationsInputSchema } from './EnumAuditActionFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ConsentTemplateUpdateOneWithoutAuditLogsNestedInputSchema } from './ConsentTemplateUpdateOneWithoutAuditLogsNestedInputSchema';
import { TestCatalogVersionUpdateOneWithoutConsentAuditLogsNestedInputSchema } from './TestCatalogVersionUpdateOneWithoutConsentAuditLogsNestedInputSchema';
import { TestCatalogVersionConsentUpdateOneWithoutAuditLogsNestedInputSchema } from './TestCatalogVersionConsentUpdateOneWithoutAuditLogsNestedInputSchema';

export const ConsentAuditLogUpdateWithoutTestInputSchema: z.ZodType<Prisma.ConsentAuditLogUpdateWithoutTestInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.lazy(() => AuditActionSchema), z.lazy(() => EnumAuditActionFieldUpdateOperationsInputSchema) ]).optional(),
  fieldName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  oldValue: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  newValue: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  changeReason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  performedBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  performedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  consentTemplate: z.lazy(() => ConsentTemplateUpdateOneWithoutAuditLogsNestedInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneWithoutConsentAuditLogsNestedInputSchema).optional(),
  versionConsent: z.lazy(() => TestCatalogVersionConsentUpdateOneWithoutAuditLogsNestedInputSchema).optional(),
});

export default ConsentAuditLogUpdateWithoutTestInputSchema;
