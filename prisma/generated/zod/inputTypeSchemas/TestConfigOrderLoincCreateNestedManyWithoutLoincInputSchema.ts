import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincCreateWithoutLoincInputSchema } from './TestConfigOrderLoincCreateWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema';
import { TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema } from './TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema';
import { TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema } from './TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';

export const TestConfigOrderLoincCreateNestedManyWithoutLoincInputSchema: z.ZodType<Prisma.TestConfigOrderLoincCreateNestedManyWithoutLoincInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
});

export default TestConfigOrderLoincCreateNestedManyWithoutLoincInputSchema;
