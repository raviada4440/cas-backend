import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OrganizationArgsSchema } from "../outputTypeSchemas/OrganizationArgsSchema"

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

export default OrganizationEndpointSelectSchema;
