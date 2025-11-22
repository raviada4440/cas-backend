import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestUpdateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUpdateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';

export const OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrganizationFavoriteTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default OrganizationFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema;
