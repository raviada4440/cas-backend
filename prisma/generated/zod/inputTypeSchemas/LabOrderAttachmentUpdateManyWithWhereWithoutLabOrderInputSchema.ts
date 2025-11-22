import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentScalarWhereInputSchema } from './LabOrderAttachmentScalarWhereInputSchema';
import { LabOrderAttachmentUpdateManyMutationInputSchema } from './LabOrderAttachmentUpdateManyMutationInputSchema';
import { LabOrderAttachmentUncheckedUpdateManyWithoutLabOrderInputSchema } from './LabOrderAttachmentUncheckedUpdateManyWithoutLabOrderInputSchema';

export const LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInputSchema: z.ZodType<Prisma.LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInput> = z.strictObject({
  where: z.lazy(() => LabOrderAttachmentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => LabOrderAttachmentUpdateManyMutationInputSchema), z.lazy(() => LabOrderAttachmentUncheckedUpdateManyWithoutLabOrderInputSchema) ]),
});

export default LabOrderAttachmentUpdateManyWithWhereWithoutLabOrderInputSchema;
