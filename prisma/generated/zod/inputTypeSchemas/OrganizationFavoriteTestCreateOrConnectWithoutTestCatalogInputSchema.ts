import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationFavoriteTestWhereUniqueInputSchema } from './OrganizationFavoriteTestWhereUniqueInputSchema';
import { OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema';
import { OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';

export const OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => OrganizationFavoriteTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrganizationFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => OrganizationFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default OrganizationFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema;
