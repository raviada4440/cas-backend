import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutLabInputSchema } from './TestCatalogCreateWithoutLabInputSchema';
import { TestCatalogUncheckedCreateWithoutLabInputSchema } from './TestCatalogUncheckedCreateWithoutLabInputSchema';

export const TestCatalogCreateOrConnectWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutLabInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutLabInputSchema;
