import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogUpdateWithoutLabOrderTestsInputSchema } from './TestCatalogUpdateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema';
import { TestCatalogCreateWithoutLabOrderTestsInputSchema } from './TestCatalogCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';

export const TestCatalogUpsertWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithoutLabOrderTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabOrderTestsInputSchema) ]),
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
});

export default TestCatalogUpsertWithoutLabOrderTestsInputSchema;
