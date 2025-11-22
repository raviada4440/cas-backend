import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OrganizationEndpointUncheckedCreateInputSchema: z.ZodType<Prisma.OrganizationEndpointUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  organizationId: z.string().optional().nullable(),
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
});

export default OrganizationEndpointUncheckedCreateInputSchema;
