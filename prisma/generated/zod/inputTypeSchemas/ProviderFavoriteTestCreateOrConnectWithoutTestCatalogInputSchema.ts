import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestCreateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';

export const ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema;
