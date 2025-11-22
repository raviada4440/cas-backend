import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderFormCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateWithoutVersionOrderFormInputSchema';
import { LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema } from './LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema';
import { LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema } from './LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema';
import { LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInputSchema } from './LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInputSchema';
import { LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema } from './LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema';
import { LabOrderFormWhereUniqueInputSchema } from './LabOrderFormWhereUniqueInputSchema';
import { LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInputSchema } from './LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInputSchema';
import { LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInputSchema } from './LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInputSchema';
import { LabOrderFormScalarWhereInputSchema } from './LabOrderFormScalarWhereInputSchema';

export const LabOrderFormUpdateManyWithoutVersionOrderFormNestedInputSchema: z.ZodType<Prisma.LabOrderFormUpdateManyWithoutVersionOrderFormNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderFormCreateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormCreateWithoutVersionOrderFormInputSchema).array(), z.lazy(() => LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUncheckedCreateWithoutVersionOrderFormInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormCreateOrConnectWithoutVersionOrderFormInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUpsertWithWhereUniqueWithoutVersionOrderFormInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderFormCreateManyVersionOrderFormInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderFormWhereUniqueInputSchema), z.lazy(() => LabOrderFormWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUpdateWithWhereUniqueWithoutVersionOrderFormInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInputSchema), z.lazy(() => LabOrderFormUpdateManyWithWhereWithoutVersionOrderFormInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderFormScalarWhereInputSchema), z.lazy(() => LabOrderFormScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderFormUpdateManyWithoutVersionOrderFormNestedInputSchema;
