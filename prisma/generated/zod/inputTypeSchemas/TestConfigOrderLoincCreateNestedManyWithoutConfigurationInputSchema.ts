import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema';
import { TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema } from './TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';

export const TestConfigOrderLoincCreateNestedManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateNestedManyWithoutConfigurationInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincCreateWithoutConfigurationInputSchema).array(), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigOrderLoincCreateManyConfigurationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigOrderLoincCreateNestedManyWithoutConfigurationInputSchema;
