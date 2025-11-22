import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';

export const TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema;
