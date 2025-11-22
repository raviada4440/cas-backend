import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeWhereUniqueInputSchema } from './TestConfigCptCodeWhereUniqueInputSchema';
import { TestConfigCptCodeUpdateWithoutConfigurationInputSchema } from './TestConfigCptCodeUpdateWithoutConfigurationInputSchema';
import { TestConfigCptCodeUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedUpdateWithoutConfigurationInputSchema';

export const TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigCptCodeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigCptCodeUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestConfigCptCodeUpdateWithWhereUniqueWithoutConfigurationInputSchema;
