import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionResultLoincWhereUniqueInputSchema } from './TestCatalogVersionResultLoincWhereUniqueInputSchema';
import { TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionResultLoincScalarWhereInputSchema } from './TestCatalogVersionResultLoincScalarWhereInputSchema';

export const TestCatalogVersionResultLoincUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionResultLoincCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionResultLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionResultLoincUpdateManyWithoutVersionNestedInputSchema;
