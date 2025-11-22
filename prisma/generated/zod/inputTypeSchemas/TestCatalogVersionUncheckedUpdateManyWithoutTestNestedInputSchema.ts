import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateWithoutTestInputSchema } from './TestCatalogVersionCreateWithoutTestInputSchema';
import { TestCatalogVersionUncheckedCreateWithoutTestInputSchema } from './TestCatalogVersionUncheckedCreateWithoutTestInputSchema';
import { TestCatalogVersionCreateOrConnectWithoutTestInputSchema } from './TestCatalogVersionCreateOrConnectWithoutTestInputSchema';
import { TestCatalogVersionUpsertWithWhereUniqueWithoutTestInputSchema } from './TestCatalogVersionUpsertWithWhereUniqueWithoutTestInputSchema';
import { TestCatalogVersionCreateManyTestInputEnvelopeSchema } from './TestCatalogVersionCreateManyTestInputEnvelopeSchema';
import { TestCatalogVersionWhereUniqueInputSchema } from './TestCatalogVersionWhereUniqueInputSchema';
import { TestCatalogVersionUpdateWithWhereUniqueWithoutTestInputSchema } from './TestCatalogVersionUpdateWithWhereUniqueWithoutTestInputSchema';
import { TestCatalogVersionUpdateManyWithWhereWithoutTestInputSchema } from './TestCatalogVersionUpdateManyWithWhereWithoutTestInputSchema';
import { TestCatalogVersionScalarWhereInputSchema } from './TestCatalogVersionScalarWhereInputSchema';

export const TestCatalogVersionUncheckedUpdateManyWithoutTestNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionUncheckedUpdateManyWithoutTestNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionCreateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionCreateWithoutTestInputSchema).array(), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUncheckedCreateWithoutTestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionCreateOrConnectWithoutTestInputSchema), z.lazy(() => TestCatalogVersionCreateOrConnectWithoutTestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionUpsertWithWhereUniqueWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUpsertWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionCreateManyTestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionUpdateWithWhereUniqueWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUpdateWithWhereUniqueWithoutTestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionUpdateManyWithWhereWithoutTestInputSchema), z.lazy(() => TestCatalogVersionUpdateManyWithWhereWithoutTestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionScalarWhereInputSchema), z.lazy(() => TestCatalogVersionScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionUncheckedUpdateManyWithoutTestNestedInputSchema;
