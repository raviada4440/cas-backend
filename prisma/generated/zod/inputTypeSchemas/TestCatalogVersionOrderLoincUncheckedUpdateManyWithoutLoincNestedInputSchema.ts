import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema } from './TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema';
import { TestCatalogVersionOrderLoincWhereUniqueInputSchema } from './TestCatalogVersionOrderLoincWhereUniqueInputSchema';
import { TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInputSchema';
import { TestCatalogVersionOrderLoincScalarWhereInputSchema } from './TestCatalogVersionOrderLoincScalarWhereInputSchema';

export const TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutLoincNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutLoincNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateWithoutLoincInputSchema).array(), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedCreateWithoutLoincInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincCreateOrConnectWithoutLoincInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUpsertWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderLoincCreateManyLoincInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderLoincWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUpdateWithWhereUniqueWithoutLoincInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutLoincNestedInputSchema;
