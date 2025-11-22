import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneWhereUniqueInputSchema } from './TestGeneWhereUniqueInputSchema';
import { TestGeneUpdateWithoutTestCatalogInputSchema } from './TestGeneUpdateWithoutTestCatalogInputSchema';
import { TestGeneUncheckedUpdateWithoutTestCatalogInputSchema } from './TestGeneUncheckedUpdateWithoutTestCatalogInputSchema';

export const TestGeneUpdateWithWhereUniqueWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestGeneUpdateWithWhereUniqueWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => TestGeneWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestGeneUpdateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUncheckedUpdateWithoutTestCatalogInputSchema) ]),
});

export default TestGeneUpdateWithWhereUniqueWithoutTestCatalogInputSchema;
