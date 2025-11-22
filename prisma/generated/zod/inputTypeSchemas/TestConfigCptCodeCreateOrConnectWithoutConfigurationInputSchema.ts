import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeWhereUniqueInputSchema } from './TestConfigCptCodeWhereUniqueInputSchema';
import { TestConfigCptCodeCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeCreateWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema';

export const TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigCptCodeCreateOrConnectWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigCptCodeCreateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedCreateWithoutConfigurationInputSchema) ]),
});

export default TestConfigCptCodeCreateOrConnectWithoutConfigurationInputSchema;
