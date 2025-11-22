import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutSponsoredTestsInputSchema } from './TestCatalogCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema } from './TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema } from './TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutSponsoredTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutSponsoredTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutSponsoredTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutSponsoredTestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutSponsoredTestsInputSchema;
