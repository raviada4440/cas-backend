import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderTestCreateWithoutTestCatalogInputSchema } from './LabOrderTestCreateWithoutTestCatalogInputSchema';
import { LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema } from './LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema';
import { LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema } from './LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema';
import { LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema } from './LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema';
import { LabOrderTestCreateManyTestCatalogInputEnvelopeSchema } from './LabOrderTestCreateManyTestCatalogInputEnvelopeSchema';
import { LabOrderTestWhereUniqueInputSchema } from './LabOrderTestWhereUniqueInputSchema';
import { LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema } from './LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema';
import { LabOrderTestUpdateManyWithWhereWithoutTestCatalogInputSchema } from './LabOrderTestUpdateManyWithWhereWithoutTestCatalogInputSchema';
import { LabOrderTestScalarWhereInputSchema } from './LabOrderTestScalarWhereInputSchema';

export const LabOrderTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema: z.ZodType<Prisma.LabOrderTestUncheckedUpdateManyWithoutTestCatalogNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderTestCreateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestCreateWithoutTestCatalogInputSchema).array(), z.lazy(() => LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUncheckedCreateWithoutTestCatalogInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestCreateOrConnectWithoutTestCatalogInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUpsertWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderTestCreateManyTestCatalogInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderTestWhereUniqueInputSchema), z.lazy(() => LabOrderTestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUpdateWithWhereUniqueWithoutTestCatalogInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderTestUpdateManyWithWhereWithoutTestCatalogInputSchema), z.lazy(() => LabOrderTestUpdateManyWithWhereWithoutTestCatalogInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderTestScalarWhereInputSchema), z.lazy(() => LabOrderTestScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderTestUncheckedUpdateManyWithoutTestCatalogNestedInputSchema;
