import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { OrganizationFavoriteTestFindManyArgsSchema } from "../outputTypeSchemas/OrganizationFavoriteTestFindManyArgsSchema"
import { PatientOrganizationFindManyArgsSchema } from "../outputTypeSchemas/PatientOrganizationFindManyArgsSchema"
import { ProviderOrganizationFindManyArgsSchema } from "../outputTypeSchemas/ProviderOrganizationFindManyArgsSchema"
import { OrganizationEndpointFindManyArgsSchema } from "../outputTypeSchemas/OrganizationEndpointFindManyArgsSchema"
import { UserIdentityFindManyArgsSchema } from "../outputTypeSchemas/UserIdentityFindManyArgsSchema"
import { OrderFormSectionFindManyArgsSchema } from "../outputTypeSchemas/OrderFormSectionFindManyArgsSchema"
import { OrderFormTemplateFindManyArgsSchema } from "../outputTypeSchemas/OrderFormTemplateFindManyArgsSchema"
import { OrganizationCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrganizationCountOutputTypeArgsSchema"

export const OrganizationIncludeSchema: z.ZodType<Prisma.OrganizationInclude> = z.object({
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  organizationFavoriteTests: z.union([z.boolean(),z.lazy(() => OrganizationFavoriteTestFindManyArgsSchema)]).optional(),
  patientOrganizations: z.union([z.boolean(),z.lazy(() => PatientOrganizationFindManyArgsSchema)]).optional(),
  providerOrganizations: z.union([z.boolean(),z.lazy(() => ProviderOrganizationFindManyArgsSchema)]).optional(),
  organizationEndpoints: z.union([z.boolean(),z.lazy(() => OrganizationEndpointFindManyArgsSchema)]).optional(),
  userIdentities: z.union([z.boolean(),z.lazy(() => UserIdentityFindManyArgsSchema)]).optional(),
  orderFormSections: z.union([z.boolean(),z.lazy(() => OrderFormSectionFindManyArgsSchema)]).optional(),
  orderFormTemplates: z.union([z.boolean(),z.lazy(() => OrderFormTemplateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganizationCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default OrganizationIncludeSchema;
