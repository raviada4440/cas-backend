import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateNestedOneWithoutProviderOrganizationsInputSchema } from './ProviderCreateNestedOneWithoutProviderOrganizationsInputSchema';

export const ProviderOrganizationCreateWithoutOrganizationInputSchema: z.ZodType<Prisma.ProviderOrganizationCreateWithoutOrganizationInput> = z.strictObject({
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
  provider: z.lazy(() => ProviderCreateNestedOneWithoutProviderOrganizationsInputSchema),
});

export default ProviderOrganizationCreateWithoutOrganizationInputSchema;
