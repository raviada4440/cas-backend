import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutLabOrderTestsInputSchema } from './TestCatalogCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema';

export const TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutLabOrderTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema;
