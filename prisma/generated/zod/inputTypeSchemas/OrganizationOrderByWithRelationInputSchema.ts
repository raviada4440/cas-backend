import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderOrderByRelationAggregateInputSchema } from './LabOrderOrderByRelationAggregateInputSchema';
import { OrganizationFavoriteTestOrderByRelationAggregateInputSchema } from './OrganizationFavoriteTestOrderByRelationAggregateInputSchema';
import { PatientOrganizationOrderByRelationAggregateInputSchema } from './PatientOrganizationOrderByRelationAggregateInputSchema';
import { ProviderOrganizationOrderByRelationAggregateInputSchema } from './ProviderOrganizationOrderByRelationAggregateInputSchema';
import { OrganizationEndpointOrderByRelationAggregateInputSchema } from './OrganizationEndpointOrderByRelationAggregateInputSchema';
import { UserIdentityOrderByRelationAggregateInputSchema } from './UserIdentityOrderByRelationAggregateInputSchema';
import { OrderFormSectionOrderByRelationAggregateInputSchema } from './OrderFormSectionOrderByRelationAggregateInputSchema';
import { OrderFormTemplateOrderByRelationAggregateInputSchema } from './OrderFormTemplateOrderByRelationAggregateInputSchema';

export const OrganizationOrderByWithRelationInputSchema: z.ZodType<Prisma.OrganizationOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  href: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentOrgName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgSpecialty: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgAddress: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgCity: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgState: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  orgZip: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  labOrders: z.lazy(() => LabOrderOrderByRelationAggregateInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestOrderByRelationAggregateInputSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationOrderByRelationAggregateInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationOrderByRelationAggregateInputSchema).optional(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointOrderByRelationAggregateInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityOrderByRelationAggregateInputSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionOrderByRelationAggregateInputSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateOrderByRelationAggregateInputSchema).optional(),
});

export default OrganizationOrderByWithRelationInputSchema;
