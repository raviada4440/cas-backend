import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutProviderFavoriteTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutProviderFavoriteTestsInputSchema;
