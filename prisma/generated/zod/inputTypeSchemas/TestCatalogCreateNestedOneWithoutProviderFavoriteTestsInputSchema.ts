import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutProviderFavoriteTestsInputSchema;
