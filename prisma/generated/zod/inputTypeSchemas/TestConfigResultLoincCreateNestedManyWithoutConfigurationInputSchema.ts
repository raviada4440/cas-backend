import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema } from './TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';

export const TestConfigResultLoincCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigResultLoincCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigResultLoincCreateNestedManyWithoutConfigurationInputSchema;
