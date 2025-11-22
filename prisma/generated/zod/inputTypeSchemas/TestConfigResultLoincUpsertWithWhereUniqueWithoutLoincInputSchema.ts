import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincUpdateWithoutLoincInputSchema } from './TestConfigResultLoincUpdateWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedUpdateWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedUpdateWithoutLoincInputSchema';
import { TestConfigResultLoincCreateWithoutLoincInputSchema } from './TestConfigResultLoincCreateWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema';

export const TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigResultLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUncheckedUpdateWithoutLoincInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema;
