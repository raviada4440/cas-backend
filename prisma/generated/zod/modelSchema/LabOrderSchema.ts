import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import type { JsonValueType } from '../inputTypeSchemas/JsonValueSchema';
import { ProviderWithRelationsSchema, ProviderPartialWithRelationsSchema } from './ProviderSchema'
import type { ProviderWithRelations, ProviderPartialWithRelations } from './ProviderSchema'
import { PatientWithRelationsSchema, PatientPartialWithRelationsSchema } from './PatientSchema'
import type { PatientWithRelations, PatientPartialWithRelations } from './PatientSchema'
import { OrganizationWithRelationsSchema, OrganizationPartialWithRelationsSchema } from './OrganizationSchema'
import type { OrganizationWithRelations, OrganizationPartialWithRelations } from './OrganizationSchema'
import { TestCatalogVersionWithRelationsSchema, TestCatalogVersionPartialWithRelationsSchema } from './TestCatalogVersionSchema'
import type { TestCatalogVersionWithRelations, TestCatalogVersionPartialWithRelations } from './TestCatalogVersionSchema'
import { TestCatalogConfigurationWithRelationsSchema, TestCatalogConfigurationPartialWithRelationsSchema } from './TestCatalogConfigurationSchema'
import type { TestCatalogConfigurationWithRelations, TestCatalogConfigurationPartialWithRelations } from './TestCatalogConfigurationSchema'
import { LabWithRelationsSchema, LabPartialWithRelationsSchema } from './LabSchema'
import type { LabWithRelations, LabPartialWithRelations } from './LabSchema'
import { LabOrderAttachmentWithRelationsSchema, LabOrderAttachmentPartialWithRelationsSchema } from './LabOrderAttachmentSchema'
import type { LabOrderAttachmentWithRelations, LabOrderAttachmentPartialWithRelations } from './LabOrderAttachmentSchema'
import { LabOrderBillingWithRelationsSchema, LabOrderBillingPartialWithRelationsSchema } from './LabOrderBillingSchema'
import type { LabOrderBillingWithRelations, LabOrderBillingPartialWithRelations } from './LabOrderBillingSchema'
import { LabOrderIcdWithRelationsSchema, LabOrderIcdPartialWithRelationsSchema } from './LabOrderIcdSchema'
import type { LabOrderIcdWithRelations, LabOrderIcdPartialWithRelations } from './LabOrderIcdSchema'
import { LabOrderSpecimenWithRelationsSchema, LabOrderSpecimenPartialWithRelationsSchema } from './LabOrderSpecimenSchema'
import type { LabOrderSpecimenWithRelations, LabOrderSpecimenPartialWithRelations } from './LabOrderSpecimenSchema'
import { LabOrderSponsoredTestConsentWithRelationsSchema, LabOrderSponsoredTestConsentPartialWithRelationsSchema } from './LabOrderSponsoredTestConsentSchema'
import type { LabOrderSponsoredTestConsentWithRelations, LabOrderSponsoredTestConsentPartialWithRelations } from './LabOrderSponsoredTestConsentSchema'
import { LabOrderStatusWithRelationsSchema, LabOrderStatusPartialWithRelationsSchema } from './LabOrderStatusSchema'
import type { LabOrderStatusWithRelations, LabOrderStatusPartialWithRelations } from './LabOrderStatusSchema'
import { LabOrderTestWithRelationsSchema, LabOrderTestPartialWithRelationsSchema } from './LabOrderTestSchema'
import type { LabOrderTestWithRelations, LabOrderTestPartialWithRelations } from './LabOrderTestSchema'
import { LabOrderConsentWithRelationsSchema, LabOrderConsentPartialWithRelationsSchema } from './LabOrderConsentSchema'
import type { LabOrderConsentWithRelations, LabOrderConsentPartialWithRelations } from './LabOrderConsentSchema'
import { LabOrderFormWithRelationsSchema, LabOrderFormPartialWithRelationsSchema } from './LabOrderFormSchema'
import type { LabOrderFormWithRelations, LabOrderFormPartialWithRelations } from './LabOrderFormSchema'

