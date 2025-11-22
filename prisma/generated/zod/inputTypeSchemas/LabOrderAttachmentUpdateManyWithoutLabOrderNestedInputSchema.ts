import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateWithoutLabOrderInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema';
import { LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema';
import { LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema } from './LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInputSchema } from './LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInputSchema';
import { LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInputSchema } from './LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInputSchema';
import { LabOrderAttachmentScalarWhereInputSchema } from './LabOrderAttachmentScalarWhereInputSchema';

export const LabOrderAttachmentUpdateManyWithoutLabOrderNestedInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateManyWithoutLabOrderNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentCreateWithoutLabOrderInputSchema).array(), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderAttachmentCreateManyLabOrderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderAttachmentScalarWhereInputSchema), z.lazy(() => LabOrderAttachmentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderAttachmentUpdateManyWithoutLabOrderNestedInputSchema;
