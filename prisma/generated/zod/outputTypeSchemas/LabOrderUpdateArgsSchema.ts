import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderIncludeSchema } from '../inputTypeSchemas/LabOrderIncludeSchema'
import { LabOrderUpdateInputSchema } from '../inputTypeSchemas/LabOrderUpdateInputSchema'
import { LabOrderUncheckedUpdateInputSchema } from '../inputTypeSchemas/LabOrderUncheckedUpdateInputSchema'
import { LabOrderWhereUniqueInputSchema } from '../inputTypeSchemas/LabOrderWhereUniqueInputSchema'
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"
import { PatientArgsSchema } from "../outputTypeSchemas/PatientArgsSchema"
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { LabArgsSchema } from "../outputTypeSchemas/LabArgsSchema"
import { LabOrderAttachmentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderAttachmentFindManyArgsSchema"
import { LabOrderBillingFindManyArgsSchema } from "../outputTypeSchemas/LabOrderBillingFindManyArgsSchema"
import { LabOrderIcdFindManyArgsSchema } from "../outputTypeSchemas/LabOrderIcdFindManyArgsSchema"
import { LabOrderSpecimenFindManyArgsSchema } from "../outputTypeSchemas/LabOrderSpecimenFindManyArgsSchema"
import { LabOrderSponsoredTestConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderSponsoredTestConsentFindManyArgsSchema"
import { LabOrderStatusFindManyArgsSchema } from "../outputTypeSchemas/LabOrderStatusFindManyArgsSchema"
import { LabOrderTestFindManyArgsSchema } from "../outputTypeSchemas/LabOrderTestFindManyArgsSchema"
import { LabOrderConsentFindManyArgsSchema } from "../outputTypeSchemas/LabOrderConsentFindManyArgsSchema"
import { LabOrderFormFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFormFindManyArgsSchema"
import { LabOrderCountOutputTypeArgsSchema } from "../outputTypeSchemas/LabOrderCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LabOrderSelectSchema: z.ZodType<Prisma.LabOrderSelect> = z.object({
  id: z.boolean().optional(),
  orderNumber: z.boolean().optional(),
  accessionNumber: z.boolean().optional(),
  testVersionId: z.boolean().optional(),
  testConfigurationId: z.boolean().optional(),
  labId: z.boolean().optional(),
  orderingProviderId: z.boolean().optional(),
  treatingProviderId: z.boolean().optional(),
  patientId: z.boolean().optional(),
  patientMRN: z.boolean().optional(),
  patientMobile: z.boolean().optional(),
  patientEmail: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  clinicalNotes: z.boolean().optional(),
  clinicalDetails: z.boolean().optional(),
  clinicalPresentation: z.boolean().optional(),
  clinicalTesting: z.boolean().optional(),
  riskFlags: z.boolean().optional(),
  riskFlagNotes: z.boolean().optional(),
  clinicalAttachments: z.boolean().optional(),
  orderDate: z.boolean().optional(),
  orderNotes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orderingProvider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
  treatingProvider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
  patient: z.union([z.boolean(),z.lazy(() => PatientArgsSchema)]).optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  lab: z.union([z.boolean(),z.lazy(() => LabArgsSchema)]).optional(),
  labOrderAttachments: z.union([z.boolean(),z.lazy(() => LabOrderAttachmentFindManyArgsSchema)]).optional(),
  labOrderBilling: z.union([z.boolean(),z.lazy(() => LabOrderBillingFindManyArgsSchema)]).optional(),
  labOrderIcds: z.union([z.boolean(),z.lazy(() => LabOrderIcdFindManyArgsSchema)]).optional(),
  labOrderSpecimens: z.union([z.boolean(),z.lazy(() => LabOrderSpecimenFindManyArgsSchema)]).optional(),
  labOrderSponsoredTestConsents: z.union([z.boolean(),z.lazy(() => LabOrderSponsoredTestConsentFindManyArgsSchema)]).optional(),
  labOrderStatuses: z.union([z.boolean(),z.lazy(() => LabOrderStatusFindManyArgsSchema)]).optional(),
  labOrderTests: z.union([z.boolean(),z.lazy(() => LabOrderTestFindManyArgsSchema)]).optional(),
  consents: z.union([z.boolean(),z.lazy(() => LabOrderConsentFindManyArgsSchema)]).optional(),
  orderForms: z.union([z.boolean(),z.lazy(() => LabOrderFormFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LabOrderCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LabOrderUpdateArgsSchema: z.ZodType<Prisma.LabOrderUpdateArgs> = z.object({
  select: LabOrderSelectSchema.optional(),
  include: z.lazy(() => LabOrderIncludeSchema).optional(),
  data: z.union([ LabOrderUpdateInputSchema, LabOrderUncheckedUpdateInputSchema ]),
  where: LabOrderWhereUniqueInputSchema, 
}).strict();

export default LabOrderUpdateArgsSchema;
