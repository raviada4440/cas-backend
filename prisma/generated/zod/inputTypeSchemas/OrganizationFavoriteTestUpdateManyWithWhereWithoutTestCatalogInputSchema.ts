import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestScalarWhereInputSchema } from './OrganizationFavoriteTestScalarWhereInputSchema';
import { OrganizationFavoriteTestUpdateManyMutationInputSchema } from './OrganizationFavoriteTestUpdateManyMutationInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogInputSchema';

export const OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateManyMutationInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
});

export default OrganizationFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema;
