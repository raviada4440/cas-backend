import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderListRelationFilterSchema } from './LabOrderListRelationFilterSchema';
import { OrganizationFavoriteTestListRelationFilterSchema } from './OrganizationFavoriteTestListRelationFilterSchema';
import { PatientOrganizationListRelationFilterSchema } from './PatientOrganizationListRelationFilterSchema';
import { ProviderOrganizationListRelationFilterSchema } from './ProviderOrganizationListRelationFilterSchema';
import { OrganizationEndpointListRelationFilterSchema } from './OrganizationEndpointListRelationFilterSchema';
import { UserIdentityListRelationFilterSchema } from './UserIdentityListRelationFilterSchema';
import { OrderFormSectionListRelationFilterSchema } from './OrderFormSectionListRelationFilterSchema';
import { OrderFormTemplateListRelationFilterSchema } from './OrderFormTemplateListRelationFilterSchema';

export const OrganizationWhereUniqueInputSchema: z.ZodType<Prisma.OrganizationWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => OrganizationWhereInputSchema), z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrganizationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrganizationWhereInputSchema), z.lazy(() => OrganizationWhereInputSchema).array() ]).optional(),
  href: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  parentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  parentOrgName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgSpecialty: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgAddress: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgCity: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgState: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orgZip: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrders: z.lazy(() => LabOrderListRelationFilterSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestListRelationFilterSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationListRelationFilterSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationListRelationFilterSchema).optional(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointListRelationFilterSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityListRelationFilterSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionListRelationFilterSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateListRelationFilterSchema).optional(),
}));

export default OrganizationWhereUniqueInputSchema;
