import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestConfigOrderLoincCreateWithoutLoincInputSchema } from './TestConfigOrderLoincCreateWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema';
import { TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema } from './TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema';
import { TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema } from './TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema';
import { TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema } from './TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema';
import { TestConfigOrderLoincWhereUniqueInputSchema } from './TestConfigOrderLoincWhereUniqueInputSchema';
import { TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema } from './TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema';
import { TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInputSchema } from './TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInputSchema';
import { TestConfigOrderLoincScalarWhereInputSchema } from './TestConfigOrderLoincScalarWhereInputSchema';

export const TestConfigOrderLoincUpdateManyWithoutLoincNestedInputSchema: z.ZodType<Prisma.TestConfigOrderLoincUpdateManyWithoutLoincNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestConfigOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestConfigOrderLoincCreateManyLoincInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema), z.lazy(() => TestConfigOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInputSchema), z.lazy(() => TestConfigOrderLoincUpdateManyWithWhereWithoutLoincInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestConfigOrderLoincScalarWhereInputSchema), z.lazy(() => TestConfigOrderLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestConfigOrderLoincUpdateManyWithoutLoincNestedInputSchema;
