import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerUpdateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUpdateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';

export const TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigBiomarkerUpdateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedUpdateWithoutBiomarkerInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema) ]),
});

export default TestConfigBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema;
