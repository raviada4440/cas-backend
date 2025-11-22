import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutVersionInputSchema } from './TestCatalogConfigurationCreateWithoutVersionInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema } from './TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogConfigurationScalarWhereInputSchema } from './TestCatalogConfigurationScalarWhereInputSchema';

export const TestCatalogConfigurationUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogConfigurationCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogConfigurationUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogConfigurationScalarWhereInputSchema), z.lazy(() => TestCatalogConfigurationScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogConfigurationUncheckedUpdateManyWithoutVersionNestedInputSchema;
