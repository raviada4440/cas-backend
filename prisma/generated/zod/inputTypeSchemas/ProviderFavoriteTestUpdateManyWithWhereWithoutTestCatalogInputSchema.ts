import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderFavoriteTestScalarWhereInputSchema } from './ProviderFavoriteTestScalarWhereInputSchema';
import { ProviderFavoriteTestUpdateManyMutationInputSchema } from './ProviderFavoriteTestUpdateManyMutationInputSchema';
import { ProviderFavoriteTestUncheckedUpdateManyWithoutTestCatalogInputSchema } from './ProviderFavoriteTestUncheckedUpdateManyWithoutTestCatalogInputSchema';

export const ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema: z.ZodType<Prisma.ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => ProviderFavoriteTestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProviderFavoriteTestUpdateManyMutationInputSchema), z.lazy(() => ProviderFavoriteTestUncheckedUpdateManyWithoutTestCatalogInputSchema) ]),
});

export default ProviderFavoriteTestUpdateManyWithWhereWithoutTestCatalogInputSchema;
