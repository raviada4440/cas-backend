import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincUpdateWithoutLoincInputSchema } from './TestConfigResultLoincUpdateWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedUpdateWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedUpdateWithoutLoincInputSchema';

export const TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigResultLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUncheckedUpdateWithoutLoincInputSchema) ]),
});

export default TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema;
