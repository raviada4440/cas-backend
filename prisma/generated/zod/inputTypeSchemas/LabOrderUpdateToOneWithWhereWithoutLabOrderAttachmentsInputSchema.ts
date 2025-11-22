import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { LabOrderUpdateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUpdateWithoutLabOrderAttachmentsInputSchema';
import { LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema } from './LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema';

export const LabOrderUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema: z.ZodType<Prisma.LabOrderUpdateToOneWithWhereWithoutLabOrderAttachmentsInput> = z.strictObject({
  where: z.lazy(() => LabOrderWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabOrderUpdateWithoutLabOrderAttachmentsInputSchema), z.lazy(() => LabOrderUncheckedUpdateWithoutLabOrderAttachmentsInputSchema) ]),
});

export default LabOrderUpdateToOneWithWhereWithoutLabOrderAttachmentsInputSchema;
