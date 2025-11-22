import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigCptCodeScalarWhereInputSchema } from './TestConfigCptCodeScalarWhereInputSchema';
import { TestConfigCptCodeUpdateManyMutationInputSchema } from './TestConfigCptCodeUpdateManyMutationInputSchema';
import { TestConfigCptCodeUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestConfigCptCodeUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigCptCodeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigCptCodeUpdateManyMutationInputSchema), z.lazy(() => TestConfigCptCodeUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestConfigCptCodeUpdateManyWithWhereWithoutConfigurationInputSchema;
