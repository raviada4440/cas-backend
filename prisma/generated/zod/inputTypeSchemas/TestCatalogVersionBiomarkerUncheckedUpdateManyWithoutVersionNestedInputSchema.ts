import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionBiomarkerScalarWhereInputSchema } from './TestCatalogVersionBiomarkerScalarWhereInputSchema';

export const TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionBiomarkerCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema), z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutVersionNestedInputSchema;
