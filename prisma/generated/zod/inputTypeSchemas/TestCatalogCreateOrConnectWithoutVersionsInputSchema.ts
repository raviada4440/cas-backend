import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogCreateWithoutVersionsInputSchema } from './TestCatalogCreateWithoutVersionsInputSchema';
import { TestCatalogUncheckedCreateWithoutVersionsInputSchema } from './TestCatalogUncheckedCreateWithoutVersionsInputSchema';

export const TestCatalogCreateOrConnectWithoutVersionsInputSchema: z.ZodType<Prisma.TestCatalogCreateOrConnectWithoutVersionsInput> = z.strictObject({
  where: z.lazy(() => TestCatalogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutVersionsInputSchema) ]),
});

export default TestCatalogCreateOrConnectWithoutVersionsInputSchema;
