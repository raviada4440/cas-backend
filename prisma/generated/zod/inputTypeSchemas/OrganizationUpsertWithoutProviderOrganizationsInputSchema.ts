import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutProviderOrganizationsInputSchema } from './OrganizationUpdateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema';
import { OrganizationCreateWithoutProviderOrganizationsInputSchema } from './OrganizationCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutProviderOrganizationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutProviderOrganizationsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutProviderOrganizationsInputSchema;
