import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutDefaultVersionInputSchema } from './TestCatalogCreateWithoutDefaultVersionInputSchema';
import { TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema';

export const TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutDefaultVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema;
