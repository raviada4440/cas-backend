import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerUpdateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUpdateWithoutConfigurationInputSchema';
import { TestConfigBiomarkerUncheckedUpdateWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedUpdateWithoutConfigurationInputSchema';

export const TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigBiomarkerUpdateWithoutConfigurationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedUpdateWithoutConfigurationInputSchema) ]),
});

export default TestConfigBiomarkerUpdateWithWhereUniqueWithoutConfigurationInputSchema;
