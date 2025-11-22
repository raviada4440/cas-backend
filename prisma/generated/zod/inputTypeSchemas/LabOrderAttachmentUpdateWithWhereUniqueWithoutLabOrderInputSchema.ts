import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentUpdateWithoutLabOrderInputSchema } from './LabOrderAttachmentUpdateWithoutLabOrderInputSchema';
import { LabOrderAttachmentUncheckedUpdateWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedUpdateWithoutLabOrderInputSchema';

export const LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LabOrderAttachmentUpdateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUncheckedUpdateWithoutLabOrderInputSchema) ]),
});

export default LabOrderAttachmentUpdateWithWhereUniqueWithoutLabOrderInputSchema;
