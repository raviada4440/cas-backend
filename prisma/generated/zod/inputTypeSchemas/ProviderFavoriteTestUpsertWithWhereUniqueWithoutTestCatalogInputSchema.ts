import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';
import { ProviderFavoriteTestUpdateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUpdateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestCreateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';

export const ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProviderFavoriteTestUpdateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default ProviderFavoriteTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema;
