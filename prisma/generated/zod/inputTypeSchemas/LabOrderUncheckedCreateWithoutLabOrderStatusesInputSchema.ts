import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { LabOrderAttachmentUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderBillingUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderBillingUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderIcdUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderIcdUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderTestUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderTestUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderFormUncheckedCreateNestedManyWithoutLabOrderInputSchema';

export const LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateWithoutLabOrderStatusesInput> = z.strictObject({
  id: z.string().optional(),
  orderNumber: z.number().optional(),
  accessionNumber: z.number().optional(),
  testVersionId: z.string(),
  testConfigurationId: z.string(),
  labId: z.string().optional().nullable(),
  orderingProviderId: z.string().optional().nullable(),
  treatingProviderId: z.string().optional().nullable(),
  patientId: z.string().optional().nullable(),
  patientMRN: z.string().optional().nullable(),
  patientMobile: z.string().optional().nullable(),
  patientEmail: z.string().optional().nullable(),
  organizationId: z.string().optional().nullable(),
  clinicalNotes: z.string().optional().nullable(),
  clinicalDetails: z.string().optional().nullable(),
  clinicalPresentation: z.string().optional().nullable(),
  clinicalTesting: z.string().optional().nullable(),
  riskFlags: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  riskFlagNotes: z.string().optional().nullable(),
  clinicalAttachments: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  orderDate: z.date().optional().nullable(),
  orderNotes: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderBilling: z.lazy(() => LabOrderBillingUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  consents: z.lazy(() => LabOrderConsentUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
  orderForms: z.lazy(() => LabOrderFormUncheckedCreateNestedManyWithoutLabOrderInputSchema).optional(),
});

export default LabOrderUncheckedCreateWithoutLabOrderStatusesInputSchema;
