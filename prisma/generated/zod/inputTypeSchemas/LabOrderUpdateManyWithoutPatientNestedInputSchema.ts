import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutPatientInputSchema } from './LabOrderCreateWithoutPatientInputSchema';
import { LabOrderUncheckedCreateWithoutPatientInputSchema } from './LabOrderUncheckedCreateWithoutPatientInputSchema';
import { LabOrderCreateOrConnectWithoutPatientInputSchema } from './LabOrderCreateOrConnectWithoutPatientInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutPatientInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutPatientInputSchema';
import { LabOrderCreateManyPatientInputEnvelopeSchema } from './LabOrderCreateManyPatientInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutPatientInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutPatientInputSchema';
import { LabOrderUpdateManyWithWhereWithoutPatientInputSchema } from './LabOrderUpdateManyWithWhereWithoutPatientInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUpdateManyWithoutPatientNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithoutPatientNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutPatientInputSchema), z.lazy(() => LabOrderCreateWithoutPatientInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutPatientInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutPatientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutPatientInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutPatientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyPatientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutPatientInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutPatientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutPatientInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutPatientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUpdateManyWithoutPatientNestedInputSchema;
