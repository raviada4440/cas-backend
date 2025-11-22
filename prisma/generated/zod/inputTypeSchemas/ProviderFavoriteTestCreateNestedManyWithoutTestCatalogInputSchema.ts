import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestCreateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema } from './ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema';
import { ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema } from './ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema';
import { ProviderFavoriteTestWhereUniqueInputSchema } from './ProviderFavoriteTestWhereUniqueInputSchema';

export const ProviderFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateNestedManyWithoutTestCatalogInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderFavoriteTestCreateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema), z.lazy(() => ProviderFavoriteTestWhereUniqueInputSchema).array() ]).optional(),
});

export default ProviderFavoriteTestCreateNestedManyWithoutTestCatalogInputSchema;
