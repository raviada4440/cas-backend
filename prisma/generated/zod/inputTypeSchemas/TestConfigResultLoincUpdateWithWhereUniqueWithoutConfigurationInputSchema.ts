import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincUpdateWithoutConfigurationInputSchema } from './TestConfigResultLoincUpdateWithoutConfigurationInputSchema';
import { TestConfigResultLoincUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedUpdateWithoutConfigurationInputSchema';

export const TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigResultLoincUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestConfigResultLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema;
