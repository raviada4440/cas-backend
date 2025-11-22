import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderConsentCreateWithoutConsentInputSchema } from './LabOrderConsentCreateWithoutConsentInputSchema';
import { LabOrderConsentUncheckedCreateWithoutConsentInputSchema } from './LabOrderConsentUncheckedCreateWithoutConsentInputSchema';
import { LabOrderConsentCreateOrConnectWithoutConsentInputSchema } from './LabOrderConsentCreateOrConnectWithoutConsentInputSchema';
import { LabOrderConsentUpsertWithWhereUniqueWithoutConsentInputSchema } from './LabOrderConsentUpsertWithWhereUniqueWithoutConsentInputSchema';
import { LabOrderConsentCreateManyConsentInputEnvelopeSchema } from './LabOrderConsentCreateManyConsentInputEnvelopeSchema';
import { LabOrderConsentWhereUniqueInputSchema } from './LabOrderConsentWhereUniqueInputSchema';
import { LabOrderConsentUpdateWithWhereUniqueWithoutConsentInputSchema } from './LabOrderConsentUpdateWithWhereUniqueWithoutConsentInputSchema';
import { LabOrderConsentUpdateManyWithWhereWithoutConsentInputSchema } from './LabOrderConsentUpdateManyWithWhereWithoutConsentInputSchema';
import { LabOrderConsentScalarWhereInputSchema } from './LabOrderConsentScalarWhereInputSchema';

export const LabOrderConsentUpdateManyWithoutConsentNestedInputSchema: z.ZodType<Prisma.LabOrderConsentUpdateManyWithoutConsentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderConsentCreateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentCreateWithoutConsentInputSchema).array(), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUncheckedCreateWithoutConsentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentInputSchema), z.lazy(() => LabOrderConsentCreateOrConnectWithoutConsentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderConsentUpsertWithWhereUniqueWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUpsertWithWhereUniqueWithoutConsentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderConsentCreateManyConsentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderConsentWhereUniqueInputSchema), z.lazy(() => LabOrderConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderConsentUpdateWithWhereUniqueWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUpdateWithWhereUniqueWithoutConsentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderConsentUpdateManyWithWhereWithoutConsentInputSchema), z.lazy(() => LabOrderConsentUpdateManyWithWhereWithoutConsentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderConsentScalarWhereInputSchema), z.lazy(() => LabOrderConsentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderConsentUpdateManyWithoutConsentNestedInputSchema;
