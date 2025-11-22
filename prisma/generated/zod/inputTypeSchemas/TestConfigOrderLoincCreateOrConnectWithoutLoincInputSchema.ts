import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincCreateWithoutLoincInputSchema } from './TestConfigOrderLoincCreateWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema';

export const TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateOrConnectWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema) ]),
});

export default TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema;
