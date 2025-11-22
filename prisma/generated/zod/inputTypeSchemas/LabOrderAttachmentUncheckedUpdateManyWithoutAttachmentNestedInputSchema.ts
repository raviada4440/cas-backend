import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentCreateWithoutAttachmentInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema';
import { LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema } from './LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema';
import { LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInputSchema } from './LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInputSchema';
import { LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema } from './LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInputSchema } from './LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInputSchema';
import { LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInputSchema } from './LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInputSchema';
import { LabOrderAttachmentScalarWhereInputSchema } from './LabOrderAttachmentScalarWhereInputSchema';

export const LabOrderAttachmentUncheckedUpdateManyWithoutAttachmentNestedInputSchema: z.ZodType<Prisma.LabOrderAttachmentUncheckedUpdateManyWithoutAttachmentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentCreateWithoutAttachmentInputSchema).array(), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderAttachmentScalarWhereInputSchema), z.lazy(() => LabOrderAttachmentScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderAttachmentUncheckedUpdateManyWithoutAttachmentNestedInputSchema;
