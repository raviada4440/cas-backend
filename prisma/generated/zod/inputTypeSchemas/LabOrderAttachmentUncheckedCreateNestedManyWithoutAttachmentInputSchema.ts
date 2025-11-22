import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentCreateWithoutAttachmentInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema';
import { LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema } from './LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema';
import { LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema } from './LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';

export const LabOrderAttachmentUncheckedCreateNestedManyWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentUncheckedCreateNestedManyWithoutAttachmentInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentCreateWithoutAttachmentInputSchema).array(), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderAttachmentCreateManyAttachmentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema), z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderAttachmentUncheckedCreateNestedManyWithoutAttachmentInputSchema;
