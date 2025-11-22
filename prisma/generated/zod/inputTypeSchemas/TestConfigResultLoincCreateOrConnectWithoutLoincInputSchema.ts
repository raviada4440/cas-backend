import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincCreateWithoutLoincInputSchema } from './TestConfigResultLoincCreateWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema';

export const TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateOrConnectWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema;
