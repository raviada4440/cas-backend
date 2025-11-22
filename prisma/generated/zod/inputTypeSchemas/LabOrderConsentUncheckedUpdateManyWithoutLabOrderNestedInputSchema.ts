import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateWithoutLabOrderInputSchema } from './LabOrderConsentCreateWithoutLabOrderInputSchema';
import { LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderConsentCreateManyLabOrderInputEnvelopeSchema } from './LabOrderConsentCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderConsentUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderConsentUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderConsentScalarWhereInputSchema } from './LabOrderConsentScalarWhereInputSchema';

export const LabOrderConsentUncheckedUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderConsentUncheckedUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderConsentCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderConsentUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderConsentUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderConsentScalarWhereInputSchema), z.lazy(() => LabOrderConsentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderConsentUncheckedUpdateManyWithoutLabOrderNestedInputSchema;
