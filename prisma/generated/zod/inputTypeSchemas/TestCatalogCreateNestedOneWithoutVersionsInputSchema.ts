import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutVersionsInputSchema } from './TestCatalogCreateWithoutVersionsInputSchema';
import { TestCatalogUncheckedCreateWithoutVersionsInputSchema } from './TestCatalogUncheckedCreateWithoutVersionsInputSchema';
import { TestCatalogCreateOrConnectWithoutVersionsInputSchema } from './TestCatalogCreateOrConnectWithoutVersionsInputSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedOneWithoutVersionsInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedOneWithoutVersionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutVersionsInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutVersionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TestCatalogCreateOrConnectWithoutVersionsInputSchema).optional(),
  connect: z.lazy(() => TestCatalogWhereUniqueInputSchema).optional(),
});

export default TestCatalogCreateNestedOneWithoutVersionsInputSchema;
