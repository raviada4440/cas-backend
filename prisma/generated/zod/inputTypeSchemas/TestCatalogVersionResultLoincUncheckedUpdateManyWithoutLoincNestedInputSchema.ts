import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema } from './TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema } from './TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInputSchema';
import { TestCatalogVersionResultLoincScalarWhereInputSchema } from './TestCatalogVersionResultLoincScalarWhereInputSchema';

export const TestCatalogVersionResultLoincUncheckedUpdateManyWithoutLoincNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUncheckedUpdateManyWithoutLoincNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionResultLoincCreateManyLoincInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionResultLoincUncheckedUpdateManyWithoutLoincNestedInputSchema;
