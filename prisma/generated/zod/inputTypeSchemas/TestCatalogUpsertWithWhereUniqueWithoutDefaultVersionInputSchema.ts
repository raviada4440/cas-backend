import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateWithoutDefaultVersionInputSchema } from './TestCatalogUpdateWithoutDefaultVersionInputSchema';
import { TestCatalogUncheckedUpdateWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedUpdateWithoutDefaultVersionInputSchema';
import { TestCatalogCreateWithoutDefaultVersionInputSchema } from './TestCatalogCreateWithoutDefaultVersionInputSchema';
import { TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema';

export const TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInputSchema: z.ZodType<Prisma.TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUncheckedUpdateWithoutDefaultVersionInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema) ]),
});

export default TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInputSchema;
