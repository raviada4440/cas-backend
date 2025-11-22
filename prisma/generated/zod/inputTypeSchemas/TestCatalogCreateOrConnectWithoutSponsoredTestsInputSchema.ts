import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutSponsoredTestsInputSchema } from './TestCatalogCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema';

export const TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutSponsoredTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema;
