import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereInputSchema } from './TestCatalogWhereInputSchema';
import { TestCatalogUpdateWithoutLabOrderTestsInputSchema } from './TestCatalogUpdateWithoutLabOrderTestsInputSchema';
import { TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema } from './TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema';

export const TestCatalogUpdateToOneWithWhereWithoutLabOrderTestsInputSchema: z.ZodType<Prisma.TestCatalogUpdateToOneWithWhereWithoutLabOrderTestsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutLabOrderTestsInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutLabOrderTestsInputSchema) ]),
});

export default TestCatalogUpdateToOneWithWhereWithoutLabOrderTestsInputSchema;
