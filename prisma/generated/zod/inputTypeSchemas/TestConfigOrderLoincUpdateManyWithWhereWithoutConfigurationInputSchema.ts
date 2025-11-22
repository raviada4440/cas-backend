import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincScalarWhereInputSchema } from './TestConfigOrderLoincScalarWhereInputSchema';
import { TestConfigOrderLoincUpdateManyMutationInputSchema } from './TestConfigOrderLoincUpdateManyMutationInputSchema';
import { TestConfigOrderLoincUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestConfigOrderLoincUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigOrderLoincUpdateManyMutationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestConfigOrderLoincUpdateManyWithWhereWithoutConfigurationInputSchema;
