import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationIncludeSchema } from '../inputTypeSchemas/OrganizationIncludeSchema'
import { OrganizationWhereInputSchema } from '../inputTypeSchemas/OrganizationWhereInputSchema'
import { OrganizationOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrganizationOrderByWithRelationInputSchema'
import { OrganizationWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationWhereUniqueInputSchema'
import { OrganizationScalarFieldEnumSchema } from '../inputTypeSchemas/OrganizationScalarFieldEnumSchema'
import { LabOrderFindManyArgsSchema } from "../outputTypeSchemas/LabOrderFindManyArgsSchema"
import { OrganizationFavoriteTestFindManyArgsSchema } from "../outputTypeSchemas/OrganizationFavoriteTestFindManyArgsSchema"
import { PatientOrganizationFindManyArgsSchema } from "../outputTypeSchemas/PatientOrganizationFindManyArgsSchema"
import { ProviderOrganizationFindManyArgsSchema } from "../outputTypeSchemas/ProviderOrganizationFindManyArgsSchema"
import { OrganizationEndpointFindManyArgsSchema } from "../outputTypeSchemas/OrganizationEndpointFindManyArgsSchema"
import { UserIdentityFindManyArgsSchema } from "../outputTypeSchemas/UserIdentityFindManyArgsSchema"
import { OrderFormSectionFindManyArgsSchema } from "../outputTypeSchemas/OrderFormSectionFindManyArgsSchema"
import { OrderFormTemplateFindManyArgsSchema } from "../outputTypeSchemas/OrderFormTemplateFindManyArgsSchema"
import { OrganizationCountOutputTypeArgsSchema } from "../outputTypeSchemas/OrganizationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganizationSelectSchema: z.ZodType<Prisma.OrganizationSelect> = z.object({
  id: z.boolean().optional(),
  href: z.boolean().optional(),
  parentId: z.boolean().optional(),
  level: z.boolean().optional(),
  parentOrgName: z.boolean().optional(),
  orgName: z.boolean().optional(),
  orgType: z.boolean().optional(),
  orgSpecialty: z.boolean().optional(),
  orgAddress: z.boolean().optional(),
  orgCity: z.boolean().optional(),
  orgState: z.boolean().optional(),
  orgZip: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  labOrders: z.union([z.boolean(),z.lazy(() => LabOrderFindManyArgsSchema)]).optional(),
  organizationFavoriteTests: z.union([z.boolean(),z.lazy(() => OrganizationFavoriteTestFindManyArgsSchema)]).optional(),
  patientOrganizations: z.union([z.boolean(),z.lazy(() => PatientOrganizationFindManyArgsSchema)]).optional(),
  providerOrganizations: z.union([z.boolean(),z.lazy(() => ProviderOrganizationFindManyArgsSchema)]).optional(),
  organizationEndpoints: z.union([z.boolean(),z.lazy(() => OrganizationEndpointFindManyArgsSchema)]).optional(),
  userIdentities: z.union([z.boolean(),z.lazy(() => UserIdentityFindManyArgsSchema)]).optional(),
  orderFormSections: z.union([z.boolean(),z.lazy(() => OrderFormSectionFindManyArgsSchema)]).optional(),
  orderFormTemplates: z.union([z.boolean(),z.lazy(() => OrderFormTemplateFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrganizationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrganizationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrganizationFindFirstOrThrowArgs> = z.object({
  select: OrganizationSelectSchema.optional(),
  include: z.lazy(() => OrganizationIncludeSchema).optional(),
  where: OrganizationWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationOrderByWithRelationInputSchema.array(), OrganizationOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationScalarFieldEnumSchema, OrganizationScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OrganizationFindFirstOrThrowArgsSchema;
