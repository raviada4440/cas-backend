import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProviderOrganizationCreateManyOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationCreateManyOrganizationInput> = z.strictObject({
  id: z.string().optional(),
  providerId: z.string(),
  providerNpi: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  parentOrgName: z.string().optional().nullable(),
  orgName: z.string().optional().nullable(),
  orgAddress: z.string().optional().nullable(),
  orgCity: z.string().optional().nullable(),
  orgState: z.string().optional().nullable(),
  orgZip: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default ProviderOrganizationCreateManyOrganizationInputSchema;
