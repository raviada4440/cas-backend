import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';
import { OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema } from './OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema';

export const OrganizationUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.OrganizationUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OrganizationUpdateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema) ]),
});

export default OrganizationUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema;
