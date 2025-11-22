import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincUpdateWithoutLoincInputSchema } from './TestConfigOrderLoincUpdateWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedUpdateWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedUpdateWithoutLoincInputSchema';

export const TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestConfigOrderLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedUpdateWithoutLoincInputSchema) ]),
});

export default TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema;
