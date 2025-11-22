import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincCreateWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigResultLoincCreateOrConnectWithoutConfigurationInputSchema;
