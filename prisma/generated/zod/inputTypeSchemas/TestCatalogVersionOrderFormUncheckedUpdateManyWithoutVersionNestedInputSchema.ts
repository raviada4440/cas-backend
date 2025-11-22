import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionOrderFormScalarWhereInputSchema } from './TestCatalogVersionOrderFormScalarWhereInputSchema';

export const TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderFormCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderFormUncheckedUpdateManyWithoutVersionNestedInputSchema;
