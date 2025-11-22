import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateOneRequiredWithoutConsentsNestedInputSchema } from './TestCatalogVersionUpdateOneRequiredWithoutConsentsNestedInputSchema';
import { TestCatalogConfigurationUpdateOneWithoutConsentsNestedInputSchema } from './TestCatalogConfigurationUpdateOneWithoutConsentsNestedInputSchema';
import { ConsentTemplateUpdateOneRequiredWithoutVersionConsentsNestedInputSchema } from './ConsentTemplateUpdateOneRequiredWithoutVersionConsentsNestedInputSchema';
import { LabOrderConsentUpdateManyWithoutConsentNestedInputSchema } from './LabOrderConsentUpdateManyWithoutConsentNestedInputSchema';
import { ConsentAuditLogUpdateManyWithoutVersionConsentNestedInputSchema } from './ConsentAuditLogUpdateManyWithoutVersionConsentNestedInputSchema';

export const TestCatalogVersionConsentUpdateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isRequired: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  displayOrder: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  customTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  customContent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  conditionalLogic: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dependsOnConsent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneRequiredWithoutConsentsNestedInputSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationUpdateOneWithoutConsentsNestedInputSchema).optional(),
  consentTemplate: z.lazy(() => ConsentTemplateUpdateOneRequiredWithoutVersionConsentsNestedInputSchema).optional(),
  labOrderConsents: z.lazy(() => LabOrderConsentUpdateManyWithoutConsentNestedInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogUpdateManyWithoutVersionConsentNestedInputSchema).optional(),
});

export default TestCatalogVersionConsentUpdateInputSchema;
