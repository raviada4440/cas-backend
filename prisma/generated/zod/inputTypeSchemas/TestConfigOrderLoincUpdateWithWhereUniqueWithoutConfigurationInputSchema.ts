import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincUpdateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUpdateWithoutConfigurationInputSchema';
import { TestConfigOrderLoincUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedUpdateWithoutConfigurationInputSchema';

export const TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigOrderLoincUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestConfigOrderLoincUpdateWithWhereUniqueWithoutConfigurationInputSchema;
