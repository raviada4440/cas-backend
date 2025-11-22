import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentUpdateWithoutLabOrderInputSchema } from './LabOrderAttachmentUpdateWithoutLabOrderInputSchema';
import { LabOrderAttachmentUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedUpdateWithoutLabOrderInputSchema';
import { LabOrderAttachmentCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateWithoutLabOrderInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LabOrderAttachmentUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUncheckedUpdateWithoutLabOrderInputSchema) ]),
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderAttachmentUpsertWithWhereUniqueWithoutLabOrderInputSchema;
