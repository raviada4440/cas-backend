import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneWhereUniqueInputSchema } from './TestGeneWhereUniqueInputSchema';
import { TestGeneUpdateWithoutTestCatalogInputSchema } from './TestGeneUpdateWithoutTestCatalogInputSchema';
import { TestGeneUncheckedUpdateWithoutTestCatalogInputSchema } from './TestGeneUncheckedUpdateWithoutTestCatalogInputSchema';
import { TestGeneCreateWithoutTestCatalogInputSchema } from './TestGeneCreateWithoutTestCatalogInputSchema';
import { TestGeneUncheckedCreateWithoutTestCatalogInputSchema } from './TestGeneUncheckedCreateWithoutTestCatalogInputSchema';

export const TestGeneUpsertWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestGeneUpsertWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => TestGeneWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestGeneUpdateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUncheckedUpdateWithoutTestCatalogInputSchema) ]),
  create: z.union([ z.lazy(() => TestGeneCreateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default TestGeneUpsertWithWhereUniqueWithoutTestCatalogInputSchema;
