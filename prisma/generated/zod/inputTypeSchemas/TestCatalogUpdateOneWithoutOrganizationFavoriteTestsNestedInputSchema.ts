import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUpsertWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUpsertWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema';

export const TestCatalogUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateOneWithoutOrganizationFavoriteTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutOrganizationFavoriteTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutOrganizationFavoriteTestsInputSchema).optional(),
  upsert: z.lazy(() => TestCatalogUpsertWithoutOrganizationFavoriteTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TestCatalogWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateToOneWithWhereWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUpdateWithoutOrganizationFavoriteTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutOrganizationFavoriteTestsInputSchema) ]).optional(),
});

export default TestCatalogUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema;
