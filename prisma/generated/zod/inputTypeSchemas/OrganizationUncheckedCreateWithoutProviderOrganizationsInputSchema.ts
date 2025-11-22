import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './LabOrderUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { OrganizationFavoriteTestUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { PatientOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './PatientOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { OrganizationEndpointUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './OrganizationEndpointUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { UserIdentityUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './UserIdentityUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { OrderFormSectionUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './OrderFormSectionUncheckedCreateNestedManyWithoutOrganizationInputSchema';
import { OrderFormTemplateUncheckedCreateNestedManyWithoutOrganizationInputSchema } from './OrderFormTemplateUncheckedCreateNestedManyWithoutOrganizationInputSchema';

export const OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUncheckedCreateWithoutProviderOrganizationsInput> = z.strictObject({
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
  labOrders: z.lazy(() => LabOrderUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateUncheckedCreateNestedManyWithoutOrganizationInputSchema).optional(),
});

export default OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema;
