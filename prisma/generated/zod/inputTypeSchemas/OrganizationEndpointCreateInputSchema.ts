import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutOrganizationEndpointsInputSchema } from './OrganizationCreateNestedOneWithoutOrganizationEndpointsInputSchema';

export const OrganizationEndpointCreateInputSchema: z.ZodType<Prisma.OrganizationEndpointCreateInput> = z.strictObject({
  id: z.string().optional(),
  orgName: z.string().optional().nullable(),
  ehrVendor: z.string().optional().nullable(),
  fhirVersion: z.string().optional().nullable(),
  endpoint: z.string().optional().nullable(),
  issuer: z.string().optional().nullable(),
  clientId: z.string().optional().nullable(),
  clientSecret: z.string().optional().nullable(),
  authorizationEndpoint: z.string().optional().nullable(),
  tokenEndpoint: z.string().optional().nullable(),
  isActive: z.boolean().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutOrganizationEndpointsInputSchema).optional(),
});

export default OrganizationEndpointCreateInputSchema;
