import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincCreateWithoutLoincInputSchema } from './TestConfigResultLoincCreateWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema';
import { TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema } from './TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema';
import { TestConfigResultLoincCreateManyLoincInputEnvelopeSchema } from './TestConfigResultLoincCreateManyLoincInputEnvelopeSchema';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';

export const TestConfigResultLoincCreateNestedManyWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigResultLoincCreateNestedManyWithoutLoincInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigResultLoincCreateManyLoincInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigResultLoincCreateNestedManyWithoutLoincInputSchema;
