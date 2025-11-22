import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedManyWithoutOrganizationInputSchema } from './LabOrderCreateNestedManyWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestCreateNestedManyWithoutOrganizationInputSchema } from './OrganizationFavoriteTestCreateNestedManyWithoutOrganizationInputSchema';
import { PatientOrganizationCreateNestedManyWithoutOrganizationInputSchema } from './PatientOrganizationCreateNestedManyWithoutOrganizationInputSchema';
import { OrganizationEndpointCreateNestedManyWithoutOrganizationInputSchema } from './OrganizationEndpointCreateNestedManyWithoutOrganizationInputSchema';
import { UserIdentityCreateNestedManyWithoutOrganizationInputSchema } from './UserIdentityCreateNestedManyWithoutOrganizationInputSchema';
import { OrderFormSectionCreateNestedManyWithoutOrganizationInputSchema } from './OrderFormSectionCreateNestedManyWithoutOrganizationInputSchema';
import { OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema } from './OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationCreateWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationCreateWithoutProviderOrganizationsInput> = z.strictObject({
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
  organizationEndpoints: z.lazy(() => OrganizationEndpointCreateNestedManyWithoutOrganizationInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityCreateNestedManyWithoutOrganizationInputSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionCreateNestedManyWithoutOrganizationInputSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateCreateNestedManyWithoutOrganizationInputSchema).optional(),
});

export default OrganizationCreateWithoutProviderOrganizationsInputSchema;
