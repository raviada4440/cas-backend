import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ProviderCreateNestedOneWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateNestedOneWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderCreateNestedOneWithoutTreatingProviderLabOrdersInputSchema } from './ProviderCreateNestedOneWithoutTreatingProviderLabOrdersInputSchema';
import { PatientCreateNestedOneWithoutLabOrdersInputSchema } from './PatientCreateNestedOneWithoutLabOrdersInputSchema';
import { OrganizationCreateNestedOneWithoutLabOrdersInputSchema } from './OrganizationCreateNestedOneWithoutLabOrdersInputSchema';
import { TestCatalogVersionCreateNestedOneWithoutLabOrdersInputSchema } from './TestCatalogVersionCreateNestedOneWithoutLabOrdersInputSchema';
import { TestCatalogConfigurationCreateNestedOneWithoutLabOrdersInputSchema } from './TestCatalogConfigurationCreateNestedOneWithoutLabOrdersInputSchema';
import { LabCreateNestedOneWithoutLabOrdersInputSchema } from './LabCreateNestedOneWithoutLabOrdersInputSchema';
import { LabOrderAttachmentCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderBillingCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderBillingCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderIcdCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderIcdCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderSpecimenCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderStatusCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderStatusCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderTestCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderTestCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderConsentCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderConsentCreateNestedManyWithoutLabOrderInputSchema';
import { LabOrderFormCreateNestedManyWithoutLabOrderInputSchema } from './LabOrderFormCreateNestedManyWithoutLabOrderInputSchema';

export const LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema: z.ZodType<Prisma.LabOrderCreateWithoutLabOrderSponsoredTestConsentsInput> = z.strictObject({
  id: z.string().optional(),
  orderNumber: z.number().optional(),
  accessionNumber: z.number().optional(),
  patientMRN: z.string().optional().nullable(),
  patientMobile: z.string().optional().nullable(),
  patientEmail: z.string().optional().nullable(),
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
  orderingProvider: z.lazy(() => ProviderCreateNestedOneWithoutOrderingProviderLabOrdersInputSchema).optional(),
  treatingProvider: z.lazy(() => ProviderCreateNestedOneWithoutTreatingProviderLabOrdersInputSchema).optional(),
  patient: z.lazy(() => PatientCreateNestedOneWithoutLabOrdersInputSchema).optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutLabOrdersInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutLabOrdersInputSchema),
  configuration: z.lazy(() => TestCatalogConfigurationCreateNestedOneWithoutLabOrdersInputSchema),
  lab: z.lazy(() => LabCreateNestedOneWithoutLabOrdersInputSchema).optional(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderBilling: z.lazy(() => LabOrderBillingCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderStatuses: z.lazy(() => LabOrderStatusCreateNestedManyWithoutLabOrderInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestCreateNestedManyWithoutLabOrderInputSchema).optional(),
  consents: z.lazy(() => LabOrderConsentCreateNestedManyWithoutLabOrderInputSchema).optional(),
  orderForms: z.lazy(() => LabOrderFormCreateNestedManyWithoutLabOrderInputSchema).optional(),
});

export default LabOrderCreateWithoutLabOrderSponsoredTestConsentsInputSchema;
