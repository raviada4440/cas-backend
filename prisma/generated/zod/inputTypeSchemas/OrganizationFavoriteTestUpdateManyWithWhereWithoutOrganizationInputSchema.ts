import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestScalarWhereInputSchema } from './OrganizationFavoriteTestScalarWhereInputSchema';
import { OrganizationFavoriteTestUpdateManyMutationInputSchema } from './OrganizationFavoriteTestUpdateManyMutationInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationInputSchema } from './OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationInputSchema';

export const OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateManyMutationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationInputSchema) ]),
});

export default OrganizationFavoriteTestUpdateManyWithWhereWithoutOrganizationInputSchema;
