import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereUniqueInputSchema } from './LabOrderAttachmentWhereUniqueInputSchema';
import { LabOrderAttachmentCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentCreateWithoutLabOrderInputSchema';
import { LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema';

export const LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentCreateOrConnectWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabOrderAttachmentCreateWithoutLabOrderInputSchema), z.lazy(() => LabOrderAttachmentUncheckedCreateWithoutLabOrderInputSchema) ]),
});

export default LabOrderAttachmentCreateOrConnectWithoutLabOrderInputSchema;
