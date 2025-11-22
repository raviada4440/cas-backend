import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutOrganizationFavoriteTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutOrganizationFavoriteTestsInputSchema;
