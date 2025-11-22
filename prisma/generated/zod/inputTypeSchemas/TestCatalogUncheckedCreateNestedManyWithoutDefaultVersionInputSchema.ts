import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutDefaultVersionInputSchema } from './TestCatalogCreateWithoutDefaultVersionInputSchema';
import { TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema';
import { TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema } from './TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema';
import { TestCatalogCreateManyDefaultVersionInputEnvelopeSchema } from './TestCatalogCreateManyDefaultVersionInputEnvelopeSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';

export const TestCatalogUncheckedCreateNestedManyWithoutDefaultVersionInputSchema: z.ZodType<Prisma.TestCatalogUncheckedCreateNestedManyWithoutDefaultVersionInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogCreateWithoutDefaultVersionInputSchema).array(), z.lazy(() => TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyDefaultVersionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogUncheckedCreateNestedManyWithoutDefaultVersionInputSchema;
