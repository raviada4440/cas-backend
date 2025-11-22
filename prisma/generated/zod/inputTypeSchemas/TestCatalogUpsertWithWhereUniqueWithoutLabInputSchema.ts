import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateWithoutLabInputSchema } from './TestCatalogUpdateWithoutLabInputSchema';
import { TestCatalogUncheckedUpdateWithoutLabInputSchema } from './TestCatalogUncheckedUpdateWithoutLabInputSchema';
import { TestCatalogCreateWithoutLabInputSchema } from './TestCatalogCreateWithoutLabInputSchema';
import { TestCatalogUncheckedCreateWithoutLabInputSchema } from './TestCatalogUncheckedCreateWithoutLabInputSchema';

export const TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithWhereUniqueWithoutLabInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutLabInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutLabInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema) ]),
});

export default TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema;
