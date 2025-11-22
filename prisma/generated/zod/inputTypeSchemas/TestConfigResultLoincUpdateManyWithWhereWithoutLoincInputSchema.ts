import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincScalarWhereInputSchema } from './TestConfigResultLoincScalarWhereInputSchema';
import { TestConfigResultLoincUpdateManyMutationInputSchema } from './TestConfigResultLoincUpdateManyMutationInputSchema';
import { TestConfigResultLoincUncheckedUpdateManyWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedUpdateManyWithoutLoincInputSchema';

export const TestConfigResultLoincUpdateManyWithWhereWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateManyWithWhereWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigResultLoincUpdateManyMutationInputSchema), z.lazy(() => TestConfigResultLoincUncheckedUpdateManyWithoutLoincInputSchema) ]),
});

export default TestConfigResultLoincUpdateManyWithWhereWithoutLoincInputSchema;
