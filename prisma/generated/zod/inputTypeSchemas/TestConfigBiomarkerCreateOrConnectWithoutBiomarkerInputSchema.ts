import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerWhereUniqueInputSchema } from './TestConfigBiomarkerWhereUniqueInputSchema';
import { TestConfigBiomarkerCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';

export const TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedCreateWithoutBiomarkerInputSchema) ]),
});

export default TestConfigBiomarkerCreateOrConnectWithoutBiomarkerInputSchema;
