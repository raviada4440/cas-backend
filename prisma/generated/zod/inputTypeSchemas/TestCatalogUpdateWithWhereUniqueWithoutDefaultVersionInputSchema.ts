import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateWithoutDefaultVersionInputSchema } from './TestCatalogUpdateWithoutDefaultVersionInputSchema';
import { TestCatalogUncheckedUpdateWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedUpdateWithoutDefaultVersionInputSchema';

export const TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInputSchema: z.ZodType<Prisma.TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogUpdateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutDefaultVersionInputSchema) ]),
});

export default TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInputSchema;
