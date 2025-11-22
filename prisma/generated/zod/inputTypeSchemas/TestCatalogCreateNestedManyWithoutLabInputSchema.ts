import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutLabInputSchema } from './TestCatalogCreateWithoutLabInputSchema';
import { TestCatalogUncheckedCreateWithoutLabInputSchema } from './TestCatalogUncheckedCreateWithoutLabInputSchema';
import { TestCatalogCreateOrConnectWithoutLabInputSchema } from './TestCatalogCreateOrConnectWithoutLabInputSchema';
import { TestCatalogCreateManyLabInputEnvelopeSchema } from './TestCatalogCreateManyLabInputEnvelopeSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogCreateNestedManyWithoutLabInputSchema: z.ZodType<Prisma.TestCatalogCreateNestedManyWithoutLabInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema), z.lazy(() => TestCatalogCreateWithoutLabInputSchema).array(), z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema), z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyLabInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogCreateNestedManyWithoutLabInputSchema;
