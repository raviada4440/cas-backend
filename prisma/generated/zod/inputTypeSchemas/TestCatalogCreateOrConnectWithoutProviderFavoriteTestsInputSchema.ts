import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema';

export const TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema;
