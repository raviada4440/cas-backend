import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateNestedManyWithoutOrderingProviderInputSchema } from './LabOrderCreateNestedManyWithoutOrderingProviderInputSchema';
import { UserAttributeCreateNestedOneWithoutProviderInputSchema } from './UserAttributeCreateNestedOneWithoutProviderInputSchema';
import { ProviderEducationCreateNestedManyWithoutProviderInputSchema } from './ProviderEducationCreateNestedManyWithoutProviderInputSchema';
import { ProviderFavoriteTestCreateNestedManyWithoutProviderInputSchema } from './ProviderFavoriteTestCreateNestedManyWithoutProviderInputSchema';
import { ProviderOrganizationCreateNestedManyWithoutProviderInputSchema } from './ProviderOrganizationCreateNestedManyWithoutProviderInputSchema';

export const ProviderCreateWithoutTreatingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderCreateWithoutTreatingProviderLabOrdersInput> = z.strictObject({
  id: z.string().optional(),
  href: z.string().optional().nullable(),
  npi: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  credentials: z.string().optional().nullable(),
  specialty: z.string().optional().nullable(),
  aboutme: z.string().optional().nullable(),
  gender: z.string().optional().nullable(),
  providerType: z.string().optional().nullable(),
  affiliation: z.string().optional().nullable(),
  proceduresAndResearch: z.string().optional().nullable(),
  specialInterests: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  orderingProviderLabOrders: z.lazy(() => LabOrderCreateNestedManyWithoutOrderingProviderInputSchema).optional(),
  userAttribute: z.lazy(() => UserAttributeCreateNestedOneWithoutProviderInputSchema).optional(),
  providerEducation: z.lazy(() => ProviderEducationCreateNestedManyWithoutProviderInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestCreateNestedManyWithoutProviderInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationCreateNestedManyWithoutProviderInputSchema).optional(),
});

export default ProviderCreateWithoutTreatingProviderLabOrdersInputSchema;
