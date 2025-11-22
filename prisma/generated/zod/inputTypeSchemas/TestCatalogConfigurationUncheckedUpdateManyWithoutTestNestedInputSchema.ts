import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogConfigurationCreateWithoutTestInputSchema } from './TestCatalogConfigurationCreateWithoutTestInputSchema';
import { TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema } from './TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema';
import { TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema } from './TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema';
import { TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInputSchema } from './TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInputSchema';
import { TestCatalogConfigurationCreateManyTestInputEnvelopeSchema } from './TestCatalogConfigurationCreateManyTestInputEnvelopeSchema';
import { TestCatalogConfigurationWhereUniqueInputSchema } from './TestCatalogConfigurationWhereUniqueInputSchema';
import { TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInputSchema } from './TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInputSchema';
import { TestCatalogConfigurationUpdateManyWithWhereWithoutTestInputSchema } from './TestCatalogConfigurationUpdateManyWithWhereWithoutTestInputSchema';
import { TestCatalogConfigurationScalarWhereInputSchema } from './TestCatalogConfigurationScalarWhereInputSchema';

export const TestCatalogConfigurationUncheckedUpdateManyWithoutTestNestedInputSchema: z.ZodType<Prisma.TestCatalogConfigurationUncheckedUpdateManyWithoutTestNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogConfigurationCreateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationCreateWithoutTestInputSchema).array(), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUpsertWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogConfigurationCreateManyTestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema), z.lazy(() => TestCatalogConfigurationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUpdateWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogConfigurationUpdateManyWithWhereWithoutTestInputSchema), z.lazy(() => TestCatalogConfigurationUpdateManyWithWhereWithoutTestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogConfigurationScalarWhereInputSchema), z.lazy(() => TestCatalogConfigurationScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogConfigurationUncheckedUpdateManyWithoutTestNestedInputSchema;
