import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { ProviderNullableScalarRelationFilterSchema } from './ProviderNullableScalarRelationFilterSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { PatientNullableScalarRelationFilterSchema } from './PatientNullableScalarRelationFilterSchema';
import { PatientWhereInputSchema } from './PatientWhereInputSchema';
import { OrganizationNullableScalarRelationFilterSchema } from './OrganizationNullableScalarRelationFilterSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { TestCatalogConfigurationScalarRelationFilterSchema } from './TestCatalogConfigurationScalarRelationFilterSchema';
import { TestCatalogConfigurationWhereInputSchema } from './TestCatalogConfigurationWhereInputSchema';
import { LabNullableScalarRelationFilterSchema } from './LabNullableScalarRelationFilterSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabOrderAttachmentListRelationFilterSchema } from './LabOrderAttachmentListRelationFilterSchema';
import { LabOrderBillingListRelationFilterSchema } from './LabOrderBillingListRelationFilterSchema';
import { LabOrderIcdListRelationFilterSchema } from './LabOrderIcdListRelationFilterSchema';
import { LabOrderSpecimenListRelationFilterSchema } from './LabOrderSpecimenListRelationFilterSchema';
import { LabOrderSponsoredTestConsentListRelationFilterSchema } from './LabOrderSponsoredTestConsentListRelationFilterSchema';
import { LabOrderStatusListRelationFilterSchema } from './LabOrderStatusListRelationFilterSchema';
import { LabOrderTestListRelationFilterSchema } from './LabOrderTestListRelationFilterSchema';
import { LabOrderConsentListRelationFilterSchema } from './LabOrderConsentListRelationFilterSchema';
import { LabOrderFormListRelationFilterSchema } from './LabOrderFormListRelationFilterSchema';

export const LabOrderWhereUniqueInputSchema: z.ZodType<Prisma.LabOrderWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    orderNumber: z.number(),
    accessionNumber: z.number(),
  }),
  z.object({
    id: z.string(),
    orderNumber: z.number(),
  }),
  z.object({
    id: z.string(),
    accessionNumber: z.number(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    orderNumber: z.number(),
    accessionNumber: z.number(),
  }),
  z.object({
    orderNumber: z.number(),
  }),
  z.object({
    accessionNumber: z.number(),
  }),
])
.and(z.strictObject({
  id: z.string().optional(),
  orderNumber: z.number().optional(),
  accessionNumber: z.number().optional(),
  AND: z.union([ z.lazy(() => LabOrderWhereInputSchema), z.lazy(() => LabOrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderWhereInputSchema), z.lazy(() => LabOrderWhereInputSchema).array() ]).optional(),
  testVersionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  testConfigurationId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  orderingProviderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  treatingProviderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  patientId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  patientMRN: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientMobile: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientEmail: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  organizationId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalDetails: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalPresentation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalTesting: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  riskFlags: z.lazy(() => JsonNullableFilterSchema).optional(),
  riskFlagNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  clinicalAttachments: z.lazy(() => JsonNullableFilterSchema).optional(),
  orderDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  orderNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  orderingProvider: z.union([ z.lazy(() => ProviderNullableScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional().nullable(),
  treatingProvider: z.union([ z.lazy(() => ProviderNullableScalarRelationFilterSchema), z.lazy(() => ProviderWhereInputSchema) ]).optional().nullable(),
  patient: z.union([ z.lazy(() => PatientNullableScalarRelationFilterSchema), z.lazy(() => PatientWhereInputSchema) ]).optional().nullable(),
  organization: z.union([ z.lazy(() => OrganizationNullableScalarRelationFilterSchema), z.lazy(() => OrganizationWhereInputSchema) ]).optional().nullable(),
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  configuration: z.union([ z.lazy(() => TestCatalogConfigurationScalarRelationFilterSchema), z.lazy(() => TestCatalogConfigurationWhereInputSchema) ]).optional(),
  lab: z.union([ z.lazy(() => LabNullableScalarRelationFilterSchema), z.lazy(() => LabWhereInputSchema) ]).optional().nullable(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentListRelationFilterSchema).optional(),
  labOrderBilling: z.lazy(() => LabOrderBillingListRelationFilterSchema).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdListRelationFilterSchema).optional(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenListRelationFilterSchema).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentListRelationFilterSchema).optional(),
  labOrderStatuses: z.lazy(() => LabOrderStatusListRelationFilterSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestListRelationFilterSchema).optional(),
  consents: z.lazy(() => LabOrderConsentListRelationFilterSchema).optional(),
  orderForms: z.lazy(() => LabOrderFormListRelationFilterSchema).optional(),
}));

export default LabOrderWhereUniqueInputSchema;
