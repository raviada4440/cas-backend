import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema } from './TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema } from './TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInputSchema } from './TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInputSchema';
import { TestConfigOrderLoincScalarWhereInputSchema } from './TestConfigOrderLoincScalarWhereInputSchema';

export const TestConfigOrderLoincUpdateManyWithoutConfigurationNestedInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateManyWithoutConfigurationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUpsertWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigOrderLoincScalarWhereInputSchema), z.lazy(() => TestConfigOrderLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigOrderLoincUpdateManyWithoutConfigurationNestedInputSchema;
