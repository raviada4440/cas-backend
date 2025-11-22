import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutVersionInputSchema } from './LabOrderCreateWithoutVersionInputSchema';
import { LabOrderUncheckedCreateWithoutVersionInputSchema } from './LabOrderUncheckedCreateWithoutVersionInputSchema';
import { LabOrderCreateOrConnectWithoutVersionInputSchema } from './LabOrderCreateOrConnectWithoutVersionInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutVersionInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutVersionInputSchema';
import { LabOrderCreateManyVersionInputEnvelopeSchema } from './LabOrderCreateManyVersionInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutVersionInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutVersionInputSchema';
import { LabOrderUpdateManyWithWhereWithoutVersionInputSchema } from './LabOrderUpdateManyWithWhereWithoutVersionInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUpdateManyWithoutVersionNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithoutVersionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutVersionInputSchema), z.lazy(() => LabOrderCreateWithoutVersionInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutVersionInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutVersionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutVersionInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutVersionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyVersionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutVersionInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutVersionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutVersionInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutVersionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUpdateManyWithoutVersionNestedInputSchema;
