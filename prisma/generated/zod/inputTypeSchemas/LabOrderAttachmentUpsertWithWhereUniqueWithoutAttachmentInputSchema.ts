import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentUpdateWithoutAttachmentInputSchema } from './LabOrderAttachmentUpdateWithoutAttachmentInputSchema';
import { LabOrderAttachmentUncheckedUpdateWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedUpdateWithoutAttachmentInputSchema';
import { LabOrderAttachmentCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentCreateWithoutAttachmentInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema';

export const LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderAttachmentUpdateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUncheckedUpdateWithoutAttachmentInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutAttachmentInputSchema) ]),
});

export default LabOrderAttachmentUpsertWithWhereUniqueWithoutAttachmentInputSchema;
