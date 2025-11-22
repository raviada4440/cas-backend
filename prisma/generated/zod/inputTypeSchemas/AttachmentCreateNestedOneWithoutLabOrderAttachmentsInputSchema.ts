import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema';
import { AttachmentWhereUniqueInputSchema } from './AttachmentWhereUniqueInputSchema';

export const AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.AttachmentCreateNestedOneWithoutLabOrderAttachmentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttachmentCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema).optional(),
  connect: z.lazy(() => AttachmentWhereUniqueInputSchema).optional(),
});

export default AttachmentCreateNestedOneWithoutLabOrderAttachmentsInputSchema;
