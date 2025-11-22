import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema } from './TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestConfigResultLoincScalarWhereInputSchema } from './TestConfigResultLoincScalarWhereInputSchema';

export const TestConfigResultLoincUncheckedUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestConfigResultLoincUncheckedUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigResultLoincScalarWhereInputSchema), z.lazy(() => TestConfigResultLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigResultLoincUncheckedUpdateManyWithoutConfigurationNestedInputSchema;
