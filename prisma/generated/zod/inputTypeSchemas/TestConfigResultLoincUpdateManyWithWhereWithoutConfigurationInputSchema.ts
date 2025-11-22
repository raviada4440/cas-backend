import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincScalarWhereInputSchema } from './TestConfigResultLoincScalarWhereInputSchema';
import { TestConfigResultLoincUpdateManyMutationInputSchema } from './TestConfigResultLoincUpdateManyMutationInputSchema';
import { TestConfigResultLoincUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestConfigResultLoincUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigResultLoincUpdateManyMutationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestConfigResultLoincUpdateManyWithWhereWithoutConfigurationInputSchema;
