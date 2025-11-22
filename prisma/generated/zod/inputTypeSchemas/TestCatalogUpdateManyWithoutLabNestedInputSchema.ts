import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogCreateWithoutLabInputSchema } from './TestCatalogCreateWithoutLabInputSchema';
import { TestCatalogUncheckedCreateWithoutLabInputSchema } from './TestCatalogUncheckedCreateWithoutLabInputSchema';
import { TestCatalogCreateOrConnectWithoutLabInputSchema } from './TestCatalogCreateOrConnectWithoutLabInputSchema';
import { TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema } from './TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema';
import { TestCatalogCreateManyLabInputEnvelopeSchema } from './TestCatalogCreateManyLabInputEnvelopeSchema';
import { TestCatalogWhereUniqueInputSchema } from './TestCatalogWhereUniqueInputSchema';
import { TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema } from './TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema';
import { TestCatalogUpdateManyWithWhereWithoutLabInputSchema } from './TestCatalogUpdateManyWithWhereWithoutLabInputSchema';
import { TestCatalogScalarWhereInputSchema } from './TestCatalogScalarWhereInputSchema';

export const TestCatalogUpdateManyWithoutLabNestedInputSchema: z.ZodType<Prisma.TestCatalogUpdateManyWithoutLabNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogCreateWithoutLabInputSchema), z.lazy(() => TestCatalogCreateWithoutLabInputSchema).array(), z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema), z.lazy(() => TestCatalogUncheckedCreateWithoutLabInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema), z.lazy(() => TestCatalogCreateOrConnectWithoutLabInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema), z.lazy(() => TestCatalogUpsertWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogCreateManyLabInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogWhereUniqueInputSchema), z.lazy(() => TestCatalogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema), z.lazy(() => TestCatalogUpdateWithWhereUniqueWithoutLabInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogUpdateManyWithWhereWithoutLabInputSchema), z.lazy(() => TestCatalogUpdateManyWithWhereWithoutLabInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogScalarWhereInputSchema), z.lazy(() => TestCatalogScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogUpdateManyWithoutLabNestedInputSchema;
