import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutDefaultVersionInputSchema } from './TestCatalogCreateWithoutDefaultVersionInputSchema';
import { TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema } from './TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema';
import { TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema } from './TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema';
import { TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInputSchema } from './TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInputSchema';
import { TestCatalogCreateManyDefaultVersionInputEnvelopeSchema } from './TestCatalogCreateManyDefaultVersionInputEnvelopeSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInputSchema } from './TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInputSchema';
import { TestCatalogUpdateManyWithWhereWithoutDefaultVersionInputSchema } from './TestCatalogUpdateManyWithWhereWithoutDefaultVersionInputSchema';
import { TestCatalogScalarWhereInputSchema } from './TestCatalogScalarWhereInputSchema';

export const TestCatalogUpdateManyWithoutDefaultVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyWithoutDefaultVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogCreateWithoutDefaultVersionInputSchema).array(), z.lazy(() => TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutDefaultVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogCreateOrConnectWithoutDefaultVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutDefaultVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyDefaultVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutDefaultVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogUpdateManyWithWhereWithoutDefaultVersionInputSchema), z.lazy(() => TestCatalogUpdateManyWithWhereWithoutDefaultVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema), z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogUpdateManyWithoutDefaultVersionNestedInputSchema;
