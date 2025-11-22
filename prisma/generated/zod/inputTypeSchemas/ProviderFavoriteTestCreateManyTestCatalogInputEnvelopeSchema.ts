import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestCreateManyTestCatalogInputSchema } from './ProviderFavoriteTestCreateManyTestCatalogInputSchema';

export const ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema: z.ZodType<Prisma.ProviderFavoriteTestCreateManyTestCatalogInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProviderFavoriteTestCreateManyTestCatalogInputSchema), z.lazy(() => ProviderFavoriteTestCreateManyTestCatalogInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProviderFavoriteTestCreateManyTestCatalogInputEnvelopeSchema;
