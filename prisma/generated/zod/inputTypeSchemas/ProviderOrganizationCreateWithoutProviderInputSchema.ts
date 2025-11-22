import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutProviderOrganizationsInputSchema } from './OrganizationCreateNestedOneWithoutProviderOrganizationsInputSchema';

export const ProviderOrganizationCreateWithoutProviderInputSchema: z.ZodType<Prisma.ProviderOrganizationCreateWithoutProviderInput> = z.strictObject({
  id: z.string().optional(),
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
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutProviderOrganizationsInputSchema),
});

export default ProviderOrganizationCreateWithoutProviderInputSchema;
