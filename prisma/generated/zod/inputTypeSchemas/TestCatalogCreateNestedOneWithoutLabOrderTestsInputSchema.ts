import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutLabOrderTestsInputSchema } from './TestCatalogCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema } from './TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutLabOrderTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutLabOrderTestsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutLabOrderTestsInputSchema;
