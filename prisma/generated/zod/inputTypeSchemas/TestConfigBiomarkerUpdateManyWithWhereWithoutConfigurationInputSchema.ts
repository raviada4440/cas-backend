import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigBiomarkerScalarWhereInputSchema } from './TestConfigBiomarkerScalarWhereInputSchema';
import { TestConfigBiomarkerUpdateManyMutationInputSchema } from './TestConfigBiomarkerUpdateManyMutationInputSchema';
import { TestConfigBiomarkerUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestConfigBiomarkerUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigBiomarkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigBiomarkerUpdateManyMutationInputSchema), z.lazy(() => TestConfigBiomarkerUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestConfigBiomarkerUpdateManyWithWhereWithoutConfigurationInputSchema;
