import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationEndpointIncludeSchema } from '../inputTypeSchemas/OrganizationEndpointIncludeSchema'
import { OrganizationEndpointUpdateInputSchema } from '../inputTypeSchemas/OrganizationEndpointUpdateInputSchema'
import { OrganizationEndpointUncheckedUpdateInputSchema } from '../inputTypeSchemas/OrganizationEndpointUncheckedUpdateInputSchema'
import { OrganizationEndpointWhereUniqueInputSchema } from '../inputTypeSchemas/OrganizationEndpointWhereUniqueInputSchema'
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

export const OrganizationEndpointUpdateArgsSchema: z.ZodType<Prisma.OrganizationEndpointUpdateArgs> = z.object({
  select: OrganizationEndpointSelectSchema.optional(),
  include: z.lazy(() => OrganizationEndpointIncludeSchema).optional(),
  data: z.union([ OrganizationEndpointUpdateInputSchema, OrganizationEndpointUncheckedUpdateInputSchema ]),
  where: OrganizationEndpointWhereUniqueInputSchema, 
}).strict();

export default OrganizationEndpointUpdateArgsSchema;
