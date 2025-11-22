import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema } from './TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUpsertWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUpsertWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema';

export const TestCatalogUpdateOneWithoutProviderFavoriteTestsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneWithoutProviderFavoriteTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutProviderFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutProviderFavoriteTestsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutProviderFavoriteTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUpdateWithoutProviderFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutProviderFavoriteTestsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneWithoutProviderFavoriteTestsNestedInputSchema;
