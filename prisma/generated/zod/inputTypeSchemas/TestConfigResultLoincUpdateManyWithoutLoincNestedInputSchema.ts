import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigResultLoincCreateWithoutLoincInputSchema } from './TestConfigResultLoincCreateWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema';
import { TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema } from './TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema';
import { TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema } from './TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema';
import { TestConfigResultLoincCreateManyLoincInputEnvelopeSchema } from './TestConfigResultLoincCreateManyLoincInputEnvelopeSchema';
import { TestConfigResultLoincWhereUniqueInputSchema } from './TestConfigResultLoincWhereUniqueInputSchema';
import { TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema } from './TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema';
import { TestConfigResultLoincUpdateManyWithWhereWithoutLoincInputSchema } from './TestConfigResultLoincUpdateManyWithWhereWithoutLoincInputSchema';
import { TestConfigResultLoincScalarWhereInputSchema } from './TestConfigResultLoincScalarWhereInputSchema';

export const TestConfigResultLoincUpdateManyWithoutLoincNestedInputSchema: z.ZodType<Prisma.TestConfigResultLoincUpdateManyWithoutLoincNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigResultLoincCreateManyLoincInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema), z.lazy(() => TestConfigResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigResultLoincUpdateManyWithWhereWithoutLoincInputSchema), z.lazy(() => TestConfigResultLoincUpdateManyWithWhereWithoutLoincInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigResultLoincScalarWhereInputSchema), z.lazy(() => TestConfigResultLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigResultLoincUpdateManyWithoutLoincNestedInputSchema;
