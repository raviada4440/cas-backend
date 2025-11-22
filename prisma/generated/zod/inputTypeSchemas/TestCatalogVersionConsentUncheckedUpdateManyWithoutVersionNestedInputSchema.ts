import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateWithoutVersionInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionConsentScalarWhereInputSchema } from './TestCatalogVersionConsentScalarWhereInputSchema';

export const TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionConsentCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema), z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionNestedInputSchema;
