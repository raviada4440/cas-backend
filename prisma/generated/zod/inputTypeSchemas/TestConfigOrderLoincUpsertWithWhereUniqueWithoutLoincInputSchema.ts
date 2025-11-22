import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincUpdateWithoutLoincInputSchema } from './TestConfigOrderLoincUpdateWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedUpdateWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedUpdateWithoutLoincInputSchema';
import { TestConfigOrderLoincCreateWithoutLoincInputSchema } from './TestConfigOrderLoincCreateWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema';

export const TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestConfigOrderLoincUpdateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedUpdateWithoutLoincInputSchema) ]),
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema;
