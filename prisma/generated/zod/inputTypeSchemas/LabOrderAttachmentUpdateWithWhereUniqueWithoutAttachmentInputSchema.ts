import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentUpdateWithoutAttachmentInputSchema } from './LabOrderAttachmentUpdateWithoutAttachmentInputSchema';
import { LabOrderAttachmentUncheckedUpdateWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedUpdateWithoutAttachmentInputSchema';

export const LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderAttachmentUpdateWithoutAttachmentInputSchema), z.lazy(() => LabOrderAttachmentUncheckedUpdateWithoutAttachmentInputSchema) ]),
});

export default LabOrderAttachmentUpdateWithWhereUniqueWithoutAttachmentInputSchema;
