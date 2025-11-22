import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema } from './TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigCptCodeWhereUniqueInputSchema } from './TestConfigCptCodeWhereUniqueInputSchema';

export const TestConfigCptCodeUncheckedCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigCptCodeUncheckedCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigCptCodeCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigCptCodeCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema), z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigCptCodeUncheckedCreateNestedManyWithoutConfigurationInputSchema;
