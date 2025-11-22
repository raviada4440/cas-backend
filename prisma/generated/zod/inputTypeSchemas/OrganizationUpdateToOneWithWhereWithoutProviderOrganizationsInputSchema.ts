import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutProviderOrganizationsInputSchema } from './OrganizationUpdateWithoutProviderOrganizationsInputSchema';
import { OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema } from './OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutProviderOrganizationsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutProviderOrganizationsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema;
