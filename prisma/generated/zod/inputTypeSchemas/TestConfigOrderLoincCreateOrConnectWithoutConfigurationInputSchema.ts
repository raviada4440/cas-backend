import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincCreateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigOrderLoincCreateOrConnectWithoutConfigurationInputSchema;
