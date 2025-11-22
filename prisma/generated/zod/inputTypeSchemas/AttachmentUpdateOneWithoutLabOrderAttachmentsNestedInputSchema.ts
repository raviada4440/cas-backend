import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema } from './AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUpsertWithoutLabOrderAttachmentsInputSchema } from './AttachmentUpsertWithoutLabOrderAttachmentsInputSchema';
import { AttachmentWhereInputSchema } from './AttachmentWhereInputSchema';
import { AttachmentWhereUniqueInputSchema } from './AttachmentWhereUniqueInputSchema';
import { AttachmentUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema } from './AttachmentUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUpdateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUpdateWithoutLabOrderAttachmentsInputSchema';
import { AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema } from './AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema';

export const AttachmentUpdateOneWithoutLabOrderAttachmentsNestedInputSchema: z.ZodType<Prisma.AttachmentUpdateOneWithoutLabOrderAttachmentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AttachmentCreateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedCreateWithoutLabOrderAttachmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AttachmentCreateOrConnectWithoutLabOrderAttachmentsInputSchema).optional(),
  upsert: z.lazy(() => AttachmentUpsertWithoutLabOrderAttachmentsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AttachmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AttachmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AttachmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AttachmentUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUpdateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => AttachmentUncheckedUpdateWithoutLabOrderAttachmentsInputSchema) ]).optional(),
});

export default AttachmentUpdateOneWithoutLabOrderAttachmentsNestedInputSchema;
