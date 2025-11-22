import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderUncheckedCreateNestedManyWithoutOrderingProviderInputSchema } from './LabOrderUncheckedCreateNestedManyWithoutOrderingProviderInputSchema';
import { ProviderEducationUncheckedCreateNestedManyWithoutProviderInputSchema } from './ProviderEducationUncheckedCreateNestedManyWithoutProviderInputSchema';
import { ProviderFavoriteTestUncheckedCreateNestedManyWithoutProviderInputSchema } from './ProviderFavoriteTestUncheckedCreateNestedManyWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedCreateNestedManyWithoutProviderInputSchema } from './ProviderOrganizationUncheckedCreateNestedManyWithoutProviderInputSchema';

export const ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema: z.ZodType<Prisma.ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInput> = z.strictObject({
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
  userAttributeId: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  orderingProviderLabOrders: z.lazy(() => LabOrderUncheckedCreateNestedManyWithoutOrderingProviderInputSchema).optional(),
  providerEducation: z.lazy(() => ProviderEducationUncheckedCreateNestedManyWithoutProviderInputSchema).optional(),
  providerFavoriteTests: z.lazy(() => ProviderFavoriteTestUncheckedCreateNestedManyWithoutProviderInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationUncheckedCreateNestedManyWithoutProviderInputSchema).optional(),
});

export default ProviderUncheckedCreateWithoutTreatingProviderLabOrdersInputSchema;
