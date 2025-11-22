import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerScalarWhereInputSchema } from './TestConfigBiomarkerScalarWhereInputSchema';
import { TestConfigBiomarkerUpdateManyMutationInputSchema } from './TestConfigBiomarkerUpdateManyMutationInputSchema';
import { TestConfigBiomarkerUncheckedUpdateManyWithoutBiomarkerInputSchema } from './TestConfigBiomarkerUncheckedUpdateManyWithoutBiomarkerInputSchema';

export const TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigBiomarkerUpdateManyMutationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedUpdateManyWithoutBiomarkerInputSchema) ]),
});

export default TestConfigBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema;
