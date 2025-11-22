import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutSponsoredTestsInputSchema } from './TestCatalogUpdateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema';
import { TestCatalogCreateWithoutSponsoredTestsInputSchema } from './TestCatalogCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutSponsoredTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutSponsoredTestsInputSchema;
