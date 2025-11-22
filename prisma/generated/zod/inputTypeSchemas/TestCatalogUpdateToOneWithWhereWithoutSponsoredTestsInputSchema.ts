import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutSponsoredTestsInputSchema } from './TestCatalogUpdateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutSponsoredTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutSponsoredTestsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutSponsoredTestsInputSchema;
