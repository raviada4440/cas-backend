import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProviderOrderByWithRelationInputSchema } from './ProviderOrderByWithRelationInputSchema';
import { PatientOrderByWithRelationInputSchema } from './PatientOrderByWithRelationInputSchema';
import { OrganizationOrderByWithRelationInputSchema } from './OrganizationOrderByWithRelationInputSchema';
import { TestCatalogVersionOrderByWithRelationInputSchema } from './TestCatalogVersionOrderByWithRelationInputSchema';
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from './TestCatalogConfigurationOrderByWithRelationInputSchema';
import { LabOrderByWithRelationInputSchema } from './LabOrderByWithRelationInputSchema';
import { LabOrderAttachmentOrderByRelationAggregateInputSchema } from './LabOrderAttachmentOrderByRelationAggregateInputSchema';
import { LabOrderBillingOrderByRelationAggregateInputSchema } from './LabOrderBillingOrderByRelationAggregateInputSchema';
import { LabOrderIcdOrderByRelationAggregateInputSchema } from './LabOrderIcdOrderByRelationAggregateInputSchema';
import { LabOrderSpecimenOrderByRelationAggregateInputSchema } from './LabOrderSpecimenOrderByRelationAggregateInputSchema';
import { LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema } from './LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema';
import { LabOrderStatusOrderByRelationAggregateInputSchema } from './LabOrderStatusOrderByRelationAggregateInputSchema';
import { LabOrderTestOrderByRelationAggregateInputSchema } from './LabOrderTestOrderByRelationAggregateInputSchema';
import { LabOrderConsentOrderByRelationAggregateInputSchema } from './LabOrderConsentOrderByRelationAggregateInputSchema';
import { LabOrderFormOrderByRelationAggregateInputSchema } from './LabOrderFormOrderByRelationAggregateInputSchema';

export const LabOrderOrderByWithRelationInputSchema: z.ZodType<Prisma.LabOrderOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  orderNumber: z.lazy(() => SortOrderSchema).optional(),
  accessionNumber: z.lazy(() => SortOrderSchema).optional(),
  testVersionId: z.lazy(() => SortOrderSchema).optional(),
  testConfigurationId: z.lazy(() => SortOrderSchema).optional(),
  labId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderingProviderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  treatingProviderId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientMRN: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientMobile: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientEmail: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  organizationId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalDetails: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalPresentation: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalTesting: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  riskFlags: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  riskFlagNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  clinicalAttachments: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderDate: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orderNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orderingProvider: z.lazy(() => ProviderOrderByWithRelationInputSchema).optional(),
  treatingProvider: z.lazy(() => ProviderOrderByWithRelationInputSchema).optional(),
  patient: z.lazy(() => PatientOrderByWithRelationInputSchema).optional(),
  organization: z.lazy(() => OrganizationOrderByWithRelationInputSchema).optional(),
  version: z.lazy(() => TestCatalogVersionOrderByWithRelationInputSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationOrderByWithRelationInputSchema).optional(),
  lab: z.lazy(() => LabOrderByWithRelationInputSchema).optional(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentOrderByRelationAggregateInputSchema).optional(),
  labOrderBilling: z.lazy(() => LabOrderBillingOrderByRelationAggregateInputSchema).optional(),
  labOrderIcds: z.lazy(() => LabOrderIcdOrderByRelationAggregateInputSchema).optional(),
  labOrderSpecimens: z.lazy(() => LabOrderSpecimenOrderByRelationAggregateInputSchema).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema).optional(),
  labOrderStatuses: z.lazy(() => LabOrderStatusOrderByRelationAggregateInputSchema).optional(),
  labOrderTests: z.lazy(() => LabOrderTestOrderByRelationAggregateInputSchema).optional(),
  consents: z.lazy(() => LabOrderConsentOrderByRelationAggregateInputSchema).optional(),
  orderForms: z.lazy(() => LabOrderFormOrderByRelationAggregateInputSchema).optional(),
});

export default LabOrderOrderByWithRelationInputSchema;
