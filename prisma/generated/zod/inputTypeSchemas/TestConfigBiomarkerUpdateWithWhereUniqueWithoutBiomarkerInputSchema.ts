import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerUpdateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUpdateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema';

export const TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigBiomarkerUpdateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema) ]),
});

export default TestConfigBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema;
