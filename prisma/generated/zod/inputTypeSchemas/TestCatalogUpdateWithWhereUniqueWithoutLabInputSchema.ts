import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateWithoutLabInputSchema } from './TestCatalogUpdateWithoutLabInputSchema';
import { TestCatalogUncheckedUpdateWithoutLabInputSchema } from './TestCatalogUncheckedUpdateWithoutLabInputSchema';

export const TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithWhereUniqueWithoutLabInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutLabInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutLabInputSchema) ]),
});

export default TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema;
