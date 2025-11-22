import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionSpecimenCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from './TestCatalogVersionSpecimenWhereUniqueInputSchema';
import { TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionSpecimenScalarWhereInputSchema } from './TestCatalogVersionSpecimenScalarWhereInputSchema';

export const TestCatalogVersionSpecimenUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionSpecimenCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionSpecimenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionSpecimenUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema), z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionSpecimenUpdateManyWithoutVersionNestedInputSchema;
