import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestUpdateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUpdateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema';

export const ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProviderFavoriteTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
});

export default ProviderFavoriteTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema;
