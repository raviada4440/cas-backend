import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema } from './TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInputSchema';
import { TestCatalogVersionOrderLoincScalarWhereInputSchema } from './TestCatalogVersionOrderLoincScalarWhereInputSchema';

export const TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutVersionInputSchema).array(), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderLoincCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionNestedInputSchema;
