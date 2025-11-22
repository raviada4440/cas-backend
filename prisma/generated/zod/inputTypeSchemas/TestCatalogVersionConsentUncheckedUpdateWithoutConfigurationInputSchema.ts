import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderConsentUncheckedUpdateManyWithoutConsentNestedInputSchema } from './LabOrderConsentUncheckedUpdateManyWithoutConsentNestedInputSchema';
import { ConsentAuditLogUncheckedUpdateManyWithoutVersionConsentNestedInputSchema } from './ConsentAuditLogUncheckedUpdateManyWithoutVersionConsentNestedInputSchema';

export const TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  versionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  consentTemplateId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isRequired: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  displayOrder: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customContent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  conditionalLogic: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dependsOnConsent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentUncheckedUpdateManyWithoutConsentNestedInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogUncheckedUpdateManyWithoutVersionConsentNestedInputSchema).optional(),
});

export default TestCatalogVersionConsentUncheckedUpdateWithoutConfigurationInputSchema;
