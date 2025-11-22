import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCptCodeCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionCptCodeWhereUniqueInputSchema } from './TestCatalogVersionCptCodeWhereUniqueInputSchema';
import { TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionCptCodeScalarWhereInputSchema } from './TestCatalogVersionCptCodeScalarWhereInputSchema';

export const TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionCptCodeCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionCptCodeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionCptCodeUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema), z.lazy(() => TestCatalogVersionCptCodeScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionCptCodeUncheckedUpdateManyWithoutVersionNestedInputSchema;
