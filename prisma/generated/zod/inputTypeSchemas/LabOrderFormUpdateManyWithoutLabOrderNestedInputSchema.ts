import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateWithoutLabOrderInputSchema } from './LabOrderFormCreateWithoutLabOrderInputSchema';
import { LabOrderFormUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderFormUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderFormCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderFormCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderFormCreateManyLabOrderInputEnvelopeSchema } from './LabOrderFormCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderFormUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderFormUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderFormScalarWhereInputSchema } from './LabOrderFormScalarWhereInputSchema';

export const LabOrderFormUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderFormUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderFormUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderFormCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderFormCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderFormUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderFormUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderFormScalarWhereInputSchema), z.lazy(() => LabOrderFormScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderFormUpdateManyWithoutLabOrderNestedInputSchema;
