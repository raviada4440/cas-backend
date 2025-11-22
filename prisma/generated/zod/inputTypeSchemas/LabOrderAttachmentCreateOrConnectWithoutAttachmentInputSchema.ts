import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentCreateWithoutAttachmentInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema';

export const LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateOrConnectWithoutAttachmentInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema) ]),
});

export default LabOrderAttachmentCreateOrConnectWithoutAttachmentInputSchema;
