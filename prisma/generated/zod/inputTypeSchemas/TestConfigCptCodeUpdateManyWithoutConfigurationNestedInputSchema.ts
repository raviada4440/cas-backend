import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema } from './TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigCptCodeWhereUniqueInputSchema } from './TestConfigCptCodeWhereUniqueInputSchema';
import { TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestConfigCptCodeScalarWhereInputSchema } from './TestConfigCptCodeScalarWhereInputSchema';

export const TestConfigCptCodeUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestConfigCptCodeUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigCptCodeCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema), z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema), z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema), z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema), z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigCptCodeScalarWhereInputSchema), z.lazy(() => TestConfigCptCodeScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigCptCodeUpdateManyWithoutConfigurationNestedInputSchema;
