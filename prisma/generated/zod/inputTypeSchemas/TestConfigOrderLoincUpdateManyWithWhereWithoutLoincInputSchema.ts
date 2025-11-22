import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincScalarWhereInputSchema } from './TestConfigOrderLoincScalarWhereInputSchema';
import { TestConfigOrderLoincUpdateManyMutationInputSchema } from './TestConfigOrderLoincUpdateManyMutationInputSchema';
import { TestConfigOrderLoincUncheckedUpdateManyWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedUpdateManyWithoutLoincInputSchema';

export const TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestConfigOrderLoincUpdateManyMutationInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedUpdateManyWithoutLoincInputSchema) ]),
});

export default TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInputSchema;
