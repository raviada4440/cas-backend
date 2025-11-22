import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProviderUpdateOneWithoutOrderingProviderLabOrdersNestedInputSchema } from './ProviderUpdateOneWithoutOrderingProviderLabOrdersNestedInputSchema';
import { ProviderUpdateOneWithoutTreatingProviderLabOrdersNestedInputSchema } from './ProviderUpdateOneWithoutTreatingProviderLabOrdersNestedInputSchema';
import { PatientUpdateOneWithoutLabOrdersNestedInputSchema } from './PatientUpdateOneWithoutLabOrdersNestedInputSchema';
import { OrganizationUpdateOneWithoutLabOrdersNestedInputSchema } from './OrganizationUpdateOneWithoutLabOrdersNestedInputSchema';
import { TestCatalogVersionUpdateOneRequiredWithoutLabOrdersNestedInputSchema } from './TestCatalogVersionUpdateOneRequiredWithoutLabOrdersNestedInputSchema';
import { TestCatalogConfigurationUpdateOneRequiredWithoutLabOrdersNestedInputSchema } from './TestCatalogConfigurationUpdateOneRequiredWithoutLabOrdersNestedInputSchema';
import { LabUpdateOneWithoutLabOrdersNestedInputSchema } from './LabUpdateOneWithoutLabOrdersNestedInputSchema';
import { LabOrderAttachmentUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderAttachmentUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderBillingUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderBillingUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderIcdUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderIcdUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderSpecimenUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderSpecimenUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderStatusUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderStatusUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderTestUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderTestUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderConsentUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderConsentUpdateManyWithoutLabOrderNestedInputSchema';
import { LabOrderFormUpdateManyWithoutLabOrderNestedInputSchema } from './LabOrderFormUpdateManyWithoutLabOrderNestedInputSchema';

export const LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  patientMRN: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientMobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientEmail: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
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
  orderingProvider: z.lazy(() => ProviderUpdateOneWithoutOrderingProviderLabOrdersNestedInputSchema).optional(),
  treatingProvider: z.lazy(() => ProviderUpdateOneWithoutTreatingProviderLabOrdersNestedInputSchema).optional(),
  patient: z.lazy(() => PatientUpdateOneWithoutLabOrdersNestedInputSchema).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutLabOrdersNestedInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionUpdateOneRequiredWithoutLabOrdersNestedInputSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationUpdateOneRequiredWithoutLabOrdersNestedInputSchema).optional(),
  lab: z.lazy(() => LabUpdateOneWithoutLabOrdersNestedInputSchema).optional(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderBilling: z.lazy(() => LabOrderBillingUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderStatuses: z.lazy(() => LabOrderStatusUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  consents: z.lazy(() => LabOrderConsentUpdateManyWithoutLabOrderNestedInputSchema).optional(),
  orderForms: z.lazy(() => LabOrderFormUpdateManyWithoutLabOrderNestedInputSchema).optional(),
});

export default LabOrderUpdateWithoutLabOrderSponsoredTestConsentsInputSchema;
