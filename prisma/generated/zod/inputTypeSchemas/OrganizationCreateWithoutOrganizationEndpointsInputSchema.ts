import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedManyWithoutOrganizationInputSchema } from './LabOrderCreateNestedManyWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateNestedManyWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateNestedManyWithoutOrganizationInputSchema';
import { PatientOrganizationCreateNestedManyWithoutOrganizationInputSchema } from './PatientOrganizationCreateNestedManyWithoutOrganizationInputSchema';
import { ProviderOrganizationCreateNestedManyWithoutOrganizationInputSchema } from './ProviderOrganizationCreateNestedManyWithoutOrganizationInputSchema';
import { UserIdentityCreateNestedManyWithoutOrganizationInputSchema } from './UserIdentityCreateNestedManyWithoutOrganizationInputSchema';
import { OrderFormSectionCreateNestedManyWithoutOrganizationInputSchema } from './OrderFormSectionCreateNestedManyWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema } from './OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateWithoutOrganizationEndpointsInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutOrganizationEndpointsInput> = z.strictObject({
  id: z.string().optional(),
  href: z.string().optional().nullable(),
  parentId: z.string().optional().nullable(),
  level: z.number().optional().nullable(),
  parentOrgName: z.string().optional().nullable(),
  orgName: z.string().optional().nullable(),
  orgType: z.string().optional().nullable(),
  orgSpecialty: z.string().optional().nullable(),
  orgAddress: z.string().optional().nullable(),
  orgCity: z.string().optional().nullable(),
  orgState: z.string().optional().nullable(),
  orgZip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  labOrders: z.lazy(() => LabOrderCreateNestedManyWithoutOrganizationInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestCreateNestedManyWithoutOrganizationInputSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationCreateNestedManyWithoutOrganizationInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityCreateNestedManyWithoutOrganizationInputSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionCreateNestedManyWithoutOrganizationInputSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema).optional(),
});

export default OrganizationCreateWithoutOrganizationEndpointsInputSchema;
