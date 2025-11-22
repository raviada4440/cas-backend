import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointIncludeSchema } from '../inputTypeSchemas/OrganizationEndpointIncludeSchema'
import { OrganizationEndpointWhereInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereInputSchema'
import { OrganizationEndpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/OrganizationEndpointOrderByWithRelationInputSchema'
import { OrganizationEndpointWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereUniqueInputSchema'
import { OrganizationEndpointScalarFieldEnumSchema } from '../inputTypeSchemas/OrganizationEndpointScalarFieldEnumSchema'
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganizationEndpointSelectSchema: z.ZodType<Prisma.OrganizationEndpointSelect> = z.object({
  id: z.boolean().optional(),
  organizationId: z.boolean().optional(),
  orgName: z.boolean().optional(),
  ehrVendor: z.boolean().optional(),
  fhirVersion: z.boolean().optional(),
  endpoint: z.boolean().optional(),
  issuer: z.boolean().optional(),
  clientId: z.boolean().optional(),
  clientSecret: z.boolean().optional(),
  authorizationEndpoint: z.boolean().optional(),
  tokenEndpoint: z.boolean().optional(),
  isActive: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  organization: z.union([z.boolean(),z.lazy(() => OrganizationArgsSchema)]).optional(),
}).strict()

export const OrganizationEndpointFindFirstArgsSchema: z.ZodType<Prisma.OrganizationEndpointFindFirstArgs> = z.object({
  select: OrganizationEndpointSelectSchema.optional(),
  include: z.lazy(() => OrganizationEndpointIncludeSchema).optional(),
  where: OrganizationEndpointWhereInputSchema.optional(), 
  orderBy: z.union([ OrganizationEndpointOrderByWithRelationInputSchema.array(), OrganizationEndpointOrderByWithRelationInputSchema ]).optional(),
  cursor: OrganizationEndpointWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OrganizationEndpointScalarFieldEnumSchema, OrganizationEndpointScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default OrganizationEndpointFindFirstArgsSchema;
