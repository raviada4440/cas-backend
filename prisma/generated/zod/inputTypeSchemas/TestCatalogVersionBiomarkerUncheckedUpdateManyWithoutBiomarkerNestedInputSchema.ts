import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema } from './TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema';
import { TestCatalogVersionBiomarkerWhereUniqueInputSchema } from './TestCatalogVersionBiomarkerWhereUniqueInputSchema';
import { TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema } from './TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema';
import { TestCatalogVersionBiomarkerScalarWhereInputSchema } from './TestCatalogVersionBiomarkerScalarWhereInputSchema';

export const TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutBiomarkerNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutBiomarkerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateWithoutBiomarkerInputSchema).array(), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUncheckedCreateWithoutBiomarkerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerCreateOrConnectWithoutBiomarkerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUpsertWithWhereUniqueWithoutBiomarkerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionBiomarkerCreateManyBiomarkerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionBiomarkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUpdateWithWhereUniqueWithoutBiomarkerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema), z.lazy(() => TestCatalogVersionBiomarkerUpdateManyWithWhereWithoutBiomarkerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema), z.lazy(() => TestCatalogVersionBiomarkerScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionBiomarkerUncheckedUpdateManyWithoutBiomarkerNestedInputSchema;
