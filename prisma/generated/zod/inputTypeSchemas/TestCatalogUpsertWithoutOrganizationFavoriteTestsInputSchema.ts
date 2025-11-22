import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutOrganizationFavoriteTestsInputSchema;
