import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneWhereUniqueInputSchema } from './TestGeneWhereUniqueInputSchema';
import { TestGeneCreateWithoutTestCatalogInputSchema } from './TestGeneCreateWithoutTestCatalogInputSchema';
import { TestGeneUncheckedCreateWithoutTestCatalogInputSchema } from './TestGeneUncheckedCreateWithoutTestCatalogInputSchema';

export const TestGeneCreateOrConnectWithoutTestCatalogInputSchema: z.ZodType<Prisma.TestGeneCreateOrConnectWithoutTestCatalogInput> = z.strictObject({
  where: z.lazy(() => TestGeneWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestGeneCreateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUncheckedCreateWithoutTestCatalogInputSchema) ]),
});

export default TestGeneCreateOrConnectWithoutTestCatalogInputSchema;
