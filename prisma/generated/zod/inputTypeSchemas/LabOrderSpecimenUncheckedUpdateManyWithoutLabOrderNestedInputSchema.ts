import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderSpecimenCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateWithoutLabOrderInputSchema';
import { LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema } from './LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderSpecimenWhereUniqueInputSchema } from './LabOrderSpecimenWhereUniqueInputSchema';
import { LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderSpecimenScalarWhereInputSchema } from './LabOrderSpecimenScalarWhereInputSchema';

export const LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderSpecimenCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderSpecimenCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema), z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema), z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema), z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema), z.lazy(() => LabOrderSpecimenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderSpecimenUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderSpecimenScalarWhereInputSchema), z.lazy(() => LabOrderSpecimenScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderSpecimenUncheckedUpdateManyWithoutLabOrderNestedInputSchema;
