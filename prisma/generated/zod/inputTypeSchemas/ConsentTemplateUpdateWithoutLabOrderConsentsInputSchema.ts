import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ConsentTypeSchema } from './ConsentTypeSchema';
import { EnumConsentTypeFieldUpdateOperationsInputSchema } from './EnumConsentTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';
import { EnumConsentTemplateStatusFieldUpdateOperationsInputSchema } from './EnumConsentTemplateStatusFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionConsentUpdateManyWithoutConsentTemplateNestedInputSchema } from './TestCatalogVersionConsentUpdateManyWithoutConsentTemplateNestedInputSchema';
import { ConsentAuditLogUpdateManyWithoutConsentTemplateNestedInputSchema } from './ConsentAuditLogUpdateManyWithoutConsentTemplateNestedInputSchema';

export const ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema: z.ZodType<Prisma.ConsentTemplateUpdateWithoutLabOrderConsentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  consentType: z.union([ z.lazy(() => ConsentTypeSchema), z.lazy(() => EnumConsentTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isRequired: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  legalText: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  formSchema: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  status: z.union([ z.lazy(() => ConsentTemplateStatusSchema), z.lazy(() => EnumConsentTemplateStatusFieldUpdateOperationsInputSchema) ]).optional(),
  version: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  effectiveDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  retiredDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isGlobal: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  versionConsents: z.lazy(() => TestCatalogVersionConsentUpdateManyWithoutConsentTemplateNestedInputSchema).optional(),
  auditLogs: z.lazy(() => ConsentAuditLogUpdateManyWithoutConsentTemplateNestedInputSchema).optional(),
});

export default ConsentTemplateUpdateWithoutLabOrderConsentsInputSchema;