/////////////////////////////////////////
// LAB ORDER SCHEMA
/////////////////////////////////////////

export const LabOrderSchema = z.object({
  id: z.string(),
  orderNumber: z.number(),
  accessionNumber: z.number(),
  testVersionId: z.string(),
  testConfigurationId: z.string(),
  labId: z.string().nullable(),
  orderingProviderId: z.string().nullable(),
  treatingProviderId: z.string().nullable(),
  patientId: z.string().nullable(),
  patientMRN: z.string().nullable(),
  patientMobile: z.string().nullable(),
  patientEmail: z.string().nullable(),
  organizationId: z.string().nullable(),
  clinicalNotes: z.string().nullable(),
  clinicalDetails: z.string().nullable(),
  clinicalPresentation: z.string().nullable(),
  clinicalTesting: z.string().nullable(),
  riskFlags: JsonValueSchema.nullable(),
  riskFlagNotes: z.string().nullable(),
  clinicalAttachments: JsonValueSchema.nullable(),
  orderDate: z.date().nullable(),
  orderNotes: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type LabOrder = z.infer<typeof LabOrderSchema>

/////////////////////////////////////////
// LAB ORDER PARTIAL SCHEMA
/////////////////////////////////////////

export const LabOrderPartialSchema = LabOrderSchema.partial()

export type LabOrderPartial = z.infer<typeof LabOrderPartialSchema>

/////////////////////////////////////////
// LAB ORDER RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderRelations = {
  orderingProvider?: ProviderWithRelations | null;
  treatingProvider?: ProviderWithRelations | null;
  patient?: PatientWithRelations | null;
  organization?: OrganizationWithRelations | null;
  version: TestCatalogVersionWithRelations;
  configuration: TestCatalogConfigurationWithRelations;
  lab?: LabWithRelations | null;
  labOrderAttachments: LabOrderAttachmentWithRelations[];
  labOrderBilling: LabOrderBillingWithRelations[];
  labOrderIcds: LabOrderIcdWithRelations[];
  labOrderSpecimens: LabOrderSpecimenWithRelations[];
  labOrderSponsoredTestConsents: LabOrderSponsoredTestConsentWithRelations[];
  labOrderStatuses: LabOrderStatusWithRelations[];
  labOrderTests: LabOrderTestWithRelations[];
  consents: LabOrderConsentWithRelations[];
  orderForms: LabOrderFormWithRelations[];
};

export type LabOrderWithRelations = Omit<z.infer<typeof LabOrderSchema>, "riskFlags" | "clinicalAttachments"> & {
  riskFlags?: JsonValueType | null;
  clinicalAttachments?: JsonValueType | null;
} & LabOrderRelations

export const LabOrderWithRelationsSchema: z.ZodType<LabOrderWithRelations> = LabOrderSchema.merge(z.object({
  orderingProvider: z.lazy(() => ProviderWithRelationsSchema).nullable(),
  treatingProvider: z.lazy(() => ProviderWithRelationsSchema).nullable(),
  patient: z.lazy(() => PatientWithRelationsSchema).nullable(),
  organization: z.lazy(() => OrganizationWithRelationsSchema).nullable(),
  version: z.lazy(() => TestCatalogVersionWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationWithRelationsSchema),
  lab: z.lazy(() => LabWithRelationsSchema).nullable(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentWithRelationsSchema).array(),
  labOrderBilling: z.lazy(() => LabOrderBillingWithRelationsSchema).array(),
  labOrderIcds: z.lazy(() => LabOrderIcdWithRelationsSchema).array(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenWithRelationsSchema).array(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentWithRelationsSchema).array(),
  labOrderStatuses: z.lazy(() => LabOrderStatusWithRelationsSchema).array(),
  labOrderTests: z.lazy(() => LabOrderTestWithRelationsSchema).array(),
  consents: z.lazy(() => LabOrderConsentWithRelationsSchema).array(),
  orderForms: z.lazy(() => LabOrderFormWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// LAB ORDER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type LabOrderPartialRelations = {
  orderingProvider?: ProviderPartialWithRelations | null;
  treatingProvider?: ProviderPartialWithRelations | null;
  patient?: PatientPartialWithRelations | null;
  organization?: OrganizationPartialWithRelations | null;
  version?: TestCatalogVersionPartialWithRelations;
  configuration?: TestCatalogConfigurationPartialWithRelations;
  lab?: LabPartialWithRelations | null;
  labOrderAttachments?: LabOrderAttachmentPartialWithRelations[];
  labOrderBilling?: LabOrderBillingPartialWithRelations[];
  labOrderIcds?: LabOrderIcdPartialWithRelations[];
  labOrderSpecimens?: LabOrderSpecimenPartialWithRelations[];
  labOrderSponsoredTestConsents?: LabOrderSponsoredTestConsentPartialWithRelations[];
  labOrderStatuses?: LabOrderStatusPartialWithRelations[];
  labOrderTests?: LabOrderTestPartialWithRelations[];
  consents?: LabOrderConsentPartialWithRelations[];
  orderForms?: LabOrderFormPartialWithRelations[];
};

export type LabOrderPartialWithRelations = Omit<z.infer<typeof LabOrderPartialSchema>, "riskFlags" | "clinicalAttachments"> & {
  riskFlags?: JsonValueType | null;
  clinicalAttachments?: JsonValueType | null;
} & LabOrderPartialRelations

export const LabOrderPartialWithRelationsSchema: z.ZodType<LabOrderPartialWithRelations> = LabOrderPartialSchema.merge(z.object({
  orderingProvider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
  treatingProvider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
  patient: z.lazy(() => PatientPartialWithRelationsSchema).nullable(),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentPartialWithRelationsSchema).array(),
  labOrderBilling: z.lazy(() => LabOrderBillingPartialWithRelationsSchema).array(),
  labOrderIcds: z.lazy(() => LabOrderIcdPartialWithRelationsSchema).array(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenPartialWithRelationsSchema).array(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentPartialWithRelationsSchema).array(),
  labOrderStatuses: z.lazy(() => LabOrderStatusPartialWithRelationsSchema).array(),
  labOrderTests: z.lazy(() => LabOrderTestPartialWithRelationsSchema).array(),
  consents: z.lazy(() => LabOrderConsentPartialWithRelationsSchema).array(),
  orderForms: z.lazy(() => LabOrderFormPartialWithRelationsSchema).array(),
})).partial()

export type LabOrderWithPartialRelations = Omit<z.infer<typeof LabOrderSchema>, "riskFlags" | "clinicalAttachments"> & {
  riskFlags?: JsonValueType | null;
  clinicalAttachments?: JsonValueType | null;
} & LabOrderPartialRelations

export const LabOrderWithPartialRelationsSchema: z.ZodType<LabOrderWithPartialRelations> = LabOrderSchema.merge(z.object({
  orderingProvider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
  treatingProvider: z.lazy(() => ProviderPartialWithRelationsSchema).nullable(),
  patient: z.lazy(() => PatientPartialWithRelationsSchema).nullable(),
  organization: z.lazy(() => OrganizationPartialWithRelationsSchema).nullable(),
  version: z.lazy(() => TestCatalogVersionPartialWithRelationsSchema),
  configuration: z.lazy(() => TestCatalogConfigurationPartialWithRelationsSchema),
  lab: z.lazy(() => LabPartialWithRelationsSchema).nullable(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentPartialWithRelationsSchema).array(),
  labOrderBilling: z.lazy(() => LabOrderBillingPartialWithRelationsSchema).array(),
  labOrderIcds: z.lazy(() => LabOrderIcdPartialWithRelationsSchema).array(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenPartialWithRelationsSchema).array(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentPartialWithRelationsSchema).array(),
  labOrderStatuses: z.lazy(() => LabOrderStatusPartialWithRelationsSchema).array(),
  labOrderTests: z.lazy(() => LabOrderTestPartialWithRelationsSchema).array(),
  consents: z.lazy(() => LabOrderConsentPartialWithRelationsSchema).array(),
  orderForms: z.lazy(() => LabOrderFormPartialWithRelationsSchema).array(),
}).partial())

export default LabOrderSchema;
