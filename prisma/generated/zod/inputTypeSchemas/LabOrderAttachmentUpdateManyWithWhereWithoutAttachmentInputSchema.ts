import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentScalarWhereInputSchema } from './LabOrderAttachmentScalarWhereInputSchema';
import { LabOrderAttachmentUpdateManyMutationInputSchema } from './LabOrderAttachmentUpdateManyMutationInputSchema';
import { LabOrderAttachmentUncheckedUpdateManyWithoutAttachmentInputSchema } from './LabOrderAttachmentUncheckedUpdateManyWithoutAttachmentInputSchema';

export const LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderAttachmentUpdateManyMutationInputSchema), z.lazy(() => LabOrderAttachmentUncheckedUpdateManyWithoutAttachmentInputSchema) ]),
});

export default LabOrderAttachmentUpdateManyWithWhereWithoutAttachmentInputSchema;
