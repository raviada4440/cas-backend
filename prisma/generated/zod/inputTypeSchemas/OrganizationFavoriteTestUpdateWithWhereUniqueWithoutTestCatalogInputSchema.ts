import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestUpdateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUpdateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema';

export const OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
});

export default OrganizationFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema;
