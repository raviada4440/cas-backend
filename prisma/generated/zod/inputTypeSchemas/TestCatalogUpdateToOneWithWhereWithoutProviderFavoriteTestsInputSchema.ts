import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutProviderFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema;
