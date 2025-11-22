import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderAttachmentUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderAttachmentUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderBillingUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderBillingUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderIcdUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderIcdUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderStatusUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderStatusUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderTestUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderTestUncheckedUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderFormUncheckedUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderFormUncheckedUpdateManyWithoutLabOrderNestedInputSchema';

export const LabOrderUncheckedUpdateWithoutConsentsInputSchema: z.ZodType<Prisma.LabOrderUncheckedUpdateWithoutConsentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  orderNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  accessionNumber: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  testVersionId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  testConfigurationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderingProviderId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  treatingProviderId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientMRN: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  organizationId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clinicalNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clinicalDetails: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clinicalPresentation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clinicalTesting: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  riskFlags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  riskFlagNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  clinicalAttachments: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  orderDate: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orderNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderBilling: z.lazy(() => LabOrderBillingUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderStatuses: z.lazy(() => LabOrderStatusUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  orderForms: z.lazy(() => LabOrderFormUncheckedUpdateManyWithoutLabOrderNestedInputSchema).optional(),
});

export default LabOrderUncheckedUpdateWithoutConsentsInputSchema;
