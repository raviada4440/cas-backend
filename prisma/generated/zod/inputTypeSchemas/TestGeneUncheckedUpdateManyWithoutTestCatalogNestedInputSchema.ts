import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestGeneCreateWithoutTestCatalogInputSchema } from './TestGeneCreateWithoutTestCatalogInputSchema';
import { TestGeneUncheckedCreateWithoutTestCatalogInputSchema } from './TestGeneUncheckedCreateWithoutTestCatalogInputSchema';
import { TestGeneCreateOrConnectWithoutTestCatalogInputSchema } from './TestGeneCreateOrConnectWithoutTestCatalogInputSchema';
import { TestGeneUpsertWithWhereUniqueWithoutTestCatalogInputSchema } from './TestGeneUpsertWithWhereUniqueWithoutTestCatalogInputSchema';
import { TestGeneCreateManyTestCatalogInputEnvelopeSchema } from './TestGeneCreateManyTestCatalogInputEnvelopeSchema';
import { TestGeneWhereUniqueInputSchema } from './TestGeneWhereUniqueInputSchema';
import { TestGeneUpdateWithWhereUniqueWithoutTestCatalogInputSchema } from './TestGeneUpdateWithWhereUniqueWithoutTestCatalogInputSchema';
import { TestGeneUpdateManyWithWhereWithoutTestCatalogInputSchema } from './TestGeneUpdateManyWithWhereWithoutTestCatalogInputSchema';
import { TestGeneScalarWhereInputSchema } from './TestGeneScalarWhereInputSchema';

export const TestGeneUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.TestGeneUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestGeneCreateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => TestGeneUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestGeneCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => TestGeneCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestGeneUpsertWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestGeneCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestGeneWhereUniqueInputSchema), z.lazy(() => TestGeneWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestGeneWhereUniqueInputSchema), z.lazy(() => TestGeneWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestGeneWhereUniqueInputSchema), z.lazy(() => TestGeneWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestGeneWhereUniqueInputSchema), z.lazy(() => TestGeneWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestGeneUpdateWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestGeneUpdateManyWithWhereWithoutTestCatalogInputSchema), z.lazy(() => TestGeneUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestGeneScalarWhereInputSchema), z.lazy(() => TestGeneScalarWhereInputSchema).array() ]).optional(),
});

export default TestGeneUncheckedUpdateManyWithoutTestCatalogNestedInputSchema;
