import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema;
